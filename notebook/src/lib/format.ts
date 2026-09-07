export function fmtDate(d: Date): string {
  // ISO date, always. Absolute dates only; relative dates hide staleness.
  return d.toISOString().slice(0, 10);
}

export function statusLabel(s: string): string {
  switch (s) {
    case 'draft': return 'draft';
    case 'published': return 'published';
    case 'in-revision': return 'in revision';
    case 'superseded': return 'superseded';
    case 'in-development': return 'in development';
    default: return s;
  }
}

export function statusClass(s: string): string {
  switch (s) {
    case 'draft': return 'flag-draft';
    case 'published': return 'flag-pub';
    case 'in-revision': return 'flag-rev';
    case 'in-development': return 'flag-draft';
    case 'superseded': return 'flag-sup';
    default: return '';
  }
}

export function confidenceLabel(c?: string): string {
  switch (c) {
    case 'certain': return 'certain';
    case 'highly-likely': return 'highly likely';
    case 'likely': return 'likely';
    case 'possible': return 'possible';
    case 'speculative': return 'speculative';
    default: return '';
  }
}

export function byNewest<T extends { data: { created: Date } }>(a: T, b: T): number {
  return b.data.created.getTime() - a.data.created.getTime();
}
