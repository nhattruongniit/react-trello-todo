import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

// components
import TodoFrom from './TodoForm'
import ButtonIcon from 'components/ButtonIcon'

// actions
import { addList, addCard } from '../../redux/todo.reducer'

const TodoCreate = ({ isLists, listId, className }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [openForm, setOpenForm] = useState(false)
  const label = isLists ? 'Add another list' : 'Add a card'
  const placeholder = isLists
    ? 'Enter list title...'
    : 'Enter a title for this card...'

  const handleCloseForm = () => {
    setOpenForm(false)
  }

  const handleOpenForm = () => {
    setOpenForm(true)
  }

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const handleAddList = () => {
    console.log('handleAddList', title)

    if (title === '') return

    const id = `list-${uuidv4()}`
    const newList = {
      id,
      title,
      cards: [],
    }
    dispatch(addList(newList))
    setTitle('')
  }

  const handleAddCard = () => {
    if (title === '') return

    const id = `card-${uuidv4()}`
    const newCards = {
      id,
      title,
      list: listId,
      member: [],
    }
    dispatch(addCard(listId, newCards))
    setTitle('')
  }

  return (
    <div className={className}>
      {openForm ? (
        <>
          <TodoFrom
            text={title}
            placeholder={placeholder}
            onChange={onChange}
            handleCloseForm={handleCloseForm}
          >
            <button
              type="button"
              className="button_primary"
              onMouseDown={isLists ? handleAddList : handleAddCard}
            >
              Save
            </button>
          </TodoFrom>
        </>
      ) : (
        <div className="todoCreate__button" onClick={handleOpenForm}>
          <ButtonIcon icon="material-symbols:add" color="#fff" />
          <span>{label}</span>
        </div>
      )}
    </div>
  )
}

export default memo(TodoCreate)
