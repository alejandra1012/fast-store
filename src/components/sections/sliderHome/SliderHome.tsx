import { Carousel } from '@faststore/ui'
import type { ReactNode } from 'react'

import style from './sliderhome.module.scss'

type SliderHomeProps = {
  url: string[]
  alt: string
  classSlider: string
  className?: string
  /**
   * Whether or not the Carousel is infinite slide/scroll. Only for the `slide` variant.
   * @default true
   */
  infiniteMode?: boolean
  /**
   * Specifies which navigation elements should be visible.
   * @default complete
   */
  controls?: 'complete' | 'navigationArrows' | 'paginationBullets'
  /**
   * Specifies the slide transition. Only for the `slide` variant
   */
  transition?: {
    duration: number
    property: string
    delay?: number
    timing?: string
  }
  /**
   * Specifies the number of items per page.
   * @default 1
   */
  itemsPerPage?: number
  /**
   * Specifies the Carousel track variant.
   * @default slide
   */
  variant?: 'slide' | 'scroll'
  /**
   * Specifies the navigation icons.
   */
  navigationIcons?: {
    left?: ReactNode
    right?: ReactNode
  }
}

function Sliderhome({
  url,
  alt,
  classSlider,
  controls,
  transition,
}: SliderHomeProps) {
  return (
    <div className={`${style.fsSliderHome}`}>
      <Carousel transition={transition} controls={controls}>
        {url.map((imageUrl, index) => (
          <img
            key={index}
            className={classSlider}
            src={imageUrl}
            alt={alt}
            width="100%"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Sliderhome
