import { Draggable } from 'react-beautiful-dnd';
import TrashSvg from '../../assets/trash.svg' 
import { 
  Container, 
  Tags 
} from './styles'

export function Task(props){
  const { index, task, deleteTask, selTags} = props;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="taskInfoWrapper">
              <p>{task.name}</p>
              <img src={TrashSvg} width={14} onClick={deleteTask} alt="logo"/>
            </div>
            <div className="tagsWrapper">
              <Tags
                tags={task.tags}
                onChange={(newTags) => selTags(newTags)}
                placeholder="+ Tags" 
              />
            </div>
            
          </Container>
        )
      }}
    </Draggable>
  )
}