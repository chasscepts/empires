export default function normalizeError(error) {
  if (typeof error === 'string') return error;
  if (error.message) return error.message;
  return 'Unknown Error';
}
