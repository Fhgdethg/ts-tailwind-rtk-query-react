import React from "react"
import { withDeleteDo } from "../../hoc/withDeleteDo"

interface IbtnDoProps {
  children: number
  onCl: () => void
  id: number
}

const BtnDo: React.FC<IbtnDoProps> = ({ children, onCl, id }) => {
  return (
    <button
      className={`beautifulRound bg-slate-100 ml-2`}
      onClick={onCl}
    >
      {children}
    </button>
  )
}

export const DeleteDo = withDeleteDo(BtnDo)
