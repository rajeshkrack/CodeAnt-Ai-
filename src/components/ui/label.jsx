// Importing necessary libraries and utilities
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label"; // Radix UI's primitive label component
import { cva } from "class-variance-authority"; // Utility for managing class variants
import { cn } from "@/lib/utils"; // Utility for conditionally merging class names

/**
 * `labelVariants` - Class Variants
 * Defines the default styling for the `Label` component.
 * 
 * Features:
 * - Text styling: Sets the size (`text-sm`), weight (`font-medium`), and line height.
 * - Disabled state: Applies cursor and opacity adjustments when the associated input is disabled (`peer-disabled`).
 */
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

/**
 * `Label` Component
 * A styled label element for use with form inputs, built on top of Radix UI's `LabelPrimitive.Root`.
 * 
 * Props:
 * - `className`: Additional class names to override or extend the default styling.
 * - `...props`: Additional props to be spread onto the label element.
 * - `ref`: React reference forwarded to the label element for direct DOM manipulation.
 * 
 * Features:
 * - Flexible styling: Combines default styles with user-defined class names.
 * - Peer state handling: Adjusts styling based on the state of associated form elements (e.g., disabled).
 * - Accessibility: Ensures proper semantics for form labels.
 */
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref} // Forwarding the ref for external access
    className={cn(labelVariants(), className)} // Applying default and custom styles
    {...props} // Spreading additional props (e.g., htmlFor, children)
  />
));

// Assigning a display name for better debugging and React DevTools inspection
Label.displayName = LabelPrimitive.Root.displayName;

// Exporting the `Label` component for use in other parts of the application
export { Label };
