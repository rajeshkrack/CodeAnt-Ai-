import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"; // Importing Tab components
import { TabsDemo } from './Tabsdemo'; // Importing another demo component (though not used here)
import RightComp from './RightComp'; // Importing the right-hand component (sign-in form)
import LeftComp from './LeftComp'; // Importing the left-hand component (image or content)

const SignIn = () => {
    return (
        <div>
            <div className="h-screen flex">
                {/* Left Column (Image or other content) */}
                <div className="flex-1 bg-white">
                    <LeftComp />  {/* This component is rendered in the left column */}
                </div>

                {/* Right Column (Sign-In Form) */}
                <div className="flex-1 flex items-center justify-center bg-[#FAFAFA]">
                    <div>
                        <RightComp />  {/* This component is rendered in the right column */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
