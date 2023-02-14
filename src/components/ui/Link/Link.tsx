import { forwardRef, useMemo } from 'react'
import type { Ref, ElementType, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import type { GatsbyLinkProps } from 'gatsby'
import { Link as UILink, Icon as UIIcon } from '@faststore/ui'
import type { LinkProps as UILinkProps } from '@faststore/ui'

import styles from './link.module.scss'

type Variant = 'default' | 'display' | 'footer' | 'inline'
type FrameworkLinkProps = Omit<GatsbyLinkProps<Record<string, unknown>>, 'to'>

export type LinkProps<T extends ElementType = 'a'> = UILinkProps<T> &
  FrameworkLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    /**
     * Specifies the component variant.
     */
    variant?: Variant
    /**
     * Defines use of inverted color.
     */
    inverse?: boolean
    icon?: ReactNode
  }

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link<
  T extends ElementType = 'a'
>(
  {
    href,
    inverse,
    icon,
    children,
    variant = 'default',
    ...otherProps
  }: LinkProps<T>,
  ref: Ref<HTMLAnchorElement> | undefined
) {
  const isInternalLink = useMemo(
    () => href[0] === '/' && href[1] !== '/',
    [href]
  )

  if (isInternalLink) {
    return (
      <UILink
        as={GatsbyLink}
        to={href}
        data-fs-link
        data-fs-link-variant={variant}
        data-fs-link-inverse={inverse}
        className={styles.fsLink}
        {...otherProps}
      >
        {icon !== undefined && (
          <>
            <UIIcon component={icon} />
          </>
        )}
        {children}
      </UILink>
    )
  }

  return (
    <UILink
      ref={ref}
      href={href}
      data-fs-link
      data-fs-link-variant={variant}
      data-fs-link-inverse={inverse}
      className={styles.fsLink}
      {...otherProps}
    >
      {icon !== undefined && (
        <>
          <UIIcon component={icon} />
        </>
      )}
      {children}
    </UILink>
  )
})

export default Link
