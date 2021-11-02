import { Draggable } from 'react-beautiful-dnd';
import { Tags } from './styles'

export function Task(props){
  const { index, task, deleteTask, selTags} = props;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p>{task.name}</p>
            <button 
              title="delete"
              onClick={deleteTask}
            />
            <Tags
              tags={task.tags}
              onChange={(newTags) => selTags(newTags)}
              placeholder="New Tags..."
            />
          </div>
        )
      }}
    </Draggable>
  )
}