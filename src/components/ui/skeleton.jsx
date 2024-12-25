// Import utility function to handle class names dynamically
import { cn } from "@/lib/utils"

/**
 * Skeleton component to provide a loading placeholder with animation
 * 
 * @param {Object} props - Props passed to the component
 * @param {string} className - Additional class names for custom styling
 * 
 * @returns {JSX.Element} - A div element with animated loading skeleton
 */
function Skeleton({
  className, // Custom class names for styling
  ...props // Rest of the props to be spread on the div
}) {
  return (
    <div
      // Applying default styles along with any custom class names passed via props
      className={cn("animate-pulse rounded-md bg-primary/10", className)} 
      {...props} // Spreading additional props (e.g., id, data attributes)
    />
  );
}

// Exporting the Skeleton component for use in other parts of the application
export { Skeleton }
