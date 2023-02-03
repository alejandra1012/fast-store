import Icon from 'src/components/ui/Icon'
import ButtonLink from 'src/components/ui/Button/ButtonLink'

function ButtonSignInFallback() {
  return (
    <ButtonLink
      data-fs-button-signin-link
      href="/login"
      className="text__title-mini"
      variant="tertiary"
    >
      <Icon name="UserLinio" width={32} height={32} />
      <span>{'Iniciar Sesión'}</span>
    </ButtonLink>
  )
}

export default ButtonSignInFallback
