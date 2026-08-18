// Museum Gallery Ambient Soundscape Synthesizer for Automotive Icons

class MuseumAmbientSoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isActive: boolean = false;
  private masterGain: GainNode | null = null;
  private idleOsc: OscillatorNode | null = null;

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

  public toggle(): boolean {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.start();
    } else {
      this.stop();
    }
    return this.isActive;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public start() {
    try {
      this.stop();
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;

      this.masterGain = ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.04, now + 1.5); // Subtle ambient level
      this.masterGain.connect(ctx.destination);

      // Low rumble idling V12 in distance
      this.idleOsc = ctx.createOscillator();
      this.idleOsc.type = 'triangle';
      this.idleOsc.frequency.setValueAtTime(42, now); // Low 42 Hz deep idle

      // Lowpass filter for reverberant room feel
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, now);

      // Subtle LFO modulation for breathing engine idle effect
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.4, now); // 0.4 Hz slow breathing idle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(4.0, now);
      lfo.connect(lfoGain);
      lfoGain.connect(this.idleOsc.frequency);

      this.idleOsc.connect(filter);
      filter.connect(this.masterGain);

      this.idleOsc.start(now);
      lfo.start(now);
      this.isActive = true;
    } catch {
      this.isActive = false;
    }
  }

  public stop() {
    if (this.idleOsc) {
      try {
        this.idleOsc.stop();
        this.idleOsc.disconnect();
      } catch {
        // safe cleanup
      }
      this.idleOsc = null;
    }
    if (this.masterGain) {
      try {
        this.masterGain.disconnect();
      } catch {
        // safe cleanup
      }
      this.masterGain = null;
    }
    this.isActive = false;
  }
}

export const ambientSoundscape = new MuseumAmbientSoundscapeEngine();
