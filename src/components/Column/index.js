import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { setColumns } from '../../state/reducers/columns'
import { Droppable } from 'react-beautiful-dnd';
import { Task } from "../Tasks";

import { 
  Container,
  ColumnArea
} from './styles';

export function Column(props){
  const dispatch = useDispatch();

  const { index, code, picker } = props;
  const { name, color, icon } = props.data;
  const taskObj = {...props.data.tasks};
  const tasks = Object.keys(taskObj).map((k) => taskObj[k])

  const [newTask, setNewTask] = useState(false);

  const { columns } = useSelector((state) => state.columns)

  const saveNewTask = (e) => {
    const text = e.target.value;
    let active = true;

    if(text) {
      const newTasks = [...tasks];
      const newTaskData = {
        id: uuidv4(),
        name: e.target.value,
        tags: [],
      }
      newTasks.splice(newTasks.length, 0, newTaskData);

      dispatch(
        setColumns({
          ...columns,
          [code]: {
            ...columns[code],
            tasks: newTasks,
          }
        })
      );

      e.target.value = "";
      setNewTask(false);
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
      saveNewTask(e);
    }

    if(e.key === 'Escape'){
      e.target.value = "";
      setNewTask(false);
    }
  }

  const taskDelete = (e, index) => {
    const newTasks = tasks;

    e.target.parentNode.className = `${e.target.parentNode.className} deleted`;

    newTasks.splice(index, 1);

    setTimeout(() => {
      dispatch(
        setColumns({
          ...columns,
          [code]: {
            ...columns[code],
            tasks: newTasks,
          }
        })
      )
    }, 210)
  }

  const tagsControll = (task, tags) => {
    const newTasks = [...tasks];

    const editTask = newTasks[task];
    editTask.tags = tags;

    newTasks.splice(task, 1, editTask);

    dispatch(
      setColumns({
        ...columns,
        [code]: {
          ...columns[code],
          tasks: newTasks
        }
      })
    )
  }

  return (
    <Container>
      <Droppable droppableId={code} index={index}>
        {(provided, snapshot) => {
          return (
            <ColumnArea
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                opacity: snapshot.isDraggingOver ? 0.8 : 1,
              }}
            >
              <div className="taskTitle">
                <div>{icon}</div>
                <div>{name}</div>
              </div>
              {tasks.map((task, index) => {
                return (
                  <Task 
                    key={task.id}
                    task={task}
                    index={index}
                    deleteTask={(e) => {
                      taskDelete(e, index)
                    }}
                    selTags={(tags) => {
                      tagsControll(index, tags)
                    }}
                  />
                )
              })}

              {newTask ? (
                <div className="newTaskWrapper">
                  <input 
                    autoFocus
                    onKeyDown={keyboardControll}
                    onBlur={saveNewTask}
                  />
                </div>
              ): null}
              {provided.placeholder}
            </ColumnArea>
          )
        }}
      </Droppable>
      
      <span
        className="handleNewTask"
        onClick={() => {
          setNewTask(true);
        }}
      >
        <div>
          + Task
        </div>
      </span>
    </Container>
  )
}