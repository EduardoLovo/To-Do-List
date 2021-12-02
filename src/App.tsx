import React, { useState } from 'react';
import './App.css';
import * as C from './Styles/App.styles';
import {Item} from './Types/Item';
import {ListItem} from './Components/ListItem';

function App() {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar pão na padaria',
      done: true
    },
    {
      id: 2,
      name: 'Comprar um bolo',
      done: false
    }

  ]);


  return (
    
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Area de adicionar nova tarefa */}
        <h2>Adicionar nova tarefa</h2>

        {/* Lista de tarefas */}
        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  
  );
}

export default App;
