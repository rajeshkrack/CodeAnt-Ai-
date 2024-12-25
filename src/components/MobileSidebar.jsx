import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import {
  Drawer, // Material-UI drawer for sidebar
  List, // List component for navigation items
  ListItem, // Individual list item
  ListItemIcon, // Icon for each list item
  ListItemText, // Text for each list item
  IconButton, // Button for closing the drawer
} from '@mui/material';

import {
  Select, // Select component from ShadCN
  SelectContent, // Dropdown content for select
  SelectItem, // Individual select option
  SelectTrigger, // Trigger for dropdown
  SelectValue, // Placeholder and selected value
} from "./ui/select";

// Icons for navigation
import { X, Home, Code2, Cloud, BookText, Settings2, Phone, LogOut } from 'lucide-react';

// Image for branding or header
import img1 from "../assets/img/CodeAnt Ai_mobile.png";

// Navigation items configuration
const navigationItems = [
  { title: 'Repositories', icon: Home }, // Links to repositories section
  { title: 'AI Code Review', icon: Code2 }, // Links to AI Code Review section
  { title: 'Cloud Security', icon: Cloud }, // Links to Cloud Security section
  { title: 'How to Use', icon: BookText }, // Links to How to Use section
  { title: 'Settings', icon: Settings2 }, // Links to Settings section
  { title: 'Support', icon: Phone }, // Links to Support section
  { title: 'Logout', icon: LogOut }, // Logs out the user
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Function to handle user logout
  const handleLogout = () => {
    navigate('/'); // Redirect to the home page
    onClose(); // Close the sidebar
  };

  return (
    <Drawer
      anchor="top" // Drawer slides in from the top
      open={isOpen} // Open state passed as a prop
      onClose={onClose} // Close handler passed as a prop
      PaperProps={{
        sx: {
          width: '100%', // Full width of the screen
          maxHeight: '90vh', // Restrict height to 90% of the viewport
          borderRadius: '0 0 16px 16px', // Rounded bottom corners
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', // Subtle shadow
        },
      }}
    >
      <div className="flex flex-col bg-white">
        {/* Header with branding and close button */}
        <div className="flex justify-between items-center p-4 border-b">
          {/* Branding Image */}
          <div className="flex items-center gap-2">
            <img src={img1} alt="CodeAnt AI" className="h-8" />
          </div>
          {/* Close Sidebar Button */}
          <IconButton onClick={onClose} size="small">
            <X className="h-5 w-5" /> {/* Close icon */}
          </IconButton>
        </div>

        {/* User Selector Dropdown */}
        <div className="p-4 overflow-hidden">
          <select className="w-full border border-gray-300 bg-gray-50 rounded-xl appearance-none p-2">
            <option value="user1">User1</option>
            <option value="user2">User2</option>
          </select>
        </div>

        {/* Alternative User Selector using ShadCN UI (Commented out because it didn't work) */}
        {/* 
        <div className="p-4">
          <Select>
            <SelectTrigger className="w-full rounded-xl border border-gray-200 bg-gray-50">
              <SelectValue placeholder="User1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user1">User1</SelectItem>
              <SelectItem value="user2">User 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        */}

        {/* Navigation List */}
        <List sx={{ width: '100%', padding: 0 }}>
          {navigationItems.map((item) => {
            const Icon = item.icon; // Get the icon for the navigation item
            return (
              <ListItem
                key={item.title} // Unique key for each item
                onClick={item.title === 'Logout' ? handleLogout : undefined} // Handle logout click
                button // Makes the list item clickable
                sx={{
                  padding: '12px 16px', // Spacing inside list item
                  '&:hover': {
                    backgroundColor: '#F9FAFB', // Hover effect
                  },
                }}
              >
                {/* Icon for the navigation item */}
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon className="h-5 w-5 text-gray-600" />
                </ListItemIcon>
                {/* Text for the navigation item */}
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem', // Font size
                      fontWeight: 500, // Font weight
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
