// Importing necessary libraries and modules
import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Allows custom elements to be slotted in as components
import { cva } from "class-variance-authority"; // Utility for handling conditional styling

// Utility function for combining class names
import { cn } from "@/lib/utils";

/**
 * `buttonVariants` defines the base styles and variations for the Button component.
 * Uses `class-variance-authority` (CVA) for flexible and reusable styling options
 * based on provided `variant` and `size` props.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    // Variants for styling based on `variant` and `size` props
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90", // Primary style
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", // Destructive style
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", // Outlined style
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", // Secondary style
        ghost: "hover:bg-accent hover:text-accent-foreground", // Ghost style with hover effects
        link: "text-primary underline-offset-4 hover:underline", // Link style
      },
      size: {
        default: "h-9 px-4 py-2", // Default size
        sm: "h-8 rounded-md px-3 text-xs", // Small size
        lg: "h-10 rounded-md px-8", // Large size
        icon: "h-9 w-9", // Icon button size
      },
    },
    // Default styles to apply if no specific variant or size is provided
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Button component: A flexible and accessible button with support for variants, sizes, and custom elements.
 * 
 * Props:
 * - `className`: Additional class names for custom styling
 * - `variant`: The styling variant of the button (e.g., default, secondary, destructive, etc.)
 * - `size`: The size of the button (e.g., default, sm, lg, icon)
 * - `asChild`: If true, allows rendering a custom component using the `Slot` wrapper
 * - `...props`: Additional props passed to the button or custom component
 * 
 * The `React.forwardRef` is used to pass the `ref` to the underlying component for DOM manipulation.
 */
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Determine the component type: `Slot` for custom elements or default to `button`
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Combine styles with custom class names
        ref={ref} // Forward the ref to the DOM element
        {...props} // Spread remaining props onto the component
      />
    );
  }
);

// Display name for the Button component (useful for debugging in React DevTools)
Button.displayName = "Button";

// Exporting the Button component and its variants for use across the application
export { Button, buttonVariants };
