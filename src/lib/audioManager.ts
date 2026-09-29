/**
 * Audio Context and Synthesis Manager for Monologue
 * Provides zero-leak lifecycle cleanup, audio unlock on first user gesture,
 * and synthesized waveform frequency monitoring.
 */

export interface TrackMeta {
  id: string;
  title: string;
  speaker: string;
  duration: number;
}

class AudioManager {
  private ctx: AudioContext | null = null;
  private isUnlocked = false;

  public getAudioContext(): AudioContext {
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    return this.ctx;
  }

  public async unlock(): Promise<boolean> {
    if (this.isUnlocked) return true;
    try {
      const ctx = this.getAudioContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
      this.isUnlocked = true;
      return true;
    } catch {
      return false;
    }
  }

  public createTone(freq = 440, duration = 0.5): void {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio synthesis skipped due to context constraints:', e);
    }
  }

  public destroy(): void {
    if (this.ctx && this.ctx.state !== 'closed') {
      this.ctx.close().catch(() => {});
      this.ctx = null;
      this.isUnlocked = false;
    }
  }
}

export const audioManager = new AudioManager();
