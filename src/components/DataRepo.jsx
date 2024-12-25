import React from "react";
// Importing a list of repositories as JSON data
import repositories from "../assets/data/repositories.json";

// Importing an icon from the Lucide React library
import { Database } from "lucide-react";

// A mapping object to associate programming languages with specific colors for styling
const languageColors = {
    React: "text-blue-500",
    Javascript: "text-yellow-500",
    Python: "text-green-500",
    Swift: "text-orange-500",
    Java: "text-red-500",
    "HTML/CSS": "text-purple-500",
    PHP: "text-indigo-500",
};

// Main component to display repository data
const DataRepo = () => {
    return (
        <div>
            {/* Loop through each repository in the JSON data */}
            {repositories.map((repo, index) => (
                // Each repository item is wrapped in a div with a unique key
                <div 
                    key={repo.name} 
                    className="hover:bg-gray-100 hover:cursor-pointer"
                >
                    {/* Repository content */}
                    <div className="flex justify-between items-center px-4 transition-colors">
                        {/* Left content - Repository name, visibility, and details */}
                        <div className="flex flex-col gap-2">
                            {/* Repository name and visibility status */}
                            <div className="flex items-center gap-2">
                                {/* Display the repository name */}
                                <span className="font-medium">{repo.name}</span>
                                {/* Visibility badge: 'Public' or 'Private' */}
                                <span
                                    className={`rounded-full text-xs px-2 py-1 ${
                                        repo.visibility === "Public"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-gray-100 text-gray-600"
                                    }`}
                                >
                                    {repo.visibility}
                                </span>
                            </div>
                            {/* Repository metadata: Language, size, and last update */}
                            <div className="flex items-center gap-8 text-sm text-gray-500">
                                {/* Programming language */}
                                <span className="flex items-center gap-1.5">
                                    <span>{repo.language}</span>
                                    {/* Circle color indicator for the language */}
                                    <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                                </span>
                                {/* Repository size */}
                                <span className="flex items-center gap-1">
                                    {/* Icon for size */}
                                    <Database className="text-black h-4 w-4" />
                                    {repo.size} KB
                                </span>
                                {/* Last updated information */}
                                <span>Updated {repo.updatedAt}</span>
                            </div>
                        </div>
                    </div>
                    {/* Render a horizontal line (divider) between repositories */}
                    {/* Avoid adding the line after the last item */}
                    {index !== repositories.length - 1 && (
                        <hr className="border-t-2 border-gray-200 my-4" />
                    )}
                </div>
            ))}
        </div>
    );
};

// Export the DataRepo component for use in other parts of the application
export default DataRepo;
