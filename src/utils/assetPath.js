export function resolveAssetPath(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('blob:') || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (path.startsWith('/')) {
    return `${base.replace(/\/$/, '')}${path}`;
  }
  return `${base}${path}`;
}
