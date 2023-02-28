import { Suspense, useState } from 'react'
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
import NavbarSubMenu from './NavbarSubMenu'
import NavbarSubMenu2 from './NavbarSubMenu2'
import NavbarSubMenu3 from './NavbarSubMenu3'
import NavLinks from './NavLinks'

function NavbarSlider() {
  const [openSubMenu, setOpenSumenu] = useState(false)
  const [openSubMenu2, setOpenSumenu2] = useState(false)
  const [openSubMenu3, setOpenSumenu3] = useState(false)
  const { closeNavbar } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  const handleClick = () => setOpenSumenu(!openSubMenu)
  const handleClick2 = () => setOpenSumenu2(!openSubMenu2)
  const handleClick3 = () => setOpenSumenu3(!openSubMenu3)

  return (
    <>
      <SlideOver
        data-fs-nabvar-slider-ppal
        isOpen
        fade={fade}
        onDismiss={fadeOut}
        size="partial"
        direction="leftSide"
        className={styles.fsNavbarSlider}
        onTransitionEnd={() => fade === 'out' && closeNavbar()}
      >
        <div data-fs-navbar-slider-header-container>
          <header data-fs-navbar-slider-header>
            <Suspense fallback={<ButtonSignInFallback />}>
              <ButtonSignInMenu />
              <ButtonOrdersMenu />
            </Suspense>
          </header>
          <>
            <Button
              data-fs-navbar-open-sub-menu-button
              aria-label="Open SubMenu"
              icon={<Icon name="UserLinio" width={25} height={25} />}
              label="Mi Cuenta"
              onClick={handleClick}
            />
          </>
          <>
            <Button
              data-fs-navbar-open-sub-menu-button
              aria-label="Open SubMenu1"
              icon={<Icon name="Grid" width={17} height={17} />}
              label="Categorias"
              onClick={handleClick2}
            />
          </>
          <>
            <Button
              data-fs-navbar-open-sub-menu-button-linio
              aria-label="Open SubMenu2"
              icon={<Icon name="" width={17} height={17} />}
              label="Beneficios Linio"
              onClick={handleClick3}
            />
          </>
          <div data-fs-navbar-slider-content>
            <NavLinks onClickLink={fadeOut} />
            {openSubMenu && <NavbarSubMenu />}
            {openSubMenu2 && <NavbarSubMenu2 />}
            {openSubMenu3 && <NavbarSubMenu3 />}
          </div>
          <footer data-fs-navbar-slider-footer>
            <a data-fs-navbar-slider-footer-link href="/some/valid/uri">
              COMPRA DESDE NUESTRA APP Y RECIBE GRANDES BENEFICIOS
              <img
                data-fs-navbar-slider-footer-img
                src="https://itglobers.vtexassets.com/arquivos/descarga-app.jpg"
                alt="sic"
                width={50}
                height={33}
              />
            </a>
          </footer>
        </div>
        <div data-fs-navbar-slider-button-close>
          <Button
            data-fs-navbar-slider-button
            aria-label="Close Menu"
            icon={<Icon name="X" width={32} height={32} />}
            onClick={fadeOut}
          />
        </div>
      </SlideOver>
    </>
  )
}

export default mark(NavbarSlider)
