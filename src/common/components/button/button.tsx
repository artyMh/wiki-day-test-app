import './button.css'

export type ButtonProps = {
  children: string
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button
