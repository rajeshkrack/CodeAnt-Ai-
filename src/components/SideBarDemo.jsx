import React, { useState } from 'react';
import { cn } from "../lib/utils";

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Importing sidebar components
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "./ui/sidebar";

// Importing select components
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

// Importing assets
import img1 from "../assets/img/CodeAnt Ai.png";

// Importing icons
import { SeparatorVertical, Home, Cloud, BookText, Settings, Phone, LogOut } from "lucide-react";

// Defining items in the sidebar menu
const items = [
    {
        title: "Repositories",
        url: "#",
        icon: Home,
    },
    {
        title: "AI Code Review ",
        url: "#",
        icon: SeparatorVertical,
    },
    {
        title: "Cloud Security",
        url: "#",
        icon: Cloud,
    },
    {
        title: "How to Use",
        url: "#",
        icon: BookText,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

const SideBarDemo = () => {

    // State to manage the active sidebar item
    const [activeItem, setActiveItem] = useState('Repositories');

    // Function to handle item click and update active item
    const handleItemClick = (title) => {
        setActiveItem(title);
    };

    // useNavigate hook for navigation
    const navigate = useNavigate();

    // Logout function to navigate to home page
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='w-full h-full'>
            {/* Sidebar component */}
            <Sidebar className="h-full w-1/6">
                <SidebarHeader>
                    {/* Logo */}
                    <img src={img1} alt="logo" className='w-full h-full' />

                    {/* Select input for user accounts */}
                    <Select>
                        <SelectTrigger className="w-full rounded-lg border border-gray-300">
                            <SelectValue placeholder="User1" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg bg-white">
                            <SelectItem value="light">User1</SelectItem>
                            <SelectItem value="dark">User2</SelectItem>
                        </SelectContent>
                    </Select>
                </SidebarHeader>
                
                <SidebarContent>
                    {/* Sidebar group - can be used to group items */}
                    <SidebarGroup />
                    <SidebarGroupContent>
                        {/* Sidebar menu to list the items */}
                        <SidebarMenu className="h-full w-full">
                            <div className='ml-6 flex-col items-center justify-center'>
                                {/* Mapping through sidebar items */}
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            className={cn(
                                                "w-3/4 rounded-xl flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors",
                                                activeItem === item.title
                                                    ? "bg-blue-500 text-white"  // Active item highlighted
                                                    : "text-gray-700 hover:bg-gray-100"  // Inactive item style
                                            )}
                                        >
                                            <button onClick={() => handleItemClick(item.title)} className="flex items-center space-x-2">
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </button>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </div>
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroup />
                </SidebarContent>

                {/* Sidebar footer for support and logout options */}
                <SidebarFooter>
                    <SidebarMenuButton className="w-3/4 rounded-lg flex items-center space-x-2 px-5 py-2 text-sm font-medium transition-colors text-gray-700">
                        <Phone />
                        <span>Support</span>
                    </SidebarMenuButton>
                    {/* Logout button, triggering navigation on click */}
                    <SidebarMenuButton className="w-3/4 rounded-lg flex items-center space-x-2 px-5 py-2 text-sm font-medium transition-colors text-gray-700" onClick={handleClick}>
                        <LogOut />
                        <span>Logout</span>
                    </SidebarMenuButton>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}

export default SideBarDemo;
