import React from 'react'
import { Button } from './ui/button'

// Importing icons for buttons
import { Plus, RefreshCcw, Search } from 'lucide-react';

import SearchInput from './SearchInput'; // Importing custom SearchInput component
import DataRepo from './DataRepo'; // Importing custom DataRepo component

const Repo = () => {
    return (
        <div className='bg-white h-full w-full rounded-xl shadow-md'>
            {/* Header Section with repository title and total count */}
            <div className='px-4 py-2 flex justify-between items-center'>
                <div>
                    <h1 className='font-semibold text-xl'>Repositories</h1>
                    <h5 className='text-gray-400 text-sm'>33 Total Repositories</h5>
                </div>
                {/* Action buttons (Refresh and Add Repositories) */}
                <div className='flex space-x-4'>
                    {/* Refresh Button */}
                    <Button className="text-gray-500 border rounded-xl shadow-md">
                        <RefreshCcw />
                        Refresh All
                    </Button>
                    {/* Add Repositories Button */}
                    <Button className="text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-500 hover:text-white">
                        <Plus />
                        Add Repositories
                    </Button>
                </div>
            </div>

            {/* Search bar for filtering or searching repositories */}
            <SearchInput/>  

            {/* Horizontal divider line */}
            <hr className="border-t-2 border-gray-200 my-4" />   

            {/* Main section to display repository data */}
            <DataRepo/> 
        </div>
    )
}

export default Repo
