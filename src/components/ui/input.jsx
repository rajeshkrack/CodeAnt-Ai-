// Importing necessary libraries and utilities
import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for conditionally merging class names

/**
 * `Input` Component
 * A styled input field with support for customization via props and class names.
 * 
 * Props:
 * - `className`: Additional class names to override or extend the default styling.
 * - `type`: The type attribute for the input element (e.g., "text", "password", "email").
 * - `...props`: Additional props to be spread onto the input element.
 * - `ref`: React reference forwarded to the input element for direct DOM manipulation.
 * 
 * Features:
 * - Responsive styling: Adjusts text size for mobile (`md:text-sm`).
 * - Accessibility: Supports focus-visible outline and ring for better keyboard navigation.
 * - Disabled state styling: Adjusts opacity and cursor for disabled inputs.
 * - File input styling: Special styling for file inputs.
 */
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type} // Sets the input type (e.g., text, password)
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className // Merges custom class names with default styling
      )}
      ref={ref} // Forwarding the ref for external access
      {...props} // Spreading additional props (e.g., onChange, placeholder)
    />
  );
});

// Assigning a display name for better debugging and React DevTools inspection
Input.displayName = "Input";

// Exporting the `Input` component for use in other parts of the application
export { Input };
