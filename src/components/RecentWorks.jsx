import React from 'react';

// Define recent works array
const recentWorks = [
    {
        title: "CineMate - Movie Recommendation Website",
        description: "web application that provides movie recommendations to users based on their ratings on movies.",
        techs: ["React", "Node", "Machine Learning", "TypeScript","MongoDB", "Docker","Flask", "Python", "Express.js", "Tailwind","Next.js"],
        img: "/images/cinamte.png",
        ref: "https://github.com/shakedshoshan/movie-recommender"
    },
    {
        title: "Live Chat Web App",
        description: "A real-time communication capabilities for users within a web interface.",
        techs: ["React", "Node", "JS","MongoDB", "Socket.io", "Express.js", "Tailwind","Vite"],
        img: "/images/chat_app_home.png",
        ref: "https://github.com/shakedshoshan/chat-app"
    },
    {
        title: "Book Store Stock Managment",
        description: "Manage books collection. You can add, delete, update, and view information about your favorite book.",
        techs: ["React", "Node", "JS","MongoDB", "Express.js", "Tailwind","Vite"],
        img: "/images/bookStore.png",
        ref: "https://github.com/shakedshoshan/bookStoreSystem"
    },
    {
        title: "Currency Converter",
        description: "Professional page for digital marketing.",
        techs: ["React", "JS", "Tailwind","Vite"],
        img: "/images/currency.png",
        ref: "https://github.com/shakedshoshan/currency-converter"
    },
];

// Functional component
const RecentWorks = () => {
    return (
        <div id="recent-works" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
  {recentWorks.map((work, index) => (
    <div key={index} className="flex flex-col bg-white border  border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {/* Image */}
      <div className="">
        <img className="rounded-t-lg w-full" src={work.img} alt={work.title} />
      </div>
      {/* Content */}
      <div className="flex flex-col p-3   border-gray-100 dark:border-gray-600 flex-grow">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{work.title}</h5>
        <p className="font-light text-gray-800 dark:text-gray-400">{work.description}</p>
        {/* Tech Buttons */}
        <div className="my-4 flex flex-wrap">
          {work.techs.map((tech, idx) => (
            <button
              key={idx}
              type="button"
              className="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-md text-sm px-2 py-2 mr-1 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600 scale-90"
            >
              {tech}
            </button>
          ))}
        </div>
        {/* Read More Button */}
        <div id="read_more" className="mt-auto">
          <a
            href={work.ref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

    );
};

export default RecentWorks;
