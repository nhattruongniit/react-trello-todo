import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

// components
import ButtonIcon from 'components/ButtonIcon'
import TodoCard from './TodoCard'
import TodoCreate from './TodoCreate'

// redux
import { changeTitleList, removeList } from '../../redux/todo.reducer'

function TodoList({ title, cards, listId, index }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(title)

  const handleFocus = (e) => {
    e.target.select()
  }

  const handleEditTitleList = () => {
    dispatch(changeTitleList(listId, listTitle))
    setIsEditing(false)
  }

  const handleRemove = () => {
    dispatch(removeList(listId))
  }

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="todoList"
        >
          <Droppable droppableId={String(listId)} type="CARD">
            {(providedDrop) => (
              <>
                <div>
                  <div className="todoList__head">
                    <div
                      className="todoList__head__title"
                      onClick={() => setIsEditing(true)}
                    >
                      {isEditing ? (
                        <input
                          type="text"
                          id={String(listId)}
                          autoFocus
                          onFocus={handleFocus}
                          onBlur={handleEditTitleList}
                          onChange={(e) => setListTitle(e.target.value)}
                          value={listTitle}
                          className="todoList__input"
                        />
                      ) : (
                        title
                      )}
                    </div>
                    <ButtonIcon
                      icon="material-symbols:delete-outline"
                      color="#fff"
                      onClick={handleRemove}
                    />
                  </div>
                </div>
                <div
                  {...providedDrop.droppableProps}
                  ref={providedDrop.innerRef}
                  className="todoList__content"
                >
                  {cards.map((card, idx) => {
                    return (
                      <TodoCard
                        key={card.id}
                        cardId={card.id}
                        title={card.title}
                        index={idx}
                        listId={listId}
                        member={card.member}
                      />
                    )
                  })}
                  {providedDrop.placeholder}
                </div>
                <TodoCreate listId={listId} className="button_list" />
              </>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default TodoList
