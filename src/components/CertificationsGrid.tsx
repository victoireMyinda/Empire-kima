import { useMemo, useState } from 'react'
import type { CertificationAsset } from '../data/assetResources'
import styles from './CertificationsGrid.module.css'

type CertificationLabels = {
  empty: string
  noResults: string
  searchPlaceholder: string
  searchAria: string
  view: string
  download: string
  pdf: string
}

type CertificationsGridProps = {
  items: CertificationAsset[]
  labels: CertificationLabels
}

function CertificationsGrid({ items, labels }: CertificationsGridProps) {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return items

    return items.filter((item) => {
      const haystack = `${item.label} ${item.fileName}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [items, query])

  if (!items.length) {
    return <div className={styles.emptyState}>{labels.empty}</div>
  }

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.searchPlaceholder}
          aria-label={labels.searchAria}
        />
      </div>

      {filteredItems.length ? (
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.pdfBadge}>{labels.pdf}</span>
                <h3 title={item.label}>{item.label}</h3>
              </div>

              <p className={styles.fileName}>{item.fileName}</p>

              <div className={styles.actions}>
                <a href={item.src} target="_blank" rel="noreferrer">
                  {labels.view}
                </a>
                <a href={item.src} download={item.fileName}>
                  {labels.download}
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>{labels.noResults}</div>
      )}
    </>
  )
}

export default CertificationsGrid
