import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// carbon core
import { Button } from 'carbon-components-react';

// carbon icon
import Add32 from '@carbon/icons-react/lib/add/32';

// components
import TodoFrom from './TodoForm';

// actions
import { addList, addCard } from './redux/todo.reducer';

const TodoCreate = ({ isLists, listId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const label = isLists ? 'Add another list' : 'Add a card';
  const placeholder = isLists
    ? 'Enter list title...'
    : 'Enter a title for this card...';

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddList = () => {
    console.log('handleAddList', title);

    if (title === '') return;

    const id = `list-${uuidv4()}`;
    const newList = {
      id,
      title,
      cards: [],
    };
    dispatch(addList(newList));
    setTitle('');
  };

  const handleAddCard = () => {
    if (title === '') return;

    const id = `card-${uuidv4()}`;
    const newCards = {
      id,
      title,
      list: listId,
      member: []
    };
    dispatch(addCard(listId, newCards));
    setTitle('');
  };

  return (
    <>
      {openForm ? (
        <TodoFrom
          text={title}
          placeholder={placeholder}
          onChange={onChange}
          handleCloseForm={handleCloseForm}
        >
          <Button
            size="small"
            onMouseDown={isLists ? handleAddList : handleAddCard}
          >
            Save
          </Button>
        </TodoFrom>
      ) : (
        <div className="todoCreate__button" onClick={handleOpenForm}>
          <Add32 />
          {label}
        </div>
      )}
    </>
  );
};

export default memo(TodoCreate);
