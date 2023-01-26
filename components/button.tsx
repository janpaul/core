import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick: () => void
}
export const Button = ({ children, onClick }: Props) => (
  <button
    onClick={onClick}
    className="inline-block rounded bg-yellow-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
  >
    {children}
  </button>
)
