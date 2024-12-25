// Importing necessary libraries and utilities
import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional class name merging

/**
 * `Card` Component
 * A wrapper component for creating a styled card layout.
 * 
 * Props:
 * - `className`: Additional class names for custom styling.
 * - `...props`: Additional props to be spread onto the container.
 * - `ref`: React reference forwarded to the `div` element.
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} // Default styles for the card
    {...props} // Spread additional props onto the container
  />
));
Card.displayName = "Card"; // Assigning a display name for debugging and DevTools

/**
 * `CardHeader` Component
 * Represents the header section of the card, typically used for titles or leading content.
 * 
 * Props:
 * - `className`: Additional class names for custom styling.
 * - `...props`: Additional props to be spread onto the header container.
 * - `ref`: React reference forwarded to the `div` element.
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Flexbox styling for layout with padding
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * `CardTitle` Component
 * Styled title text for the card.
 * 
 * Props:
 * - `className`: Additional class names for custom styling.
 * - `...props`: Additional props to be spread onto the title container.
 * - `ref`: React reference forwarded to the `div` element.
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)} // Styling for bold, tight typography
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * `CardDescription` Component
 * Description text within the card, styled with muted colors.
 * 
 * Props:
 * - `className`: Additional class names for custom styling.
 * - `...props`: Additional props to be spread onto the description container.
 * - `ref`: React reference forwarded to the `div` element.
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Small text with muted color
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * `CardContent` Component
 * Content area of the card, used for the main body.
 * 
 * Props:
 * - `className`: Additional class names for custom styling.
 * - `...props`: Additional props to be spread onto the content container.
 * - `ref`: React reference forwarded to the `div` element.
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)} // Padding applied, with no top padding
    {...props}
  />
));
CardContent.displayName = "CardContent";

/**
 * `CardFooter` Component
 * Footer section of the card, typically used for actions or additional details.
 * 
 * Props:
 * - `className`: Additional class names for custom styling.
 * - `...props`: Additional props to be spread onto the footer container.
 * - `ref`: React reference forwarded to the `div` element.
 */
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
