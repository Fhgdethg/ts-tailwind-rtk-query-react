import s from './AdedDo.module.scss'
import { useGetTodosQuery } from '../../api/todoApi';
import React from 'react';

interface IAded {
  onCl: () => void,
  children: string
}

const AdedDo: React.FC<IAded> = ({ onCl, children }) => {
  const { data, error, isLoading } = useGetTodosQuery(10)
  return (
    <button
      className={`beautifulRound ${s.add} justify-center w-[100%]`}
      onClick={onCl}
    >
      {children}
    </button>
  )
}

export default AdedDo