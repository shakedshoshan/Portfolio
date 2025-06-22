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
      title: "Social Media Sport Prediction App",
      description: "A social platform where users can predict sports match outcomes, join groups, and compete with friends. Features include match schedules, group discussions, scraping algorithm for pre-game data and prediction tracking.",
      techs: ["React", "Node", "PostgreSQL", "Redis", "Express.js", "Tailwind", "Vite", "Zustand", "Cheerio"],
      img: "/images/sport media - home.png",
      ref: "https://github.com/shakedshoshan/social-media-sport-pred"
    },
    {
      title: "Fill in the Blanks Game",
        description: "A multiplayer word game, where players take turns filling in blanks to create hilarious and nonsensical sentences.",
        techs: ["React", "Node","Socket.io", "JS","MongoDB", "Express.js", "Tailwind","Vite"],
        img: "/images/fill-the-blanck.png",
        ref: "https://github.com/shakedshoshan/games-dev"
    },
    {
      title: "SipEat App",
      description: "Built as a freelance project for SipEat, a company specializing in vending machines, this web application streamlines interactions with food and beverage services. It allows users to create contacts for requesting machine placements and customize beverage selections for specific machines, enhancing the experience for customers who purchase from them.",
      techs: ["React", "Node", "PostgreSQL", "Supabase", "TailwindCSS", "JavaScript"],
      img: "/images/sipeat.png",
      ref: "https://sipEat.app"
    },
    {
      title: "Algorithm Visuality",
      description: "Algorithm Visuality provides a user-friendly interface for exploring the inner workings of popular search and sort algorithms. Link to the site:  https://algorithm-visuality.onrender.com/",
      techs: ["React","TypeScript", "Tailwind","Vite", "shadcn", "radix-ui"],
      img: "/images/Screenshot-AlgorithmVisualizer 1.png",
      ref: "https://github.com/shakedshoshan/algorithm-visuality"
    },
    {
      title: "Image Generator",
      description: "A image generator that allows you to generate images based on a prompt. Including Authentication an saving images to your account.",
      techs: ["React", "Node", "JS","PostgreSQL", "Express.js", "RapidAPI" , "Tailwind","Vite", "Zustand", "Shadcn"],
      img: "/images/Screenshot-imageGenerator1.png",
      ref: "https://github.com/shakedshoshan/Image-generator"
    },
    {
        title: "Book Store Stock Managment",
        description: "Manage books collection. You can add, delete, update, and view information about your favorite book.",
        techs: ["React", "Node", "JS","MongoDB", "Express.js", "Tailwind","Vite"],
        img: "/images/bookStore.png",
        ref: "https://github.com/shakedshoshan/bookStoreSystem"
    },
    {
        title: "To-do app",
        description: "A to-do app that allows you to add, delete, and update tasks.",
        techs: ["React", "Node", "JS","PostgreSQL", "Express.js", "Tailwind","Vite"],
        img: "/images/todo-screenshoot.png",
        ref: "https://github.com/shakedshoshan/todo-app"
    },
    {
        title: "Currency Converter",
        description: "Professional page for digital marketing.",
        techs: ["React", "JS", "Tailwind","Vite"],
        img: "/images/currency.png",
        ref: "https://github.com/shakedshoshan/currency-converter"
    },
    {
      title: "Portfolio",
        description: "My professional portfolio showcasing my work and skills.",
        techs: ["React", "JS", "Tailwind","Vite"],
        img: "/images/portfoilo.png",
        ref: "https://github.com/shakedshoshan/Portfolio"
    } 

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
