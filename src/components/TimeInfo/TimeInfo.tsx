import React from 'react'
import s from './TimeInfo.module.scss'

const TimeInfo = ({ children }: { children: string }) => {
  return (
    <div className={s.timeInfo}>
      {children}
    </div>
  )
}

export default TimeInfo