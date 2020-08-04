import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// components
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

// redux
import { onDragEndList, onDragEndCard } from './redux/todo.reducer';

// selectors
import { getColumns, getLists, getCards } from './selectors';

function Todo() {
  const dispatch = useDispatch();
  const columnsSelector = useSelector(getColumns);
  const listsSelector = useSelector(getLists);
  const cardsSelector = useSelector(getCards);

  const onDragEnd = (result) => {
    const { type } = result;

    if (type === 'LIST') {
      dispatch(onDragEndList(result));
      return false;
    }

    if (type === 'CARD') {
      dispatch(onDragEndCard(result));
      return false;
    }
  };

  return (
    <div
      className="todo"
      style={{
        width: 340 * columnsSelector.length || 1,
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="LIST">
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="todo__container"
              >
                {columnsSelector.length > 0 ? (
                  <>
                    {columnsSelector.map((item, index) => {
                      const lists = listsSelector[item];
                      const cards = lists.cards.map(
                        (card) => cardsSelector[card],
                      );
                      return (
                        <TodoList
                          key={lists.id}
                          listId={lists.id}
                          title={lists.title}
                          cards={cards}
                          index={index}
                        />
                      );
                    })}
                  </>
                ) : null}
                {provided.placeholder}
                <TodoCreate isLists />
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Todo;
