import { useRef, useState, useCallback } from 'react'

export default function ImageCarousel({ images, title }) {
  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i) => {
    const container = containerRef.current
    if (!container) return
    container.scrollTo({ left: i * container.offsetWidth, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    setIndex(Math.round(container.scrollLeft / container.offsetWidth))
  }, [])

  const atStart = index === 0
  const atEnd = index === images.length - 1

  return (
    <div className="flex items-center gap-2 sm:gap-4 py-8">
      {images.length > 1 && (
        <button
          onClick={() => scrollTo(index - 1)}
          disabled={atStart}
          aria-label="Previous picture"
          className={`shrink-0 text-xl font-bold transition-opacity ${atStart ? 'opacity-20' : 'opacity-100'}`}
        >
          <svg className="block aspect-7/12 h-8 sm:h-10 md:h-12 stroke-5" viewBox="3 0 14 24" fill="none" stroke="currentColor">
            <polyline points="15 21 7 12 15 3" />
          </svg>
        </button>
      )}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} screenshot ${i + 1}`}
            className="w-full shrink-0 snap-start object-contain max-h-110 sm:max-h-150"
          />
        ))}
      </div>

      {images.length > 1 && (
        <button
          onClick={() => scrollTo(index + 1)}
          disabled={atEnd}
          aria-label="Next image"
          className={`shrink-0 transition-opacity ${atEnd ? 'opacity-20' : 'opacity-100'}`}
        >
          <svg className="block aspect-7/12 h-8 sm:h-10 md:h-12 stroke-5" viewBox="7 0 14 24" fill="none" stroke="currentColor">
            <polyline points="9 21 17 12 9 3" />
          </svg>
        </button>
      )}
    </div>
  )
}
