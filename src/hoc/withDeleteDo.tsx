import React from "react";
import { useDeleteDoMutation } from "../api/todoApi";

interface Icomp {
  id: number,
  children: string
  onCl?: () => void
}

export function withDeleteDo(Component: React.FC<any>) {
  return (props: Icomp) => {
    const [deletter, { isError }] = useDeleteDoMutation()
    return (
      <Component onCl={() => deletter(props.id)}>
        {props.children}
      </Component>
    )
  }
}
