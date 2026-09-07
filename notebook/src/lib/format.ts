const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function fmtShort(d: Date): string {
  // dd/mm, as in the lists
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}`;
}

export function fmtLong(d: Date): string {
  // 3 July, 2026, as on a page
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
}

export function statusLabel(s: string): string {
  switch (s) {
    case 'in-revision': return 'in revision';
    case 'in-development': return 'in development';
    default: return s;
  }
}

export function byNewest<T extends { data: { created: Date } }>(a: T, b: T): number {
  return b.data.created.getTime() - a.data.created.getTime();
}

export function withYearFlags<T extends { data: { created: Date } }>(items: T[]): { item: T; showYear: boolean }[] {
  let last = -1;
  return items.map((item) => {
    const y = item.data.created.getUTCFullYear();
    const showYear = y !== last;
    last = y;
    return { item, showYear };
  });
}
