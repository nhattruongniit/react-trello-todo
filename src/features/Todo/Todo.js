import React, { useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from 'reactstrap';

function Todo() {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable draggableId="draggable-1" index={0}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Row>
                    <Col sm="3">
                      <Card>
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              )}
            </Draggable>
            <Draggable draggableId="draggable-2" index={1}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <h4>My draggable 1</h4>
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Todo;
