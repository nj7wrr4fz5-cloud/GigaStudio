"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function useMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)
  const mobile = useMediaQuery("(max-width: 640)")

  React.useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])

  return isMobile ?? false
}