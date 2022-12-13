import TodoItem from '../TodoItem/TodoItem'
import s from './Todo.module.scss'
import { useGetTodosQuery } from '../../api/todoApi';
import AdedDo from '../AdedDo/AdedDo';
import { useState } from 'react';
import { Idata } from '../../type/data';

export default function Todo() {
  const [dos, setDos] = useState(10)
  const { data, error, isLoading } = useGetTodosQuery(dos)
  
  if (error) return (<p>{`${error}`}</p>)
  return (
    <div className={`${s.todo} dark:bg-slate-900 duration-300`}>
      <div className="container">
        <div className='flex items-center justify-between gap-3'>
          <AdedDo onCl={() => setDos(dos + 1)}>+</AdedDo>
          <AdedDo onCl={() => setDos(dos - 1)}>-</AdedDo>
        </div>
        {
          isLoading
            ?
            <p>Loading...</p>
            :
            data !== undefined
            ?
            data.map((item: Idata) => (
              <TodoItem key={item.id} id={item.id}>
                {item.title}
              </TodoItem>
            ))
            :
            <p>{`${error}`}</p>
        }
      </div>
    </div>
  )
}
