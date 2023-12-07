import React, { useState, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'

// components
import TodoForm from './TodoForm'
import ButtonIcon from 'components/ButtonIcon'

// redux
import { removeCard, editCard } from '../../redux/todo.reducer'

const TodoCard = ({ cardId, title, listId, member, index }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setCardText] = useState(title)

  const handleCloseForm = () => {
    setIsEditing(false)
  }

  const handleEditCard = () => {
    console.log('handleFinishEdit: ', cardText)
    dispatch(editCard(cardId, cardText))
  }

  const onChange = (e) => {
    setCardText(e.target.value)
  }

  const handleRemoveCard = () => {
    dispatch(removeCard(listId, cardId))
  }

  const renderTextarea = () => (
    <TodoForm
      text={cardText}
      onChange={onChange}
      handleCloseForm={handleCloseForm}
    >
      <button
        type="button"
        onMouseDown={handleEditCard}
        className="button_primary"
      >
        Save
      </button>
    </TodoForm>
  )

  const renderCard = () => (
    <div className="todoCard">
      <div className="todoCard__button">
        <ButtonIcon
          icon="material-symbols:delete-outline"
          color="#fff"
          width={16}
          onClick={handleRemoveCard}
        />
      </div>
      <div className="todoCard__title">{title}</div>
    </div>
  )

  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
            className="todoCard__container"
          >
            {isEditing ? renderTextarea() : renderCard()}
          </div>
        )
      }}
    </Draggable>
  )
}

export default memo(TodoCard)
