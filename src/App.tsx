import React, { useState } from 'react';
import './App.css';
import * as C from './Styles/App.styles';
import {Item} from './Types/Item';
import {ListItem} from './Components/ListItem';
import {AddArea} from './Components/AddArea'

function App() {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Estudar Typescript',
      done: false
    },
    {
      id: 2,
      name: 'Finalizar projeto To Do List',
      done: true
    }
  ]);


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false      
    });
    setList(newList);
  }


  return (
    
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Area de adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask} />

        {/* Lista de tarefas */}
        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  
  );
}

export default App;
