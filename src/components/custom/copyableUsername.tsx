"use client"

import * as React from "react"
import { useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function CopyableUsername({
  username,
  isLinked,
  className,
}: {
  username: string
  isLinked?: boolean
  className?: string
}): React.JSX.Element {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    navigator.clipboard.writeText(username).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <span
      onClick={handleCopy}
      className={cn(
        "ml-2 flex cursor-pointer items-center gap-1 transition-all hover:text-primary hover:opacity-100",
        isLinked ? "opacity-15" : "opacity-70",
        className
      )}
      title="Click to copy username"
    >
      [{username}]
      {copied ? (
        <CheckIcon className="h-3 w-3 text-green-500" />
      ) : (
        <CopyIcon className="h-3 w-3 opacity-50" />
      )}
    </span>
  )
}
