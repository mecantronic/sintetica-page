export async function urlToBlob (url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const blob = new Blob([arrayBuffer], { type: response.headers.get('content-type') });
  return blob;
}
