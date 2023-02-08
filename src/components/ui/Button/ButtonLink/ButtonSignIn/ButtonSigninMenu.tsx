import { ButtonLink } from 'src/components/ui/Button'
import styles from 'src/components/ui/Button/button.module.scss'
// import Icon from 'src/components/ui/Icon'
import { useSession } from 'src/sdk/session'

const ButtonSignInMenu = () => {
  const { person } = useSession()

  return (
    <ButtonLink
      data-fs-button-signin-menu-link
      href={person?.id ? '/account' : '/login'}
      className={`${styles.fsButton} text__title-mini`}
      variant="tertiary"
    >
      {/* <Icon name="UserLinio" width={35} height={35} /> */}
      <span data-fs-signing-menu-label>
        {person?.id ? 'My Account' : 'Iniciar Sesión'}
      </span>
    </ButtonLink>
  )
}

export default ButtonSignInMenu
