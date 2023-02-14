import { List as UIList } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'
import type { AnchorHTMLAttributes } from 'react'
// import RegionalizationButton from 'src/components/regionalization/RegionalizationButton'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'

import styles from './navlinks.module.scss'

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  classes?: string
}
type CollectionType = {
  icon?: string
  name: string
  href: string
}
const collections = [
  {
    icon: 'Truck2',
    name: 'Mis pedidos',
    href: '/solo-Hoy',
  },
  {
    icon: 'Cmr-puntos',
    name: 'CMR Puntos',
    href: '/top-ventas',
  },
  {
    icon: 'Pen',
    name: 'Mis reseñas',
    href: '/tiendas-oficiales',
  },
  {
    icon: 'Tag',
    name: 'Mis cupones',
    href: '/vender-ene-linio',
  },
  {
    icon: 'UserLinio',
    name: 'Mis datos personales',
    href: '/preguntas-frecuentes',
  },
  {
    icon: 'Storefront',
    name: 'Mis direcciones',
    href: '/recently-viewed-products',
  },
  {
    icon: 'Cash',
    name: 'Mis métodos de pago',
    href: '/cm/cmr-banco-falabella',
  },
  {
    icon: 'Alert',
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
          {collections.map(({ href, name, icon }: CollectionType) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link-menu
                variant="display"
                icon={icon && <Icon name={icon} width={20} height={20} />}
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
