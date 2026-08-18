// Web Audio API Engine Synthesizer for Automotive Icons

export type EngineProfile = 'v12' | 'v10' | 'v8' | 'flat6' | 'inline6' | 'inline4' | 'v6' | 'w16' | 'turbo' | 'electric' | 'rotary';

class EngineSoundEngine {
  private ctx: AudioContext | null = null;
  private activeNodes: (OscillatorNode | AudioBufferSourceNode)[] = [];
  private isMuted: boolean = false;

  private getAudioContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stop();
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Helper to create a warm analog saturation curve for exhaust shaper
   */
  private createDistortionCurve(amount: number = 20): Float32Array<ArrayBuffer> {
    const samples = 44100;
    const buffer = new ArrayBuffer(samples * 4);
    const curve = new Float32Array(buffer);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1;
      curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
  }

  public playEngineNote(profile: EngineProfile = 'v12') {
    this.isMuted = false;

    try {
      this.stop();
      const ctx = this.getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;
      const duration = 2.2; // 2.2s immersive rev sample

      // WaveShaper for warm exhaust saturation & analog tube character
      const distortion = ctx.createWaveShaper();
      distortion.curve = this.createDistortionCurve(profile === 'v8' || profile === 'w16' ? 35 : 15);
      distortion.oversample = '4x';

      // Master Gain setup (Increased to peak 0.52 - 0.68 for loud, rich sound)
      const masterGain = ctx.createGain();
      let peakGain = 0.58;
      if (profile === 'v8' || profile === 'w16') peakGain = 0.68;
      if (profile === 'v10' || profile === 'turbo') peakGain = 0.62;
      if (profile === 'electric') peakGain = 0.48;

      masterGain.gain.setValueAtTime(0.01, now);
      masterGain.gain.exponentialRampToValueAtTime(peakGain, now + 0.12); // Fast punchy attack
      masterGain.gain.exponentialRampToValueAtTime(peakGain * 0.75, now + 0.9); // Rev hold
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      distortion.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Acoustic Filter setup
      const filter = ctx.createBiquadFilter();

      if (profile === 'v12') {
        // High harmonic screaming symphony (e.g. Ferrari Colombo, Lambo V12, McLaren F1)
        filter.type = 'peaking';
        filter.frequency.setValueAtTime(1400, now);
        filter.frequency.exponentialRampToValueAtTime(2800, now + 0.8);
        filter.Q.value = 1.8;

        const baseFreq = 175;
        const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2.25, baseFreq * 3.0];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.exponentialRampToValueAtTime(f * 2.4, now + 0.85); // High rev scream
          osc.frequency.exponentialRampToValueAtTime(f * 0.95, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = (1 / (idx + 1.2)) * 0.8;
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'v10') {
        // Ultra-high RPM screaming F1 roar (e.g. Porsche Carrera GT, Lexus LFA)
        filter.type = 'peaking';
        filter.frequency.setValueAtTime(1800, now);
        filter.frequency.exponentialRampToValueAtTime(3600, now + 0.9);
        filter.Q.value = 2.5;

        const baseFreq = 190;
        const freqs = [baseFreq, baseFreq * 1.25, baseFreq * 2.5, baseFreq * 4.0];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'sawtooth' : idx === 1 ? 'triangle' : 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.exponentialRampToValueAtTime(f * 2.8, now + 0.9); // High pitch howl
          osc.frequency.exponentialRampToValueAtTime(f * 0.9, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = (1 / (idx + 1.4)) * 0.85;
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'v8') {
        // Deep muscle crossplane V8 rumble & bass thrum (e.g. Shelby 427, Hemi, Mustang, Bel Air)
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, now);
        filter.frequency.linearRampToValueAtTime(950, now + 0.8);

        // Sub bass oscillator
        const subOsc = ctx.createOscillator();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(45, now);
        subOsc.frequency.linearRampToValueAtTime(110, now + 0.8);
        subOsc.frequency.linearRampToValueAtTime(45, now + duration);

        const subGain = ctx.createGain();
        subGain.gain.value = 0.9;
        subOsc.connect(subGain);
        subGain.connect(masterGain);
        subOsc.start(now);
        subOsc.stop(now + duration);
        this.activeNodes.push(subOsc);

        // Crossplane out-of-phase dual sawtooth for uneven V8 pulse rumble
        const f1 = 70;
        const f2 = 72.8; // 2.8Hz beat frequency for crossplane rumble
        [f1, f2].forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.linearRampToValueAtTime(f * 2.1, now + 0.8);
          osc.frequency.linearRampToValueAtTime(f * 0.95, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = idx === 0 ? 0.6 : 0.55;
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });

        // Manifold intake square wave
        const sqOsc = ctx.createOscillator();
        sqOsc.type = 'square';
        sqOsc.frequency.setValueAtTime(140, now);
        sqOsc.frequency.linearRampToValueAtTime(290, now + 0.8);
        const sqGain = ctx.createGain();
        sqGain.gain.value = 0.25;
        sqOsc.connect(sqGain);
        sqGain.connect(filter);
        sqOsc.start(now);
        sqOsc.stop(now + duration);
        this.activeNodes.push(sqOsc);
      } else if (profile === 'flat6') {
        // Metallic air-cooled Porsche 911 boxer growl
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(850, now);
        filter.frequency.linearRampToValueAtTime(1600, now + 0.8);
        filter.Q.value = 1.2;

        const baseFreq = 120;
        const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2.0];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'triangle' : 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.linearRampToValueAtTime(f * 2.2, now + 0.8);
          osc.frequency.linearRampToValueAtTime(f * 0.9, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = 0.5 / (idx + 1);
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'inline6') {
        // Silky smooth twin-cam inline 6 howl (e.g. BMW M3, Supra 2JZ, Skyline GT-R, Jag XK120)
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.85);

        const baseFreq = 135;
        const freqs = [baseFreq * 0.5, baseFreq, baseFreq * 2.0, baseFreq * 3.0];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'sine' : idx === 1 ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.exponentialRampToValueAtTime(f * 2.3, now + 0.85);
          osc.frequency.exponentialRampToValueAtTime(f * 0.95, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = idx === 0 ? 0.4 : 0.35 / idx;
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'inline4') {
        // Crisp, punchy 4-cylinder exhaust thrum & vintage engine chug
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(650, now);
        filter.frequency.linearRampToValueAtTime(1450, now + 0.8);
        filter.Q.value = 1.0;

        const baseFreq = 100;
        const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2.0];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'square' : 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.linearRampToValueAtTime(f * 2.1, now + 0.8);
          osc.frequency.linearRampToValueAtTime(f * 0.9, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = 0.45 / (idx + 1);
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'v6') {
        // Throaty V6 engine rasp (e.g. Honda NSX, DeLorean PRV V6)
        filter.type = 'peaking';
        filter.frequency.setValueAtTime(1100, now);
        filter.frequency.linearRampToValueAtTime(2200, now + 0.8);
        filter.Q.value = 1.5;

        const baseFreq = 115;
        const freqs = [baseFreq, baseFreq * 1.33, baseFreq * 2.0];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 1 ? 'square' : 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.linearRampToValueAtTime(f * 2.25, now + 0.8);
          osc.frequency.linearRampToValueAtTime(f * 0.9, now + duration - 0.1);

          const g = ctx.createGain();
          g.gain.value = 0.4 / (idx + 1);
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'w16') {
        // Massive 8.0L quad-turbo 16-cylinder deep thunder (e.g. Bugatti Veyron / Chiron)
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.linearRampToValueAtTime(1500, now + 0.9);

        // Heavy sub-bass foundation
        const subOsc = ctx.createOscillator();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(38, now);
        subOsc.frequency.linearRampToValueAtTime(95, now + 0.9);
        const subGain = ctx.createGain();
        subGain.gain.value = 0.95;
        subOsc.connect(subGain);
        subGain.connect(masterGain);
        subOsc.start(now);
        subOsc.stop(now + duration);
        this.activeNodes.push(subOsc);

        // 16-cylinder firing pulse stack
        [50, 100, 150].forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.linearRampToValueAtTime(f * 2.3, now + 0.9);
          const g = ctx.createGain();
          g.gain.value = 0.5 / (idx + 1);
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });

        // Quad Turbo Spool Whistle
        const turboWhistle = ctx.createOscillator();
        turboWhistle.type = 'sine';
        turboWhistle.frequency.setValueAtTime(2400, now);
        turboWhistle.frequency.exponentialRampToValueAtTime(5600, now + 1.0);
        const whistleGain = ctx.createGain();
        whistleGain.gain.setValueAtTime(0.01, now);
        whistleGain.gain.exponentialRampToValueAtTime(0.12, now + 0.9);
        whistleGain.gain.linearRampToValueAtTime(0.001, now + duration);
        turboWhistle.connect(whistleGain);
        whistleGain.connect(masterGain);
        turboWhistle.start(now);
        turboWhistle.stop(now + duration);
        this.activeNodes.push(turboWhistle);
      } else if (profile === 'turbo') {
        // High-boost forced induction roar + turbo spool whistle + blow-off valve flutter (e.g. Ferrari F40, Porsche 959)
        filter.type = 'peaking';
        filter.frequency.setValueAtTime(1600, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.85);
        filter.Q.value = 2.0;

        const engineOsc = ctx.createOscillator();
        engineOsc.type = 'sawtooth';
        engineOsc.frequency.setValueAtTime(130, now);
        engineOsc.frequency.exponentialRampToValueAtTime(390, now + 0.85);

        const boostOsc = ctx.createOscillator();
        boostOsc.type = 'square';
        boostOsc.frequency.setValueAtTime(260, now);
        boostOsc.frequency.exponentialRampToValueAtTime(780, now + 0.85);

        const whistleOsc = ctx.createOscillator();
        whistleOsc.type = 'sine';
        whistleOsc.frequency.setValueAtTime(1600, now);
        whistleOsc.frequency.exponentialRampToValueAtTime(4800, now + 0.95);

        const whistleGain = ctx.createGain();
        whistleGain.gain.setValueAtTime(0.01, now);
        whistleGain.gain.linearRampToValueAtTime(0.18, now + 0.9);

        const engineGain = ctx.createGain();
        engineGain.gain.value = 0.55;
        const boostGain = ctx.createGain();
        boostGain.gain.value = 0.35;

        engineOsc.connect(engineGain);
        boostOsc.connect(boostGain);
        engineGain.connect(filter);
        boostGain.connect(filter);

        whistleOsc.connect(whistleGain);
        whistleGain.connect(masterGain);

        engineOsc.start(now);
        boostOsc.start(now);
        whistleOsc.start(now);
        engineOsc.stop(now + duration);
        boostOsc.stop(now + duration);
        whistleOsc.stop(now + duration);
        this.activeNodes.push(engineOsc, boostOsc, whistleOsc);

        // Blow-off valve flutter noise burst near end of rev ramp
        const bufferSize = ctx.sampleRate * 0.2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const blowOff = ctx.createBufferSource();
        blowOff.buffer = buffer;
        const blowOffFilter = ctx.createBiquadFilter();
        blowOffFilter.type = 'highpass';
        blowOffFilter.frequency.value = 3500;
        const blowOffGain = ctx.createGain();
        blowOffGain.gain.setValueAtTime(0.001, now);
        blowOffGain.gain.setValueAtTime(0.12, now + 0.95);
        blowOffGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        blowOff.connect(blowOffFilter);
        blowOffFilter.connect(blowOffGain);
        blowOffGain.connect(masterGain);
        blowOff.start(now + 0.95);
        this.activeNodes.push(blowOff);
      } else if (profile === 'rotary') {
        // High-RPM Wankel rotary buzz (e.g. Mazda RX-7)
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(280, now);

        const baseFreq = 180;
        [baseFreq, baseFreq * 1.5, baseFreq * 3.0].forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'square' : 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.exponentialRampToValueAtTime(f * 2.8, now + 0.85);

          const g = ctx.createGain();
          g.gain.value = 0.4 / (idx + 1);
          osc.connect(g);
          g.connect(filter);
          osc.start(now);
          osc.stop(now + duration);
          this.activeNodes.push(osc);
        });
      } else if (profile === 'electric') {
        // High-tech futuristic EV motor whir & energy acceleration pitch sweep (Rimac, Tesla)
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(250, now);

        const elOsc1 = ctx.createOscillator();
        elOsc1.type = 'sine';
        elOsc1.frequency.setValueAtTime(280, now);
        elOsc1.frequency.exponentialRampToValueAtTime(3400, now + 1.1);

        const elOsc2 = ctx.createOscillator();
        elOsc2.type = 'sine';
        elOsc2.frequency.setValueAtTime(560, now);
        elOsc2.frequency.exponentialRampToValueAtTime(6800, now + 1.1);

        const g1 = ctx.createGain();
        g1.gain.value = 0.5;
        const g2 = ctx.createGain();
        g2.gain.value = 0.25;

        elOsc1.connect(g1);
        elOsc2.connect(g2);
        g1.connect(filter);
        g2.connect(filter);

        elOsc1.start(now);
        elOsc2.start(now);
        elOsc1.stop(now + duration);
        elOsc2.stop(now + duration);
        this.activeNodes.push(elOsc1, elOsc2);
      }

      filter.connect(distortion);
    } catch {
      // safe fallback
    }
  }

  public stop() {
    this.activeNodes.forEach(node => {
      try {
        if ('stop' in node) {
          node.stop();
        }
        node.disconnect();
      } catch {
        // safe cleanup
      }
    });
    this.activeNodes = [];
  }
}

export const audioEngine = new EngineSoundEngine();
