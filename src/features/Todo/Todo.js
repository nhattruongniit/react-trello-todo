import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// components
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

// selectors
import { getColumns, getLists, getCards } from './selectors';

function Todo() {
  const columnsSelector = useSelector(getColumns);
  const listsSelector = useSelector(getLists);
  const cardsSelector = useSelector(getCards);

  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  console.log(columnsSelector);
  return (
    <div className="todo">
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
                <div className="todo__button">
                  <TodoCreate isLists />
                </div>
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Todo;
