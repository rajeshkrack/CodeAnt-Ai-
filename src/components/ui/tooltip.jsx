"use client"

// Importing React and Radix UI Tooltip primitives
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

// Importing a utility function for conditional className merging
import { cn } from "@/lib/utils"

// TooltipProvider is a context provider for managing all tooltips in the application
// It ensures proper behavior for multiple tooltips like delay, close on interaction, etc.
const TooltipProvider = TooltipPrimitive.Provider

// Tooltip is the root component for the tooltip
// It wraps the trigger and content, managing their lifecycle and accessibility
const Tooltip = TooltipPrimitive.Root

// TooltipTrigger is the element that will trigger the tooltip (e.g., on hover or focus)
// It wraps any interactive UI element, such as a button or text
const TooltipTrigger = TooltipPrimitive.Trigger

// TooltipContent is the component that renders the tooltip content itself
// It supports side offsets for positioning and includes styles and animations
const TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    // Portal ensures the tooltip content is rendered outside of the normal DOM flow
    // This helps with positioning and ensures it isn't clipped by parent containers
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref} // Forwarding the ref for external use or focus management
        sideOffset={sideOffset} // Determines the distance between the tooltip and trigger
        className={cn(
          // Combining class names for styling, animations, and accessibility states
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props} // Spread other props for flexibility (e.g., `onClick`, `style`, etc.)
      />
    </TooltipPrimitive.Portal>
  )
)
// Set displayName for TooltipContent for better debugging in React DevTools
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Exporting all components for external use
// These components can be composed together to create tooltips in the application
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
