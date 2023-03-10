import { Banner, BannerImage, BannerContent, BannerLink } from '@faststore/ui'

import style from './bannerhome.module.scss'

type BannerHomeProps = {
  url: string[]
  href: string
  alt: string
  classBanner: string
  text?: string
}

export default function BannerHome({
  url,
  href,
  alt,
  classBanner,
  text,
}: BannerHomeProps) {
  return (
    <div className={style.fsBannerHome} data-fs-banner-home={classBanner}>
      <Banner>
        <BannerContent>{text}</BannerContent>
        <BannerLink>
          <a href={href}>
            <BannerImage data-fs-banner-home={classBanner}>
              {url.map((u, index) => (
                <img src={u} key={index} alt={alt} />
              ))}
            </BannerImage>
          </a>
        </BannerLink>
      </Banner>
    </div>
  )
}
