import React from 'react';
// Importing an image asset
import img1 from "../assets/img/left.png";

// Functional component to render the left section
const LeftComp = () => {
  return (
    <div className="w-full h-full bg-white shadow-sm">
      {/* Displaying the imported image */}
      <img 
        src={img1} 
        alt="" 
        className="object-contain w-full h-full" 
      />
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default LeftComp;
