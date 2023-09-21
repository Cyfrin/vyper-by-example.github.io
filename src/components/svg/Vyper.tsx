import React from "react"

interface Props {
  size: number
  className?: string
  fill: string
}

const Vyper: React.FC<Props> = ({ size, className = "", fill }) => {
  return (
    <svg
      data-name="Transparent Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 1773.62"
      width={size}
      height={size}
      className={className}
      fill={fill}
    >
      <path
        style={{
          opacity: 0.8,
        }}
        d="m1024 886.81-256 443.41 256 443.4 256-443.4-256-443.41z"
      />
      <path
        style={{
          opacity: 0.6,
        }}
        d="m1280 443.41-256 443.4 256 443.41 256-443.41-256-443.4zM768 443.41l-256 443.4 256 443.41 256-443.41-256-443.4z"
      />
      <path
        style={{
          opacity: 0.45,
        }}
        d="m1536 0-256 443.41 256 443.4 256-443.4L1536 0zM1152 221.7H896L768 443.41l256 443.4 256-443.4-128-221.71zM512 0 256 443.41l256 443.4 256-443.4L512 0z"
      />
      <path
        style={{
          opacity: 0.3,
        }}
        d="M1792 443.4 2048 0h-512l256 443.4zM256 443.4 512 0H0l256 443.4z"
      />
    </svg>
  )
}

export default Vyper
