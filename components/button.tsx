import type { ReactNode } from "react"
import type { Variant } from "../types"

interface Props {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  variant?: Variant
}
export const Button = ({ children, onClick, disabled = false, variant = "primary" }: Props) => (
  <button
    onClick={onClick}
    aria-disabled={disabled}
    aria-label="button"
    className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
    disabled={disabled}
  >
    {children}
  </button>
)
