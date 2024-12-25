// Importing React and necessary components
import React from 'react'
import { Input } from './ui/input'; // Custom Input component for search field
import { Search } from 'lucide-react'; // Importing Search icon from lucide-react

/**
 * SearchInput component to render a search input with an icon
 * 
 * @returns {JSX.Element} - The rendered search input field with an icon
 */
const SearchInput = () => {
    return (
        <div className='px-4 py-2'>
            {/* Wrapper for the search input field */}
            <div className='relative'>
                {/* Search icon positioned inside the input */}
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
                
                {/* Search input field with custom padding and border styling */}
                <Input
                    className="pl-10 pr-4 w-64 h-10 border border-gray-300 rounded-xl text-gray-500"
                    type="text"
                    placeholder="Search Repositories" // Placeholder text for the input field
                />
            </div>
        </div>
    )
}

export default SearchInput
