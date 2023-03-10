/* eslint-disable no-console */
import 'src/styles/pages/homepage.scss'

import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import RenderPageSections from 'src/components/cms/RenderPageSections'
import { getCMSPageDataByContentType } from 'src/cms/client'
import type { ContentData } from '@vtex/client-cms'
import LinkTextHome from 'src/components/sections/LinkTextHome/LinkTextHome'
import BannerHome from 'src/components/sections/BannerHome'
import { useSession } from 'src/sdk/session'
import Newsletter from 'src/components/sections/Newsletter'
import SliderHome from 'src/components/sections/sliderHome'

export type Props = PageProps<
  HomePageQueryQuery,
  unknown,
  unknown,
  { cmsHome: ContentData }
>

function Page(props: Props) {
  const {
    data: { site },
    serverData: { cmsHome },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `${site?.siteMetadata?.siteUrl}`

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      {console.log('index', cmsHome)}
      <RenderPageSections sections={cmsHome?.sections} />
      <LinkTextHome />
      <BannerHome
        url={[
          'https://itglobers.vtexassets.com/arquivos/banner-cmr_home-linio.jpg',
        ]}
        href="/"
        alt="Banner ppal del home"
        classBanner="banner-cmr"
      />
      <SliderHome
        url={[
          'https://itglobers.vtexassets.com/arquivos/slaider-dtos_home-linio-1.jpg',
          'https://itglobers.vtexassets.com/arquivos/slaider-dtos_home-linio-2.jpg',
          'https://itglobers.vtexassets.com/arquivos/slaider-dtos_home-linio-3.jpg',
          'https://itglobers.vtexassets.com/arquivos/slaider-dtos_home-linio-4.jpg',
        ]}
        alt="slider principal del home"
        classSlider="slider-ppal"
      />
      <BannerHome
        url={[
          'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-1.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-2.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-3.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-4.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-5.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-6.jpg',
        ]}
        href="/"
        alt="Banner de categorias"
        classBanner="banner-categorias-home"
      />
      <BannerHome
        text="OFERTAS CYBERDAYS"
        url={[
          'https://itglobers.vtexassets.com/arquivos/banner-ofertas-cyberdays-linio-1.png',
          'https://itglobers.vtexassets.com/arquivos/banner-ofertas-cyberdays-linio-2.png',
          'https://itglobers.vtexassets.com/arquivos/banner-ofertas-cyberdays-linio-3.png',
          'https://itglobers.vtexassets.com/arquivos/banner-ofertas-cyberdays-linio-4.png',
          'https://itglobers.vtexassets.com/arquivos/banner-ofertas-cyberdays-linio-5.png',
          'https://itglobers.vtexassets.com/arquivos/banner-ofertas-cyberdays-linio-6.png',
        ]}
        href="/"
        alt="Banner Ofertas cyberdays"
        classBanner="banner-ofertas-cyberdays"
      />
      <BannerHome
        url={[
          'https://itglobers.vtexassets.com/arquivos/banner2-ofertas-cyberdays-linio-1.png',
          'https://itglobers.vtexassets.com/arquivos/banner2-ofertas-cyberdays-linio-2.png',
          'https://itglobers.vtexassets.com/arquivos/banner2-ofertas-cyberdays-linio-3.png',
        ]}
        href="/"
        alt="Banner 2 Ofertas cyberdays"
        classBanner="Banner 2 Ofertas cyberdays"
      />
      <BannerHome
        url={[
          'https://itglobers.vtexassets.com/arquivos/banner-dtos_home-linio-1.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-dtos_home-linio-2.jpg',
          'https://itglobers.vtexassets.com/arquivos/banner-dtos_home-linio-3.jpg',
        ]}
        href="/"
        alt="Banner Descuentos"
        classBanner="banner-descuentos-home"
      />
      {/* <SliderHome
        url={[
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-1.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-2.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-3.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-4.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-5.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-6.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-7.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-8.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-9.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-10.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-11.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-12.png',
        ]}
        alt="slider principal del home"
        classSlider="slider-ppal"
      /> */}
      <Newsletter
        title="Get News and Special Offers!"
        description="Receive our news and promotions in advance. Enjoy and get 10% off your first purchase. For more information click here."
      />
    </>
  )
}

export const querySSG = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
        siteUrl
      }
    }
  }
`

export async function getServerData() {
  const ONE_YEAR_CACHE = `s-maxage=31536000, stale-while-revalidate`

  const cmsHome = await getCMSPageDataByContentType('home')

  return {
    status: 200,
    props: { cmsHome },
    headers: {
      'cache-control': ONE_YEAR_CACHE,
      'content-type': 'text/html',
    },
  }
}

Page.displayName = 'Page'
export default mark(Page)
