import { List as UIList } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'
import type { AnchorHTMLAttributes } from 'react'
// import RegionalizationButton from 'src/components/regionalization/RegionalizationButton'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'

import collectionsLinks from './collectionsLinks.json'
import styles from './linkstext.module.scss'

interface LinkTextProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  classes?: string
}
type CollectionLinks = {
  icon?: string
  name: string
  href: string
}

function LinkTextHome({ onClickLink, classes = '' }: LinkTextProps) {
  return (
    <nav className={`${styles.fslinkstext} ${classes}`}>
      <div className="layout__content">
        {/* <RegionalizationButton /> */}
        <UIList data-fs-navlinks-list-linio>
          {collectionsLinks.map(({ href, name, icon }: CollectionLinks) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link-menu
                variant="display"
                icon={icon && <Icon name={icon} width={27} height={27} />}
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

export default mark(LinkTextHome)
