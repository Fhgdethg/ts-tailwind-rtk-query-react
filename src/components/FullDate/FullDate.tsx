import { useTime } from '../../hooks/useTime';
import s from './FullDate.module.scss'
import TimeInfo from '../TimeInfo/TimeInfo';

export default function FullDate() {
  let { time } = useTime()

  return (
    <div className={`${s.container} dark:bg-slate-900 duration-300 min-h-screen`}>
      <p>Сегодня:</p>
      <TimeInfo>
        {time.toLocaleDateString()}
      </TimeInfo>
      <p>Сейчас:</p>
      <TimeInfo>
        {time.toLocaleTimeString()}
      </TimeInfo>
    </div>
  )
}