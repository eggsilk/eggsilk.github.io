// Prefix a root-relative path with the site's base (import.meta.env.BASE_URL),
// so the same templates work at the root of a domain and under a project path.
export const u = (p: string): string => {
  const b = import.meta.env.BASE_URL;
  return (b.endsWith('/') ? b.slice(0, -1) : b) + p;
};
