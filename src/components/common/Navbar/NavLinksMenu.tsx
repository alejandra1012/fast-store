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
    name: 'Mis pedidos',
    href: '/solo-Hoy',
  },
  {
    name: 'CMR Puntos',
    href: '/top-ventas',
  },
  {
    name: 'Mis reseñas',
    href: '/tiendas-oficiales',
  },
  {
    name: 'Mis cupones',
    href: '/vender-ene-linio',
  },
  {
    name: 'Mis datos personales',
    href: '/preguntas-frecuentes',
  },
  {
    name: 'Mis direcciones',
    href: '/recently-viewed-products',
  },
  {
    name: 'Mis métodos de pago',
    href: '/cm/cmr-banco-falabella',
  },
  {
    name: 'Mis suscripciones',
    href: '/https://www.falabella.com.co/falabella-co',
  },
]

function NavLinksMenu({ onClickLink, classes = '' }: NavLinksProps) {
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

export default mark(NavLinksMenu)
