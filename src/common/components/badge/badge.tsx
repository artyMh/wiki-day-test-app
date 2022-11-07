import classNames from 'classnames'

import './badge.css'

export type BadgeProps = {
  isSelected?: boolean
  children: any
  onClick: () => void
}

const Badge = ({ isSelected, children, onClick }: BadgeProps): JSX.Element => {
  const badgeClass = classNames({
    'badge-container': true,
    'badge-container_selected': isSelected
  })

  return (
    <span className={badgeClass} onClick={onClick}>
      {children}
    </span>
  )
}

export default Badge
