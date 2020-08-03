import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

// carbon core
import { Tile, Button } from 'carbon-components-react';

// carbon icon
import TrashCan32 from '@carbon/icons-react/lib/trash-can/32';
import Edit32 from '@carbon/icons-react/lib/edit/32';

// components
import ButtonIcon from 'components/atoms/ButtonIcon';
import TodoForm from './TodoForm';

// redux

const TodoCard = ({ cardId, text, listId, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setCardText] = useState(text);

  const handleCloseForm = () => {
    setIsEditing(false);
  };

  const handleEditCard = () => {
    console.log('handleFinishEdit: ', cardText);
    // dispatch(editCard(cardId, cardText));
  };

  const onChange = (e) => {
    setCardText(e.target.value);
  };

  const handleRemoveCard = () => {
    // dispatch(removeCard(listId, cardId));
  };

  const renderTextarea = () => (
    <TodoForm
      text={cardText}
      onChange={onChange}
      handleCloseForm={handleCloseForm}
    >
      <Button size="small" onMouseDown={handleEditCard}>
        Save
      </Button>
    </TodoForm>
  );

  const renderCard = () => (
    <Tile className="todoCard">
      <div className="todoCard__button">
        <ButtonIcon icon={Edit32} />
        <ButtonIcon icon={TrashCan32} />
      </div>
      <div>{text}</div>
    </Tile>
  );

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
        );
      }}
    </Draggable>
  );
};

export default memo(TodoCard);
