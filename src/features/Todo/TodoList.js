import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// carbon core
import TextInput from 'carbon-components-react/lib/components/TextInput';
import ButtonIcon from 'components/atoms/ButtonIcon';

// carbon icon
import TrashCan32 from '@carbon/icons-react/lib/trash-can/32';

// components
import TodoCard from './TodoCard';
import TodoCreate from './TodoCreate';

function TodoList({ title, cards, listId, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleEditTitleList = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {};

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="todoList"
          style={{
            height: cards.length > 6 ? '100%' : 'auto',
            ...provided.draggableProps.style,
          }}
        >
          <Droppable droppableId={String(listId)} type="CARD">
            {(providedDrop) => (
              <>
                <div>
                  {isEditing ? (
                    <TextInput
                      id="test2"
                      autoFocus
                      onFocus={handleFocus}
                      onBlur={handleEditTitleList}
                      onChange={(e) => setListTitle(e.target.value)}
                      value={listTitle}
                    />
                  ) : (
                    <div className="todoList__head">
                      <div
                        className="todoList__head__title"
                        onClick={() => setIsEditing(true)}
                      >
                        <div>{title}</div>
                      </div>
                      <ButtonIcon icon={TrashCan32} />
                    </div>
                  )}
                </div>
                <div
                  {...providedDrop.droppableProps}
                  ref={providedDrop.innerRef}
                >
                  {cards.map((card, idx) => {
                    return (
                      <TodoCard
                        key={card.id}
                        cardId={card.id}
                        text={card.title}
                        index={idx}
                        listId={listId}
                      />
                    );
                  })}
                  {providedDrop.placeholder}
                </div>
                <TodoCreate listId={listId} />
              </>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default TodoList;
