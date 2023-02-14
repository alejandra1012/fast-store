// import { Suspense } from 'react'
import Button from 'src/components/ui/Button'
// import { ButtonOrdersMenu } from 'src/components/ui/Button/ButtonLink/ButtonSignIn'
// import ButtonSignInMenu from 'src/components/ui/Button/ButtonLink/ButtonSignIn/ButtonSigninMenu'
import Icon from 'src/components/ui/Icon'
// import Link from 'src/components/ui/Link'
// import Logo from 'src/components/ui/Logo'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import { useUI } from 'src/sdk/ui/Provider'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

import styles from './navbar-slider.module.scss'
import NavLinksMenu2 from './NavLinksMenu2'

function NavbarSubMenu2() {
  const { closeNavbar } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  return (
    <>
      <SlideOver
        isOpen
        fade={fade}
        onDismiss={fadeOut}
        size="partial"
        direction="leftSide"
        className={styles.fsNavbarSlider}
        onTransitionEnd={() => fade === 'out' && closeNavbar()}
      >
        <header data-fs-navbar-slider-header-submenu3>
          <Button
            data-fs-navbar-sub-menu3-button
            aria-label="back"
            icon={<Icon name="ArrowLeft" width={17} height={17} />}
            label="Categorias"
            onClick={fadeOut}
          />
        </header>
        <div data-fs-navbar-slider-content-submenu2>
          <NavLinksMenu2 onClickLink={fadeOut} />
        </div>
        <footer data-fs-navbar-slider-footer />
      </SlideOver>
    </>
  )
}

export default mark(NavbarSubMenu2)
