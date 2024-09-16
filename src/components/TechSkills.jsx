import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define the techSkills array
const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: <i className="fa-brands fa-square-js text-yellow-500 pr-2"></i>, name: "JavaScript"},
            { icon: <i className="fa-brands fa-html5 fa-lg text-green-600 pr-2"></i>, name: "HTML"},
            { icon: <i className="fa-brands fa-css3-alt fa-lg text-blue-600 pr-2"></i>, name: "CSS3"},
            { icon: <i className="fa-brands fa-python fa-sm text-blue-950 pr-2"></i>, name: "Python"},
            { icon: <i className="fa fa-code fa-2xs text-black pr-2"></i>, name: "C" }
        ]
    },
    {
        title: "Front-end",
        skills: [
            { icon: <i className="fa-brands fa-react text-blue-500 pr-2"></i>, name: "React" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/typescript.png" alt="TypeScript"/>, name: "TypeScript" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/tailwind.png" alt="tailwind"/>, name: "Tailwind" },
            { icon: <i className="fa fa-th-list text-slate-900 pr-2"></i>, name: "shadcn"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/nextjs.png" alt="Next.js"/>, name: "Next.js"}
        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: <i className="fa-brands fa-node fa-sm text-green-600 pr-2"></i>, name: "Node.js"},
            { icon: <i className="fa-brands fa-node-js text-green-600 pr-2"></i>, name: "Express.js" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/Socket.io.png" alt="Socket.io"/>, name: "Socket.io"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/jwt.png" alt="jwt"/>, name: "JWT"},
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: <img className="w-4 h-4 mr-1" src="icons/mongo.png" alt="MongoDB"/>, name: "MongoDB"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/mysql.png" alt="MySql"/>, name: "MySql"},
            { icon: <i className="fa-solid fa-server fa-xs text-green-700"></i>, name: "Mongoose" }
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: <i className="fa-brands fa-github pr-2"></i>, name: "GitHub"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/vscode.png" alt="VSCode"/>, name: "VSCode" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/postman.png" alt="postman"/>, name: "Postman" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/kaggle.png" alt="Kaggle"/>, name: "Kaggle" },
            { icon: <i className="fa-brands fa-git text-yellow-500 pr-2"></i>, name:"git"},
        ]
    },
    {
        title: "Differents tech",
        skills: [
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Docker" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Linux" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Unity" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "C#" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Java" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Assembly" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Google collab" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Eclips"}
        ]
    }
];

// Functional Component
const TechSkills = () => {
    return (
        <div id="tech-skills" className='grid grid-cols-2'>
            {techSkills.map((tech, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">{tech.title}</h2>
                    {tech.skills.map((skill, idx) => (
                        <p key={idx} className="flex flex-row items-center text-md text-gray-700 dark:text-gray-200 mb-1">
                            {skill.icon} {skill.name}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TechSkills;
