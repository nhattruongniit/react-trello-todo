import React, { memo } from 'react'

// components
import ButtonIcon from 'components/ButtonIcon'

function TodoCard({ text, placeholder, onChange, handleCloseForm, children }) {
  return (
    <div className="todoForm">
      <textarea
        autoFocus
        onBlur={handleCloseForm}
        placeholder={placeholder}
        rows={3}
        value={text}
        onChange={onChange}
        className="todo_textarea"
      />
      <div className="todoForm__button">{children}</div>
    </div>
  )
}

export default memo(TodoCard)
