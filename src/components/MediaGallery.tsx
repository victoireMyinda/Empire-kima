import { useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEventHandler, TouchEventHandler, WheelEventHandler } from 'react'
import type { MediaAsset } from '../data/assetResources'
import styles from './MediaGallery.module.css'

type MediaGalleryLabels = {
  open: string
  empty: string
  close: string
  next: string
  previous: string
  zoomIn: string
  zoomOut: string
  thumbnails: string
}

type MediaGalleryProps = {
  items: MediaAsset[]
  labels: MediaGalleryLabels
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function MediaGallery({ items, labels }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ x: 0, y: 0 })
  const touchRef = useRef({ x: 0, y: 0 })

  const activeItem = useMemo(
    () => (activeIndex === null ? null : items[activeIndex]),
    [activeIndex, items],
  )

  const closeLightbox = () => {
    setActiveIndex(null)
    setZoom(1)
    setTranslate({ x: 0, y: 0 })
    setIsDragging(false)
  }

  const goTo = (index: number) => {
    if (!items.length) return
    const normalized = (index + items.length) % items.length
    setActiveIndex(normalized)
    setZoom(1)
    setTranslate({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') goTo(activeIndex + 1)
      if (event.key === 'ArrowLeft') goTo(activeIndex - 1)
      if (event.key === '+' || event.key === '=') setZoom((prev) => clamp(prev + 0.25, 1, 4))
      if (event.key === '-') setZoom((prev) => clamp(prev - 0.25, 1, 4))
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex])

  const handleWheelZoom: WheelEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    setZoom((prev) => {
      const next = clamp(prev - event.deltaY * 0.002, 1, 4)
      if (next <= 1) setTranslate({ x: 0, y: 0 })
      return Number(next.toFixed(2))
    })
  }

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    if (zoom <= 1) return
    setIsDragging(true)
    dragRef.current = { x: event.clientX - translate.x, y: event.clientY - translate.y }
  }

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging || zoom <= 1) return
    setTranslate({ x: event.clientX - dragRef.current.x, y: event.clientY - dragRef.current.y })
  }

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    const touch = event.touches[0]
    touchRef.current = { x: touch.clientX, y: touch.clientY }
    if (zoom > 1) {
      setIsDragging(true)
      dragRef.current = { x: touch.clientX - translate.x, y: touch.clientY - translate.y }
    }
  }

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging || zoom <= 1) return
    const touch = event.touches[0]
    setTranslate({ x: touch.clientX - dragRef.current.x, y: touch.clientY - dragRef.current.y })
  }

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    if (zoom > 1) {
      setIsDragging(false)
      return
    }
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchRef.current.x
    if (Math.abs(deltaX) > 50 && activeIndex !== null) {
      goTo(deltaX < 0 ? activeIndex + 1 : activeIndex - 1)
    }
  }

  if (!items.length) {
    return <div className={styles.emptyState}>{labels.empty}</div>
  }

  return (
    <>
      <div className={styles.galleryGrid}>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.card}
            onClick={() => setActiveIndex(index)}
            aria-label={`${labels.open}: ${item.name}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {activeItem && activeIndex !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={activeItem.name}>
          <button type="button" className={styles.closeButton} onClick={closeLightbox}>
            {labels.close}
          </button>

          <div className={styles.controls}>
            <button type="button" onClick={() => goTo(activeIndex - 1)}>
              {labels.previous}
            </button>
            <button
              type="button"
              onClick={() => setZoom((prev) => clamp(prev - 0.25, 1, 4))}
            >
              {labels.zoomOut}
            </button>
            <button
              type="button"
              onClick={() => setZoom((prev) => clamp(prev + 0.25, 1, 4))}
            >
              {labels.zoomIn}
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)}>
              {labels.next}
            </button>
          </div>

          <div
            className={styles.stage}
            onWheel={handleWheelZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              }}
            />
          </div>

          <div className={styles.thumbnailRail} aria-label={labels.thumbnails}>
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.thumbnailButton} ${index === activeIndex ? styles.thumbnailActive : ''}`}
                onClick={() => goTo(index)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default MediaGallery
