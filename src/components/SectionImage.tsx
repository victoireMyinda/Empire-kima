import { useState } from 'react'
import styles from './SectionImage.module.css'

type SectionImageProps = {
  src: string
  alt: string
  label: string
  eager?: boolean
}

function SectionImage({ src, alt, label, eager = false }: SectionImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={styles.fallback} role="img" aria-label={label}>
        <span>{label}</span>
      </div>
    )
  }

  return (
    <figure className={styles.wrapper}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setHasError(true)}
      />
      <figcaption>{label}</figcaption>
    </figure>
  )
}

export default SectionImage
