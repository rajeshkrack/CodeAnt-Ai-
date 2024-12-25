// Import necessary modules and components
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs"; // Radix UI Tabs primitives for accessibility
import { cn } from "@/lib/utils"; // Utility for conditional class names

// Tabs root component that wraps the entire tab interface
const Tabs = TabsPrimitive.Root;

// TabsList: Container for tab triggers with custom styling
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className // Allow custom classes to be passed for further styling
    )}
    {...props} // Pass any additional props to the TabsPrimitive.List component
  />
));
TabsList.displayName = TabsPrimitive.List.displayName; // Set the display name for better debugging

// TabsTrigger: Represents each tab button with specific styling and behavior
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className // Allow custom classes for additional styles
    )}
    {...props} // Pass any additional props to the TabsPrimitive.Trigger component
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName; // Set display name for debugging

// TabsContent: Content displayed when a tab is active
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className // Allow custom classes for more styling
    )}
    {...props} // Pass any additional props to the TabsPrimitive.Content component
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName; // Set display name for debugging

// Export all the components for use in other parts of the application
export { Tabs, TabsList, TabsTrigger, TabsContent };
