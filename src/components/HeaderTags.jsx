import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



const tags = [
    {
        icon: <i className="fa-solid fa-desktop fa-sm mr-1 text-blue-700"></i>,
        name: "Web Developer"
    },
    {
        icon: <i className="fa-solid fa-code fa-sm mr-1 text-blue-400"></i>,
        name: "React Developer"
    },
    {
        icon: <i className="fa-solid fa-code fa-sm mr-1 text-green-600"></i>,
        name: "Node"
    },
    {
        icon: <i className="fa-solid fa-terminal fa-sm mr-1 text-orange-500"></i>,
        name: "MERN"
    },
    {
        icon: <i className="fa-solid fa-terminal fa-sm mr-1 text-blue-600"></i>,
        name: "JavaScript"
    },
];

// Functional Component
const HeaderTags = () => {
    return (
        <div id="header-tags" className='pt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5'>
            {tags.map((tag, index) => (
                <span key={index} className='"text-gray-900 bg-gray-100 border border-gray-100  hover:bg-gray-50 font-medium rounded-full text-sm px-4 py-2 lg:px-5 lg:py-2.5  mr-1 mb-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700"'>
                     {tag.icon} {tag.name}
                </span>
            ))}
        </div>
    );
};

export default HeaderTags;
