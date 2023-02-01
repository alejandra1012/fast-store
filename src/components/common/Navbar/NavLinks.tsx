import { List as UIList } from '@faststore/ui'
import type { AnchorHTMLAttributes } from 'react'
// import RegionalizationButton from 'src/components/regionalization/RegionalizationButton'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'

import styles from './navlinks.module.scss'

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  classes?: string
}

const collections = [
  {
    name: 'Solo Hoy',
    href: '/solo-Hoy',
  },
  {
    name: 'Solo para Ti',
    href: '/top-ventas',
  },
  {
    name: 'Tiendas Oficiales',
    href: '/tiendas-oficiales',
  },
  {
    name: 'Vende en Linio',
    href: '/vender-ene-linio',
  },
  {
    name: 'Ayuda',
    href: '/preguntas-frecuentes',
  },
  {
    name: 'Historial',
    href: '/recently-viewed-products',
  },
  {
    name: 'Banco Falabella',
    href: '/cm/cmr-banco-falabella',
  },
  {
    name: 'Falabella',
    href: '/https://www.falabella.com.co/falabella-co',
  },
  {
    name: 'Ventas Telefónicas',
    href: '/ventass-telefonicas',
  },
]

function NavLinks({ onClickLink, classes = '' }: NavLinksProps) {
  return (
    <nav className={`${styles.fsNavlinks} ${classes}`}>
      <div className="layout__content">
        {/* <RegionalizationButton /> */}
        <UIList data-fs-navlinks-list>
          {collections.map(({ href, name }) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link
                variant="display"
                href={href}
                onClick={onClickLink}
              >
                {name}
              </Link>
            </li>
          ))}
        </UIList>
      </div>
    </nav>
  )
}

export default mark(NavLinks)
