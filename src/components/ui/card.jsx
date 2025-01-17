// Importing necessary libraries and utilities
import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional class name merging


const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} // Default styles for the card
    {...props} // Spread additional props onto the container
  />
));
Card.displayName = "Card"; // Assigning a display name for debugging and DevTools

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Flexbox styling for layout with padding
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)} // Styling for bold, tight typography
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Small text with muted color
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)} // Padding applied, with no top padding
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Flexbox layout with padding, no top padding
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Exporting all components for modular use
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
