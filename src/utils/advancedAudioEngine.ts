// Enterprise Web Audio API Advanced Engine & Rev Simulator

export type EngineProfile = 'v12' | 'v10' | 'v8' | 'flat6' | 'inline6' | 'inline4' | 'v6' | 'w16' | 'turbo' | 'electric' | 'rotary';

class AdvancedAudioEngine {
  private ctx: AudioContext | null = null;
  private primaryOsc: OscillatorNode | null = null;
  private harmonicOsc: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private whistleOsc: OscillatorNode | null = null;
  private masterGain: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private distortionNode: WaveShaperNode | null = null;

  private isRunning: boolean = false;
  private isMuted: boolean = false;
  private currentProfile: EngineProfile = 'v12';
  private currentRPM: number = 1000;

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

  private createDistortionCurve(amount: number = 18): Float32Array<ArrayBuffer> {
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

  public getIsRunning(): boolean {
    return this.isRunning;
  }

  public getCurrentRPM(): number {
    return this.currentRPM;
  }

  public startEngine(profile: EngineProfile = 'v12', initialRPM: number = 1000) {
    if (this.isMuted) return;

    try {
      this.stop();
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;
      this.currentProfile = profile;
      this.currentRPM = Math.max(800, Math.min(9500, initialRPM));

      // WaveShaper analog exhaust saturation node
      this.distortionNode = ctx.createWaveShaper();
      this.distortionNode.curve = this.createDistortionCurve(profile === 'v8' || profile === 'w16' ? 32 : 16);
      this.distortionNode.oversample = '4x';

      // Master Gain setup (Increased to peak 0.48 - 0.62 for rich, clear volume)
      let targetGain = 0.52;
      if (profile === 'v8' || profile === 'w16') targetGain = 0.62;
      if (profile === 'v10' || profile === 'turbo') targetGain = 0.58;
      if (profile === 'electric') targetGain = 0.42;

      this.masterGain = ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, now);
      this.masterGain.gain.exponentialRampToValueAtTime(targetGain, now + 0.1);
      
      this.distortionNode.connect(this.masterGain);
      this.masterGain.connect(ctx.destination);

      // Filter Node setup
      this.filterNode = ctx.createBiquadFilter();
      this.configureFilter(profile, initialRPM, now);
      this.filterNode.connect(this.distortionNode);

      // Primary, Harmonic, and Sub Oscillators
      this.primaryOsc = ctx.createOscillator();
      this.harmonicOsc = ctx.createOscillator();
      this.subOsc = ctx.createOscillator();

      const baseFreq = this.calculateBaseFreq(initialRPM, profile);

      this.primaryOsc.type = profile === 'v12' || profile === 'v10' || profile === 'v8' || profile === 'w16' || profile === 'rotary'
        ? 'sawtooth'
        : profile === 'electric'
        ? 'sine'
        : profile === 'inline4'
        ? 'square'
        : 'triangle';
      this.primaryOsc.frequency.setValueAtTime(baseFreq, now);

      this.harmonicOsc.type = profile === 'v10' ? 'sawtooth' : profile === 'v8' ? 'square' : 'sawtooth';
      this.harmonicOsc.frequency.setValueAtTime(baseFreq * (profile === 'v10' ? 2.5 : profile === 'v12' ? 1.5 : 2.0), now);

      this.subOsc.type = profile === 'v8' || profile === 'w16' ? 'sine' : 'triangle';
      this.subOsc.frequency.setValueAtTime(baseFreq * (profile === 'v8' ? 0.5 : 0.75), now);

      this.primaryOsc.connect(this.filterNode);
      this.harmonicOsc.connect(this.filterNode);
      this.subOsc.connect(this.filterNode);

      // Turbo / W16 Whistle Layer
      if (profile === 'turbo' || profile === 'w16') {
        this.whistleOsc = ctx.createOscillator();
        this.whistleOsc.type = 'sine';
        this.whistleOsc.frequency.setValueAtTime(1400 + initialRPM * 0.45, now);

        const whistleGain = ctx.createGain();
        whistleGain.gain.setValueAtTime(0.02, now);
        whistleGain.gain.exponentialRampToValueAtTime(0.14, now + 0.2);

        this.whistleOsc.connect(whistleGain);
        whistleGain.connect(this.masterGain);
        this.whistleOsc.start(now);
      }

      this.primaryOsc.start(now);
      this.harmonicOsc.start(now);
      this.subOsc.start(now);

      this.isRunning = true;
    } catch {
      // safe fallback
    }
  }

  public setRPM(rpm: number) {
    this.currentRPM = Math.max(800, Math.min(9500, rpm));
    if (!this.isRunning || !this.ctx || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;
      const baseFreq = this.calculateBaseFreq(this.currentRPM, this.currentProfile);

      if (this.primaryOsc) {
        this.primaryOsc.frequency.setTargetAtTime(baseFreq, now, 0.04);
      }
      if (this.harmonicOsc) {
        const mult = this.currentProfile === 'v10' ? 2.5 : this.currentProfile === 'v12' ? 1.5 : 2.0;
        this.harmonicOsc.frequency.setTargetAtTime(baseFreq * mult, now, 0.04);
      }
      if (this.subOsc) {
        const mult = this.currentProfile === 'v8' ? 0.5 : 0.75;
        this.subOsc.frequency.setTargetAtTime(baseFreq * mult, now, 0.04);
      }
      if (this.whistleOsc) {
        this.whistleOsc.frequency.setTargetAtTime(1400 + this.currentRPM * 0.5, now, 0.04);
      }
      if (this.filterNode) {
        this.updateFilterRPM(this.currentProfile, this.currentRPM, now);
      }
    } catch {
      // safe fallback
    }
  }

  public triggerBlowOffValve() {
    if (!this.isRunning || !this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.28; // 280ms burst of noise
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'highpass';
      noiseFilter.frequency.setValueAtTime(3200, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.18, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // safe fallback
    }
  }

  public stop() {
    try {
      const now = this.ctx ? this.ctx.currentTime : 0;
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      }

      setTimeout(() => {
        if (this.primaryOsc) {
          this.primaryOsc.stop();
          this.primaryOsc.disconnect();
          this.primaryOsc = null;
        }
        if (this.harmonicOsc) {
          this.harmonicOsc.stop();
          this.harmonicOsc.disconnect();
          this.harmonicOsc = null;
        }
        if (this.subOsc) {
          this.subOsc.stop();
          this.subOsc.disconnect();
          this.subOsc = null;
        }
        if (this.whistleOsc) {
          this.whistleOsc.stop();
          this.whistleOsc.disconnect();
          this.whistleOsc = null;
        }
        this.isRunning = false;
      }, 120);
    } catch {
      this.isRunning = false;
    }
  }

  private configureFilter(profile: EngineProfile, rpm: number, now: number) {
    if (!this.filterNode) return;
    if (profile === 'v12' || profile === 'v10') {
      this.filterNode.type = 'peaking';
      this.filterNode.frequency.setValueAtTime(1400 + (rpm / 9000) * 2200, now);
      this.filterNode.Q.value = profile === 'v10' ? 2.5 : 1.8;
    } else if (profile === 'v8') {
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(400 + (rpm / 9000) * 1200, now);
    } else if (profile === 'flat6' || profile === 'inline4') {
      this.filterNode.type = 'bandpass';
      this.filterNode.frequency.setValueAtTime(600 + (rpm / 9000) * 1400, now);
      this.filterNode.Q.value = 1.2;
    } else if (profile === 'electric') {
      this.filterNode.type = 'highpass';
      this.filterNode.frequency.setValueAtTime(300, now);
    } else {
      this.filterNode.type = 'peaking';
      this.filterNode.frequency.setValueAtTime(800 + (rpm / 9000) * 2000, now);
      this.filterNode.Q.value = 1.5;
    }
  }

  private updateFilterRPM(profile: EngineProfile, rpm: number, now: number) {
    if (!this.filterNode) return;
    let targetFreq = 1200;
    if (profile === 'v12' || profile === 'v10') {
      targetFreq = 1400 + (rpm / 9000) * 2400;
    } else if (profile === 'v8') {
      targetFreq = 400 + (rpm / 9000) * 1400;
    } else if (profile === 'electric') {
      targetFreq = 300 + (rpm / 9000) * 800;
    } else {
      targetFreq = 700 + (rpm / 9000) * 1800;
    }
    this.filterNode.frequency.setTargetAtTime(targetFreq, now, 0.05);
  }

  private calculateBaseFreq(rpm: number, profile: EngineProfile): number {
    const rpmFactor = rpm / 60; // Revs per second
    if (profile === 'v12') {
      return rpmFactor * 6; // 12-cylinder firing pulses
    } else if (profile === 'v10') {
      return rpmFactor * 5; // 10-cylinder high F1 firing pulses
    } else if (profile === 'v8') {
      return rpmFactor * 4; // 8-cylinder firing pulses
    } else if (profile === 'w16') {
      return rpmFactor * 8; // 16-cylinder firing pulses
    } else if (profile === 'flat6' || profile === 'inline6' || profile === 'v6') {
      return rpmFactor * 3; // 6-cylinder firing pulses
    } else if (profile === 'rotary' || profile === 'turbo') {
      return rpmFactor * 3.5;
    } else if (profile === 'electric') {
      return 200 + (rpm / 9000) * 2800; // Futuristic EV pitch sweep
    } else {
      return rpmFactor * 2; // 4-cylinder firing pulses
    }
  }
}

export const advancedAudioEngine = new AdvancedAudioEngine();
