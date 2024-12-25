"use client"

// Import React and the Radix UI Separator primitive for creating a customizable separator component
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

// Import a utility function for conditional class names
import { cn } from "@/lib/utils"

/**
 * Separator Component
 * A versatile separator component using Radix UI primitives and Tailwind CSS.
 *
 * @param {object} props - Component properties
 * @param {string} [props.className] - Additional custom classes for styling
 * @param {string} [props.orientation="horizontal"] - Orientation of the separator ('horizontal' or 'vertical')
 * @param {boolean} [props.decorative=true] - If true, the separator is purely visual and not accessible
 * @param {object} props.ref - React ref for advanced manipulation
 *
 * @returns {JSX.Element} A styled separator element
 */
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      // Forward the ref to the underlying Radix Separator
      ref={ref}
      // Specify whether the separator is decorative (not accessible)
      decorative={decorative}
      // Set the orientation: 'horizontal' or 'vertical'
      orientation={orientation}
      // Apply default and custom styles conditionally
      className={cn(
        "shrink-0 bg-border", // Default styling for the separator
        orientation === "horizontal" 
          ? "h-[1px] w-full" // Horizontal: 1px height, full width
          : "h-full w-[1px]", // Vertical: full height, 1px width
        className // Add any custom classes passed as props
      )}
      {...props} // Spread remaining props to the Radix Separator
    />
  )
)

// Assign a display name for easier debugging in React DevTools
Separator.displayName = SeparatorPrimitive.Root.displayName

// Export the Separator component for use in other parts of the application
export { Separator }
