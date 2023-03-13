import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from './slick.module.scss'

type SliderReactProps = {
  text: string
  text2?: string
  href?: string
  url: string[]
  alt: string
  classSlick?: string
}

const SliderReact = ({ url, text, alt, href, text2 }: SliderReactProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className={style.fsSliderReact}>
      <h2>
        {text}
        <a href={href}>
          <h2>{text2}</h2>
        </a>
      </h2>

      <Slider {...settings}>
        {url.map((img, index) => (
          <div key={index}>
            <img src={img} alt={alt} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderReact
