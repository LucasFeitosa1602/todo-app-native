import { Text } from "../Text"
import Pending from "../../assets/images/pending.png"
import Done from "../../assets/images/done.png"
import Delete from "../../assets/images/delete.png"
import Edit from "../../assets/images/edit.png"
import Close from "../../assets/images/close.png"
import { Task, TaskAction, TaskDescription, TaskFooter, TaskHeader, TaskIcon, TaskStatus, TasksContainer } from "./styles";
import { TouchableOpacity } from "react-native"
import {tasks} from '../../mocks/tasks'

const Tasks = () => {
  
  return (
    <TasksContainer>
    {tasks.map((task)=>(
        <Task>
        <TaskHeader>
          <Text size={18} weight={600}>{task.title}</Text>
        </TaskHeader>
        <TaskDescription>
          <Text opacity={0.5}>{task.description}</Text>
        </TaskDescription>
        <TaskFooter>
          <TaskStatus onPress={()=> alert('Editar Status')}>
            <TaskIcon source={Pending} />
            <Text>Pendente</Text>
          </TaskStatus>
          <TaskAction>
            <TouchableOpacity onPress={()=> alert('Editar Tarefa')}>
              <TaskIcon source={Edit} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('Deletar Tarefa')}>
              <TaskIcon source={Delete} />
            </TouchableOpacity>
          </TaskAction>
        </TaskFooter>
      </Task>
      ))}
      </TasksContainer>
      
  )
}

export default Tasks;