"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-md border", className)}
    {...props}
  />
))
Calendar.displayName = "Calendar"

export { Calendar }