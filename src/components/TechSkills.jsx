import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define the techSkills array
const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: <i className="fa-brands fa-square-js text-yellow-500 pr-2"></i>, name: "JavaScript"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/typescript.png" alt="TypeScript"/>, name: "TypeScript"},
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
            { icon: <img className="w-4 h-4 mr-1" src="icons/nextjs.png" alt="Next.js"/>, name: "Next.js"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/chakraui.png" alt="Chakra UI"/>, name: "Chakra UI"}

        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: <i className="fa-brands fa-node fa-sm text-green-600 pr-2"></i>, name: "Node.js"},
            { icon: <i className="fa-brands fa-node-js text-green-600 pr-2"></i>, name: "Express.js" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/Nest.js.png" alt="Nest.js"/>, name: "NestJS"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/pulumi.png" alt="Pulumi"/>, name: "Pulumi"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/Socket.io.png" alt="Socket.io"/>, name: "Socket.io"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/jwt.png" alt="jwt"/>, name: "JWT"},
            { icon: <i className="fa fa-robot text-purple-600 pr-2"></i>, name: "OpenAI"},
            { icon: <i className="fa fa-brain text-orange-500 pr-2"></i>, name: "LangChain"},
        ]
    },
    {
        title: "Database & Caching",
        skills: [
            { icon: <img className="w-4 h-4 mr-1" src="icons/mongo.png" alt="MongoDB"/>, name: "MongoDB"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/postgresql.png" alt="PostgreSql"/>, name: "PostgreSql"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/mysql.png" alt="MySql"/>, name: "MySql"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/supabase.png" alt="Supabase"/>, name: "Supabase"},
            { icon: <i className="fa fa-database text-red-600 pr-2"></i>, name: "Redis"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/Firebase.png" alt="Firebase"/>, name: "Firebase"},
        ]
    },
    {
        title: "DevOps & Cloud Services",
        skills: [
            { icon: <i className="fa-brands fa-aws text-yellow-500 pr-2"></i>, name: "AWS"},
            { icon: <i className="fa-brands fa-google text-red-500 pr-2"></i>, name: "GCP"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/vercel.png" alt="Vercel"/>, name: "Vercel"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/docker.png" alt="Docker"/>, name: "Docker" },
            { icon: <img className="w-4 h-4 mr-1" src="https://devicons.railway.com/i/railway-dark.svg" alt="Railway"/>, name: "Railway" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/Terraform.png" alt="Terraform"/>, name: "Terraform" },
            
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: <i className="fa-brands fa-github pr-2"></i>, name: "GitHub"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/cursor.png" alt="Cursor"/>, name: "Cursor" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/vscode.png" alt="VSCode"/>, name: "VSCode" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/postman.png" alt="postman"/>, name: "Postman" },
            { icon: <img className="w-4 h-4 mr-1" src="icons/kaggle.png" alt="Kaggle"/>, name: "Kaggle" },
            { icon: <i className="fa-brands fa-git text-yellow-500 pr-2"></i>, name:"git"},
            { icon: <img className="w-4 h-4 mr-1" src="icons/lemonsqueezy.jpeg" alt="Lemon Squeezy"/>, name: "Lemon Squeezy"}
        ]
    },
    {
        title: "Differents tech",
        skills: [
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Linux" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Unity" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "C#" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Java" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Assembly" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Google collab" },
            { icon: <i className="fa fa-code fa-2xs text-blue-900 pr-2"></i>, name: "Eclips"},
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
