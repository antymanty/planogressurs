const basePath = '/demo/terrengstudio'

export default function imageLoader({ src, width, quality }) {
  const url = src.startsWith('/') ? `${basePath}${src}` : src
  return `${basePath}/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=${quality || 75}`
}
