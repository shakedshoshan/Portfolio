import React from 'react';
import CopyButton from './CopyButton';
import Qualifications from './Qualifications';
import HeaderTags from './HeaderTags';
import TechSkills from './TechSkills';
import RecentWorks from './RecentWorks';

const Portfolio = () => {
  return (
    <div className="w-full lg:w-2/3 mx-auto dark:bg-gray-900 relative">
      <header>
        {/* Navbar */}
        <nav className="px-2 sm:px-4 py-3 border-b lg:border-none border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 w-full lg:w-2/3 fixed top-0 z-20">
          <div className="container flex flex-row-reverse lg:flex-row flex-wrap items-center justify-between mx-auto">
            <a href="#" className="pr-2" title="Shaked Shoshan">
              <i className="fa-solid fa-code fa-md text-blue-600 dark:text-gray-300"></i>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar">
              <ul className="flex flex-col items-start lg:items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li><a href="#"
                  className="block py-2 pl-3 pr-4 text-blue-700 hover:bg-gray-100 md:hover:bg-transparent lg:hover:bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:hover:bg-transparent dark:hover:bg-gray-700"
                  aria-current="page">Home</a>
                </li>
                <li><a href="https://docs.google.com/document/d/1jbRCuC6xfqX2YdIar_Boun2DGWs1IEvh/pub"
                  target="_blank" rel="noopener noreferrer"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
                </li>
                 <li>
                 <CopyButton textToCopy="shakedshoshan8@gmail.com"/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <main className="px-4 lg:px-8 pt-16">
        <section className="py-6 lg:py-14">
          <div className="container flex flex-col lg:flex-row items-start justify-start">
            {/* Main content left */}
            <div className="lg:pr-8 w-2/6 lg:w-full pb-4 lg:pb-">
              <img className="w-full rounded-full p-1 ring-2 ring-blue-400 dark:ring-gray-500 shadow-lg"
                src="./icons/profile.jpg" alt="profile pictue" />
            </div>

            {/* Main content right */}
            <div>
              {/* Header area */}
              <div className="header mb-16">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Shaked Shoshan</h1>
                <p className="text-sm text-gray-700 dark:text-gray-500">A highly motivated and a self-learner </p>
                <h2 className="text-md font-normal text-gray-800 dark:text-gray-400 mt-2">Software Developer.</h2>

                
                <div className="flex mt-6">
                <a href="https://www.linkedin.com/in/shaked-shoshan-0a9471256/" target="_blank" rel="noop"
                    className="flex hover:bg-slate-100 rounded-full p-2 px-2 items-center mr-2 font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    <img className="w-5 h-5" src="icons/linkedin.png" alt="GitHub" />
                    <span></span>
                  </a>

                  <a href="https://github.com/shakedshoshan" target="_blank" rel="noopener noreferrer"
                    className="flex hover:bg-slate-100 rounded-full p-2 px-2 items-center mr-2 font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    <img className="w-5 h-5" src="icons/github.png" alt="GitHub" />
                    <span></span>
                  </a>
                  
                  <a href="https://www.kaggle.com/shakedshoshan" target="_blank" rel="noopener"
                    className="flex hover:bg-slate-100 rounded-full p-2 px-2 items-center mr-2 font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    <img className="w-5 h-5" src="icons/kaggle.png" alt="GitHub" />
                    <span></span>
                  </a>
                </div>

                <div id="header-tags" className="my-4">
                  <HeaderTags />
                </div>
              </div>

              {/* Career Objective */}
              <div className="objective mb-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Objective</h1>
                </div>
                <p className="text-gray-800 dark:text-gray-400 text-justify mt-3">
                A highly motivated and a self-learner Computer Science graduated and Practical Engineer for Computers and Electronics with a strong military background in the 8200 unit. My experience includes training and teaching new soldiers, management of complicated classified intelligence systems at the level of development and maintenance, individual and group work on software development projects as part of my studies. Willing to enter to an interesting company in a challenging position that will enable to empower my skills set and take me one step further to becoming a professional developer.
                </p>
              </div>
              <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-800" />

              {/* Qualifications */}
              <div className="mb-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Qualifications</h1>
                </div>
                <Qualifications />
                
              </div>
              <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-800" />

              {/* My Skill */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Tech Skills</h1>
                </div>
                <div id="tech-skills">
                  <TechSkills />
                </div>
              </div>
              <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-800" />

              {/* Recent works */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Recent works</h1>
                </div>
                <div id="recent-works" >
                  <RecentWorks />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer area */}
      <footer className="border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"
          className="hover:underline">Shaked Shoshan</a>
        </span>
        <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline">Back to top <i className="fa-solid fa-arrow-turn-up"></i></a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Portfolio;