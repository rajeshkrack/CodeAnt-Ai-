// Importing required modules and dependencies
import * as React from "react";
import { cva } from "class-variance-authority";

// Utility function for combining class names
import { cn } from "@/lib/utils";

/**
 * `badgeVariants` defines the base styles and variations for the Badge component.
 * It uses `class-variance-authority` (CVA) to handle conditional styling
 * based on the provided `variant` prop.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    // Define style variations for the Badge component
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground", // Outline style without a background
      },
    },
    // Specify the default variant to apply if none is provided
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Badge component: A flexible and reusable UI component to display status, labels, or tags.
 * 
 * Props:
 * - `className`: Additional class names for custom styling
 * - `variant`: The styling variant of the badge (e.g., default, secondary, destructive, outline)
 * - `...props`: Additional props passed to the `div` element
 */
function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)} // Combine variant styles and custom class names
      {...props} // Spread remaining props onto the `div` element
    />
  );
}

// Exporting the Badge component and its variants for use in other parts of the application
export { Badge, badgeVariants };
