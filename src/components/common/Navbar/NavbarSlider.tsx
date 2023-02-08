import { Suspense } from 'react'
import Button, { ButtonSignInFallback } from 'src/components/ui/Button'
import { ButtonOrdersMenu } from 'src/components/ui/Button/ButtonLink/ButtonSignIn'
import ButtonSignInMenu from 'src/components/ui/Button/ButtonLink/ButtonSignIn/ButtonSigninMenu'
import Icon from 'src/components/ui/Icon'
// import Link from 'src/components/ui/Link'
// import Logo from 'src/components/ui/Logo'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import { useUI } from 'src/sdk/ui/Provider'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

import styles from './navbar-slider.module.scss'
import NavLinks from './NavLinks'

function NavbarSlider() {
  const { closeNavbar } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  return (
    <SlideOver
      isOpen
      fade={fade}
      onDismiss={fadeOut}
      size="partial"
      direction="leftSide"
      className={styles.fsNavbarSlider}
      onTransitionEnd={() => fade === 'out' && closeNavbar()}
    >
      <header data-fs-navbar-slider-header>
        <Suspense fallback={<ButtonSignInFallback />}>
          <ButtonSignInMenu />
          <ButtonOrdersMenu />
        </Suspense>

        <Button
          data-fs-navbar-slider-button
          aria-label="Close Menu"
          icon={<Icon name="X" width={32} height={32} />}
          onClick={fadeOut}
        />
      </header>
      <div data-fs-navbar-slider-content>
        <NavLinks onClickLink={fadeOut} />
      </div>
      <footer data-fs-navbar-slider-footer />
    </SlideOver>
  )
}

export default mark(NavbarSlider)
