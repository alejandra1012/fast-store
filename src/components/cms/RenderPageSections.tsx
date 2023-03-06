import type { ComponentType } from 'react'
import BannerText from 'src/components/sections/BannerText'
import Hero from 'src/components/sections/Hero'
import IncentivesHeader from 'src/components/sections/Incentives/IncentivesHeader'
import ProductShelf from 'src/components/sections/ProductShelf'
import ProductTiles from 'src/components/sections/ProductTiles'
// import Shelf from 'src/components/sections/Shelf'
// import RichText from 'src/components/sections/RichText'

/**
 * Sections: Components imported from '../components/sections' only.
 * Do not import or render components from any other folder in here.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const COMPONENTS: Record<string, ComponentType<any>> = {
  Hero,
  BannerText,
  IncentivesHeader,
  ProductShelf,
  ProductTiles,
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections?: Array<{ name: string; data: any }>
}
const returningconsole = (sections: unknown) => {
  // eslint-disable-next-line no-console
  console.log('sections', sections, COMPONENTS)
}

function RenderPageSections({ sections }: Props) {
  return (
    <>
      {returningconsole(sections)}
      {sections?.map(({ name, data }, index) => {
        const Component = COMPONENTS[name]

        if (!Component) {
          throw new Error(
            `Could not find component for block ${name}. Add a new component for this block or remove it from the CMS`
          )
        }

        return <Component key={`cms-section-${index}`} {...data} />
      })}
    </>
  )
}

export default RenderPageSections
