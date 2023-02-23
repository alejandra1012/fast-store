import {
  List as UIList,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'
import IncentivesFooter from 'src/components/sections/Incentives/IncentivesFooter'
import Icon from 'src/components/ui/Icon'
import { Image } from 'src/components/ui/Image'
import Link from 'src/components/ui/Link'
import SROnly from 'src/components/ui/SROnly'
import { mark } from 'src/sdk/tests/mark'

import styles from './footer.module.scss'
import FooterLinks from './FooterLinks'

type FooterProps = {
  /**
   * Enables Incentives Section
   */
  sectionIncentives?: boolean
  /**
   * Enables Social Section
   */
  sectionSocial?: boolean
  /**
   * Enables Payment Methods Section
   */
  sectionPaymentMethods?: boolean
}

export function Footer({
  sectionIncentives = true,
  sectionSocial = true,
  sectionPaymentMethods = true,
}: FooterProps) {
  return (
    <footer
      data-fs-footer
      data-fs-footer-incentives={sectionIncentives}
      data-fs-footer-social={sectionSocial}
      data-fs-footer-payment-methods={sectionPaymentMethods}
      className={`${styles.fsFooter} layout__content-full`}
    >
      {sectionIncentives && <IncentivesFooter />}

      <div data-fs-footer-nav className="layout__content">
        <FooterLinks />

        {sectionSocial && (
          <section data-fs-footer-social>
            <UIList variant="unordered">
              <p data-fs-footer-title-follow>SÍGUENOS</p>
              <li>
                <Link
                  variant="footer"
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="28px" height="28px" name="Facebook2" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://twitter.com/"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="28px" height="28px" name="Twitter2" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.youtube.com/"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="28px" height="28px" name="Youtube" />
                </Link>
              </li>
            </UIList>
            {sectionPaymentMethods && (
              <UIPaymentMethods data-fs-footer-payment-methods>
                <p data-fs-footer-title />
                <UIList>
                  <li>
                    <Image
                      data-fs-footer-apps
                      src="https://itglobers.vtexassets.com/arquivos/play-store.png"
                      width={125}
                      height={37}
                    />
                    <SROnly text="Play Store" />
                  </li>
                  <li>
                    <Image
                      data-fs-footer-apps
                      src="https://itglobers.vtexassets.com/arquivos/app-store.png"
                      width={125}
                      height={37}
                    />
                    <SROnly text="App Store" />
                  </li>
                  <li>
                    <Image
                      data-fs-footer-apps
                      src="https://itgloberspartnercl.vtexassets.com/arquivos/footer-appgalley.jpg"
                      width={125}
                      height={37}
                    />
                    <SROnly text="App Gallery" />
                  </li>
                </UIList>
              </UIPaymentMethods>
            )}
            <div data-fs-footer-sic>
              <img
                src="https://itgloberspartnercl.vtexassets.com/arquivos/logo-sic-footer.png"
                alt="sic"
                width="60%"
              />
              <SROnly text="sic" />
            </div>
          </section>
        )}
      </div>

      <div data-fs-footer-copyright className="text__legend">
        <p>
          © 2023 Linio Colombia | Todos los derechos reservados. Falabella.com
          S.A.S. NIT 900.499.362-8. Teléfono (571) 4842220. Dirección: Calle 99
          #14-49 Piso 9, Bogotá Colombia. E-mail de notificaciones judiciales:
          notificaciones.judiciales@falabella.com
        </p>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
export default mark(Footer)
