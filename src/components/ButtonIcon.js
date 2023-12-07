import React from 'react'
import { Icon } from '@iconify/react'

function ButtonIcon({ icon, onClick, ...props }) {
  return (
    <button type="button" onClick={onClick}>
      <Icon width={20} icon={icon} {...props} />
    </button>
  )
}

export default ButtonIcon
