import React, { useState } from 'react';
import './App.css';
import * as C from './Styles/App.styles'
import {Item} from './Types/Item'

function App() {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar pão na padaria',
      done: false
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
          <div>{item.name}</div>
        ))}

      </C.Area>
    </C.Container>
  
  );
}

export default App;
