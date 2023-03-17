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

const SliderReact = ({
  url,
  text,
  alt,
  href,
  text2,
  classSlick,
}: SliderReactProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   },
      // },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // centerMode: true,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={style.fsSliderReact} data-fs-slick-home={classSlick}>
      <h2 data-fs-slick-home={classSlick}>
        {text}
        <a href={href} data-fs-slick-home={classSlick}>
          <h2>{text2}</h2>
        </a>
      </h2>

      <Slider {...settings}>
        {url.map((img, index) => (
          <div data-fs-slick-home={classSlick} key={index}>
            <img data-fs-slick-home={classSlick} src={img} alt={alt} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderReact
