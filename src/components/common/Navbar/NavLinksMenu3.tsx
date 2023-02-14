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
    icon: 'Phone',
    name: 'Descarga la app',
    href: '/solo-Hoy',
  },
  {
    icon: 'Cmr-puntos',
    name: 'Descuentos Banco Falabella',
    href: '/top-ventas',
  },
  {
    icon: 'Storefront',
    name: 'Retiro en Tienda',
    href: '/tiendas-oficiales',
  },
  {
    icon: 'Plane',
    name: 'Productos Internacionales',
    href: '/vender-ene-linio',
  },
  {
    icon: 'Star',
    name: 'Mejor Calificados',
    href: '/preguntas-frecuentes',
  },
]

function NavLinksMenu3({ onClickLink, classes = '' }: NavLinksProps) {
  return (
    <nav className={`${styles.fsNavlinks} ${classes}`}>
      <div className="layout__content" data-fs-navbarlinks-container>
        {/* <RegionalizationButton /> */}
        <UIList data-fs-navlinks-list>
          {collections.map(({ href, name, icon }: CollectionType) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link-menu2
                variant="display"
                icon={icon && <Icon name={icon} width={48} height={48} />}
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

export default mark(NavLinksMenu3)
