import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick: () => void
}
export const Button = ({ children, onClick }: Props) => (
  <button onClick={onClick} className="uppercase">
    {children}
  </button>
)
