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
    icon: 'Tag',
    name: 'Solo Hoy',
    href: '/solo-Hoy',
  },
  {
    icon: 'Storefront',
    name: 'Tiendas oficiales',
    href: '/top-ventas',
  },
  {
    icon: 'Phone',
    name: 'Celulares y \n Accesorios',
    href: '/tiendas-oficiales',
  },
  {
    icon: 'Tv',
    name: 'Tv, Audio y Video',
    href: '/vender-ene-linio',
  },
  {
    icon: 'Desktop',
    name: 'Computación',
    href: '/preguntas-frecuentes',
  },
  {
    icon: 'Games',
    name: 'Consola y Videojuegos',
    href: '/recently-viewed-products',
  },
  {
    icon: 'Electrodomesticos',
    name: 'Electrodomésticos',
    href: '/cm/cmr-banco-falabella',
  },
  {
    icon: 'Alert',
    name: 'Hogar',
    href: '/https://www.falabella.com.co/falabella-co',
  },
  {
    icon: 'Tag',
    name: 'Ferretería y Automotriz',
    href: '/solo-Hoy',
  },
  {
    icon: 'Storefront',
    name: 'Moda y Accesorios',
    href: '/top-ventas',
  },
  {
    icon: 'Supermercado y Mascotas',
    name: 'Supermercado y Mascotas',
    href: '/tiendas-oficiales',
  },
  {
    icon: 'Deportes',
    name: 'Deportes',
    href: '/vender-ene-linio',
  },
  {
    icon: 'Desktop',
    name: 'Belleza',
    href: '/preguntas-frecuentes',
  },
  {
    icon: 'Games',
    name: 'Salud y Bienestar',
    href: '/recently-viewed-products',
  },
  {
    icon: 'Electrodomesticos',
    name: 'Jueguetes, Niños y Bebes',
    href: '/cm/cmr-banco-falabella',
  },
  {
    icon: 'Alert',
    name: 'Camaras y Lentes',
    href: '/https://www.falabella.com.co/falabella-co',
  },
  {
    icon: 'Electrodomesticos',
    name: 'Productos Internacionales',
    href: '/cm/cmr-banco-falabella',
  },
  {
    icon: 'Alert',
    name: 'Más',
    href: '/https://www.falabella.com.co/falabella-co',
  },
  {
    icon: 'Alert',
    name: 'Grupo Falabella',
    href: '/https://www.falabella.com.co/falabella-co',
  },
]

function NavLinksMenu2({ onClickLink, classes = '' }: NavLinksProps) {
  return (
    <nav className={`${styles.fsNavlinks} ${classes}`} data-fs-navbarlinks-cont>
      <div className="layout__content" data-fs-navbarlinks-container>
        {/* <RegionalizationButton /> */}
        <UIList data-fs-navlinks-list-linio>
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

export default mark(NavLinksMenu2)
