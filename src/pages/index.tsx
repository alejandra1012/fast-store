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
import SliderHome from 'src/components/sections/SliderHome'
import SliderReact from 'src/components/sections/SliderHome/SliderReact'
import ProductShelf from 'src/components/sections/ProductShelf'

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
    <div className="home">
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
      <RenderPageSections sections={cmsHome?.sections} />
      <LinkTextHome />
      <BannerHome
        url={[
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-medio-cmr_home-linio.png',
            phone:
              'https://itglobers.vteximg.com.br/arquivos/banner-cmr_home-linio-mobile.png',
            tablet:
              'https://itglobers.vteximg.com.br/arquivos/banner-cmr_home-linio-tablet.png',
          },
        ]}
        href="/"
        alt="Banner ppal del home"
        classBanner="banner-cmr"
      />
      <div className="hidden-mobile">
        <SliderHome
          url={[
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-1.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-2.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-3.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-4.png',
          ]}
          alt="slider principal del home"
          classSlider="slider-ppal"
        />
      </div>
      <div className="display-phonemid">
        <SliderHome
          url={[
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-mobile-1.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-mobile-2.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-mobile-3.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-mobile-4.png',
          ]}
          alt="slider principal del home"
          classSlider="slider-ppal"
        />
      </div>
      <div className="display-tablet hidden-phonemid">
        <SliderHome
          url={[
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-tablet-1.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-tablet-2.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-tablet-3.png',
            'https://itglobers.vtexassets.com/arquivos/slider-dtos_home-linio-tablet-4.png',
          ]}
          alt="slider principal del home"
          classSlider="slider-ppal"
        />
      </div>
      <BannerHome
        url={[
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-1.jpg',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-2.jpg',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-3.jpg',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-4.jpg',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-5.jpg',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-categorias_home-linio-6.jpg',
          },
        ]}
        href="/"
        alt="Banner de categorias"
        classBanner="banner-categorias-home"
      />
      <ProductShelf title="RECOMENDADOS PARA TI" term="camisa" />
      <BannerHome
        text="TECNOLOGÍA PORTABLE"
        url={[
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-tegnologia-portable_linio-1.png',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-tegnologia-portable_linio-2.png',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-tegnologia-portable_linio-3.png',
          },
        ]}
        href="/"
        alt="Banner Tegnologia Portable"
        classBanner="banner-tegnologia-portable"
      />
      <BannerHome
        url={[
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-medio-cmr_home-linio.png',
            phone:
              'https://itglobers.vteximg.com.br/arquivos/banner-cmr_home-linio-mobile.png',
            tablet:
              'https://itglobers.vteximg.com.br/arquivos/banner-cmr_home-linio-tablet.png',
          },
        ]}
        href="/"
        alt="Banner medio cmr"
        classBanner="banner-medio-cmr"
      />
      <ProductShelf title="FAVORITOS EN TECNOLOGÍA" term="celular" />
      <BannerHome
        url={[
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-dtos_home-linio-1.png',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-dtos_home-linio-2.png',
          },
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-dtos_home-linio-3.png',
          },
        ]}
        href="/"
        alt="Banner Descuentos"
        classBanner="banner-descuentos-home"
      />
      <ProductShelf title="OFERTAS PARA TU HOGAR" term="hogar" />
      <SliderReact
        text="TIENDAS OFICIALES"
        href="/Ver más"
        text2="Ver más"
        url={[
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-1.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-2.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-3.png',
          'https://itglobers.vteximg.com.br/arquivos/slider2-dtos_home-linio-4.png',
          'https://itglobers.vteximg.com.br/arquivos/slider2-dtos_home-linio-5.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-6.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-7.png',
          'https://itglobers.vteximg.com.br/arquivos/slider2-dtos_home-linio-8.png',
          'https://itglobers.vteximg.com.br/arquivos/slider2-dtos_home-linio-9.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-10.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-11.png',
          'https://itglobers.vtexassets.com/arquivos/slider2-dtos_home-linio-12.png',
        ]}
        alt="slider dtos del home"
        classSlick="slick-dtos"
      />
      <ProductShelf title="RECOMENDADOS EN AUDIO Y CÓMPUTO" term="computador" />
      <div className="hidden-mobile">
        <BannerHome
          text="MODA Y BELLEZA PARA TUS DÍAS"
          url={[
            {
              desktop:
                'https://itglobers.vtexassets.com/arquivos/banner-moda_belleza-home-1.png',
            },
            {
              desktop:
                'https://itglobers.vtexassets.com/arquivos/banner-moda_belleza-home-2.png',
            },
            {
              desktop:
                'https://itglobers.vtexassets.com/arquivos/banner-moda_belleza-home-3.png',
            },
          ]}
          href="/"
          alt="Banner Moda y Belleza"
          classBanner="banner-moda-belleza-home"
        />
      </div>
      <div className="display-mobile">
        <BannerHome
          text="MODA Y BELLEZA PARA TUS DÍAS"
          url={[
            {
              desktop:
                'https://itglobers.vteximg.com.br/arquivos/banner-moda_belleza-home-mobile.png',
            },
          ]}
          href="/"
          alt="Banner Moda y Belleza"
          classBanner="banner-moda-belleza-home"
        />
      </div>
      <ProductShelf
        title="EQUIPOS DEPORTIVOS Y DE OUTDOOR Ver más"
        term="deportes"
      />
      <ProductShelf title="LO MÁS DESTACADO DE LA SEMANA Ver más" term="ropa" />
      <BannerHome
        text="BANCO FALABELLA"
        url={[
          {
            desktop:
              'https://itglobers.vtexassets.com/arquivos/banner-banco-falabella_home-final.jpg',
            phone:
              'https://itglobers.vtexassets.com/arquivos/banner-banco-falabella_home-final-mobile.png',
          },
        ]}
        href="/"
        alt="Banner final Banco Falabella"
        classBanner="banner-banco-falabella-home"
      />
    </div>
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
