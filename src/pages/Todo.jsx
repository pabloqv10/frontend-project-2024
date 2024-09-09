import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { NewTodo } from '../components/NewTodo';
import { TodoList } from '../components/TodoList';


export const Todo = () => {
  const [tareas, setTareas] = useState([]);

  const addTodo = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <MainLayout>
      <div>
        <NewTodo addTodo={addTodo} />
        <TodoList tareas={tareas} />
      </div>
    </MainLayout>
  );
};
