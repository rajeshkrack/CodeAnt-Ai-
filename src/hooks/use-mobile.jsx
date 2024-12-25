import * as React from "react"

// Defining the mobile breakpoint at 768px
const MOBILE_BREAKPOINT = 768

// Custom hook to check if the device is mobile
export function useIsMobile() {
  // State to store if the device is mobile or not, initially undefined
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    // Create a media query that checks if the device width is below the breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Function to update the isMobile state when the screen width changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add event listener to detect screen size changes
    mql.addEventListener("change", onChange)

    // Set the initial value of isMobile based on the current window width
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Cleanup the event listener on component unmount or re-render
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array means this effect runs once on mount

  // Return the boolean value indicating if the device is mobile
  return !!isMobile
}
