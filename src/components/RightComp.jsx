// Importing necessary dependencies and components
import React from 'react'
import { TabsDemo } from './Tabsdemo' // Importing TabsDemo component for tab functionality
import img1 from "../assets/img/CodeAnt Ai.png" // Importing image for display in the component

/**
 * RightComp component to display a section with an image, a welcome message, 
 * tabs for further content, and a privacy policy agreement.
 * 
 * @returns {JSX.Element} - The rendered component structure
 */
const RightComp = () => {
  return (
    <div>
      {/* Main container for the right section with a flex layout */}
      <div className='flex flex-col items-center my-3 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto'>
        {/* Image section with responsive sizing and centering */}
        <img src={img1} alt="CodeAnt AI" className="w-3/4 max-w-xs object-contain"/>
        
        {/* Title section */}
        <h1 className='text-2xl sm:text-2xl mb-3 font-bold'>Welcome to CodeAnt AI</h1>
        
        {/* Tabs component */}
        <TabsDemo />
      </div>
      
      {/* Privacy policy agreement */}
      <div className="flex justify-center items-center my-3 px-2">
        <span>By signing up you agree to <strong>Privacy Policy.</strong></span>
      </div>
    </div>
  )
}

export default RightComp
