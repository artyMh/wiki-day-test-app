import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import './badge.css'

export type BadgeProps = {
  isSelected?: boolean
  icon?: IconDefinition | null
  onClick?: () => void
  children: React.ReactNode
}

const Badge = ({ isSelected, icon = null, onClick, children }: BadgeProps): JSX.Element => {
  const badgeClass = classNames({
    'badge-container': true,
    'badge-container_selected': isSelected
  })

  let badgeIcon: JSX.Element | null = null

  if (icon !== null) {
    badgeIcon = <FontAwesomeIcon icon={icon} />
  }

  return (
    <span className={badgeClass} onClick={onClick}>
      {badgeIcon}
      {children}
    </span>
  )
}

export default Badge
