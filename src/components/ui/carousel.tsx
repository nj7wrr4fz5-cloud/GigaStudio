"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
))
Carousel.displayName = "Carousel"

export { Carousel }