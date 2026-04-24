export type MediaAsset = {
  id: string
  src: string
  name: string
  alt: string
}

export type CertificationAsset = {
  id: string
  src: string
  fileName: string
  label: string
}

const mediaModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const certificationModules = import.meta.glob('../assets/certification/*.pdf', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function cleanLabel(filePath: string) {
  const withExt = filePath.split('/').pop() ?? 'resource'
  const noExt = withExt.replace(/\.[^.]+$/, '')
  return noExt.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
}

export const mediaAssets: MediaAsset[] = Object.entries(mediaModules)
  .map(([key, src], index) => {
    const name = cleanLabel(key)
    return {
      id: `media-${index + 1}`,
      src,
      name,
      alt: `Media EMPIRE KIMA - ${name}`,
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export const certificationAssets: CertificationAsset[] = Object.entries(
  certificationModules,
)
  .map(([key, src], index) => {
    const fileName = key.split('/').pop() ?? `certification-${index + 1}.pdf`
    return {
      id: `certification-${index + 1}`,
      src,
      fileName,
      label: cleanLabel(fileName),
    }
  })
  .sort((a, b) => a.label.localeCompare(b.label))
