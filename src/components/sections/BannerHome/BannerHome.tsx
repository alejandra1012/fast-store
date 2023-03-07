import { Banner, BannerImage, BannerLink } from '@faststore/ui'

import style from './bannerhome.module.scss'

type BannerHomeProps = {
  url: string
  href: string
  alt: string
  classBanner: string
}

export default function BannerHome({
  url,
  href,
  alt,
  classBanner,
}: BannerHomeProps) {
  return (
    <div className={`${style.fsBannerHome}`}>
      <Banner className={`${classBanner}`}>
        <BannerLink>
          <a href={href}>
            <BannerImage>
              <img src={url} alt={alt} />
            </BannerImage>
          </a>
        </BannerLink>
      </Banner>
    </div>
  )
}
