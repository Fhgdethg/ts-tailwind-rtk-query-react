import s from './TodoItem.module.scss'
import { DeleteDo } from '../BtnDo/BtnDo'
import React from 'react'

interface ItodoItemProps {
  children: string,
  id: number
}

const TodoItem: React.FC<ItodoItemProps> = ({ children, id }) => {
  return (
    <div className={`${s.item} beautifulRound`}>
      <p>
        {children}
      </p>
      <div className={s.btns}>
        <DeleteDo id={id}>
          Delete Do
        </DeleteDo>
      </div>
    </div>
  )
}

export default TodoItem