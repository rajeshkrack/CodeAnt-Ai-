import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx'; // Utility for conditional class names

// Sidebar-related imports
import {
    SidebarProvider,
} from "./ui/sidebar";
import SideBarDemo from './SideBarDemo';
import MobileSidebar from './MobileSidebar';

// UI Components
import { Button } from "./ui/button";
import Repo from './Repo';
import RepositoryList from "./RepositoryList";

// Data
import repositories from "../assets/data/repositories.json";

// Images
import img1 from "../assets/img/CodeAnt Ai_mobile.png";

// Icons
import { Menu } from 'lucide-react'; // Icon for mobile menu

// Main Dashboard Component
const MainDash = () => {
    // State to track if the device is mobile or desktop
    const [isMobile, setIsMobile] = useState(false);

    // State to handle the sidebar's open/close state on mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Effect to update `isMobile` based on window width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Mobile view if width is less than 1024px
        };

        handleResize(); // Check screen size on mount
        window.addEventListener('resize', handleResize); // Add resize event listener

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile layout component
    const MobileLayout = () => (
        <div className="min-h-screen bg-gray-50">
            {/* Header with logo and menu button */}
            <div className="flex items-center justify-between p-4 bg-white border-b">
                <img src={img1} alt="CodeAnt AI" className="h-8" />
                {/* Menu button opens the sidebar */}
                <Button className="shadow-none" onClick={() => setIsSidebarOpen(true)}>
                    <Menu className="h-14 w-14" />
                </Button>
            </div>

            {/* Repository list content */}
            <div className="p-1">
                <RepositoryList repositories={repositories} />
            </div>

            {/* Sidebar for mobile */}
            <MobileSidebar 
                className="bg-white" 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
            />
        </div>
    );

    // Desktop layout component
    const DesktopLayout = () => (
        <div className="flex h-screen bg-[#FAFAFA]">
            {/* Sidebar section */}
            <div className="bg-white text-black w-1/6 h-full shadow-lg">
                <SidebarProvider className="w-full h-full">
                    {/* Main Sidebar */}
                    <SideBarDemo className="w-full h-full" />
                </SidebarProvider>
            </div>

            {/* Main content section */}
            <div className="h-screen w-5/6 mx-auto px-4 py-4">
                <Repo /> {/* Repository component for desktop */}
            </div>
        </div>
    );

    // Conditionally render the layout based on the device type
    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default MainDash;
