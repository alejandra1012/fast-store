import { Banner, BannerImage, BannerContent, BannerLink } from '@faststore/ui'

import style from './bannerhome.module.scss'

type BannerHomeProps = {
  url: UrlProps[]
  href: string
  alt: string
  classBanner: string
  text?: string
}
type UrlProps = {
  phone?: string
  tablet?: string
  desktop?: string
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
        <BannerContent data-fs-banner-home={classBanner}>{text}</BannerContent>
        <BannerLink>
          <a href={href}>
            <BannerImage data-fs-banner-home={classBanner}>
              {url.map(({ phone, tablet, desktop }, index) => (
                <picture key={index}>
                  <source media="(max-width: 450px)" srcSet={phone} />
                  <source media="(max-width: 768px)" srcSet={tablet} />
                  <img src={desktop} alt={alt} />
                </picture>
              ))}
            </BannerImage>
          </a>
        </BannerLink>
      </Banner>
    </div>
  )
}
