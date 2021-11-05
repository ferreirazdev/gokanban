import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Column } from "../../components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { setColumns } from "../../state/reducers/columns";

import {
  Container
} from './styles'

export function Home(){
  const dispatch = useDispatch();

  const [newColumn, setNewColumn] = useState(false);

  const { columns } = useSelector((state) => state.columns)

  const saveNewColumn = (e) => {
    const text = e.target.value;
    let active = true;

    if(text) {
      const newDataColumn = {
        icon: "📑",
        name: text,
        color: Object.getOwnPropertyNames(columns).length % 4,
        tasks: [],
      }

      dispatch(
        setColumns({
          ...columns,
          [uuidv4()]: newDataColumn,
        })
      )

      e.target.value = "";
      setNewColumn(false);
    } else {
      if(active) {
        alert('You need define the task name');
        active = false;
      }

      setTimeout(() => {
        e.target.focus()
      }, 10)
    }
  }

  const keyboardControll = (e) => {
    if(e.key === 'Enter'){
      saveNewColumn(e);
    }

    if(e.key === 'Escape'){
      e.target.value = "";
      setNewColumn(false);
    }
  }

  const dropTask = (theReturn) => {
    if(!theReturn.destination) return;

    const {source, destination} = theReturn;

    if(source.droppableId !== destination.droppableId){
      const colOrigin = columns[source.droppableId];
      const colDestiny = columns[destination.droppableId];
      const tasksOrigin = [...colOrigin.tasks];
      const tasksDestiny = [...colDestiny.tasks];

      const [removed] = tasksOrigin.splice(source.index, 1);
      tasksDestiny.splice(destination.index, 0, removed);

      dispatch(
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...colOrigin,
            tasks: tasksOrigin,
          },
          [destination.droppableId]: {
            ...colDestiny,
            tasks: tasksDestiny,
          }
        })
      )
    } else {
      const column = columns[source.droppableId];
      const newTasks = [...column.tasks];

      const [removed] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removed);

      dispatch(
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            tasks: newTasks,
          }
        })
      )
    }
  }

  console.log(columns)

  return (
    <Container>
      
      <DragDropContext onDragEnd={(theReturn) => dropTask(theReturn)}>
        {Object.entries(columns).map((column, index) => {
          return (
            <Column 
              key={index}
              index={index}
              code={column[0]}
              data={column[1]}
            ></Column>
          )
        })}
      </DragDropContext>

      <div className="newColumnWrapper">
        {newColumn ? (
          <div className="newColumn">
            <div>📑</div>
            <input
              autoFocus
              onKeyDown={keyboardControll}
              onBlur={saveNewColumn}
              placeholder="New Column..."
            />
          </div>
        ) : null}

        <div className="addNewColumnWrapper">
          <span 
            role="textbox"
            onClick={() => setNewColumn(true)}
            placeholder="Add new Column"
          >
            <div /> + Column
          </span>
        </div>
      </div>
    </Container>
  )
}