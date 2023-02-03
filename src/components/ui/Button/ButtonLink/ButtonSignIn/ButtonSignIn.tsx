import { ButtonLink } from 'src/components/ui/Button'
import styles from 'src/components/ui/Button/button.module.scss'
import Icon from 'src/components/ui/Icon'
import { useSession } from 'src/sdk/session'

const ButtonSignIn = () => {
  const { person } = useSession()

  return (
    <ButtonLink
      data-fs-button-signin-link
      href={person?.id ? '/account' : '/login'}
      className={`${styles.fsButton} text__title-mini`}
      variant="tertiary"
    >
      <Icon name="UserLinio" width={35} height={35} />
      <span>{person?.id ? 'My Account' : 'Iniciar Sesión'}</span>
    </ButtonLink>
  )
}

export default ButtonSignIn
