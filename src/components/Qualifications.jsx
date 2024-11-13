import React from 'react';

const qualifications = [
    {
        title: "Full Stack Developer - Early-Stage Startup",
        year: 2024,
        description: "Working as a Full Stack Developer in a small team of experienced developers who have previously built startups. Collaborating on an innovative new startup project, gaining hands-on experience with modern web technologies and agile development practices.",
        institute: {
            name: "",
            shortName: "",
            duration: "Nov 2023 - Present",
        }
    },
    {
        title: "Preparation for Job",
        year: 2024,
        description: "Self-study through courses with a certificate and doing independent Projects in order to gain practical experience.",
        institute: {
            name: "•	Docker Foundations - Professional Certificate by Docker,inc \n •	Node.js Essential Training - Certification by LinkedIn \n •	JavaScript Foundations - Professional Certificate by Mozilla \n",
            shortName: "",
            duration: "",
        }
    },
    {
        title: "BSc. in Computer Science",
        year: 2024,
        description: "Achieved four years bechelor degree from a reputed Collage. It was a great really a experience of life. ",
        institute: {
            name: "Afeka Tel-Aviv Academic College of Engineering.",
            shortName: "",
            duration: "Oct 2020- Aug 2024",
        }
    },
    {
        title: "Military Service in 8200, an intelligence unit ",
        year: 2019,
        description: "Achieved three years of significant service. I served as an electronics practical engineer for classified intelligence systems. During the service I gained a lot of knowledge and experience working in a technological environment and teamwork",
        institute: {
            name: "Israel Defense Forces",
            shortName: "IDF",
            duration: "Jun 2016 - Feb 2019"
        }
    },
    {
        title: "Electronics Practical Engineer",
        year: 2016,
        description: "Achieved two years Diploma for Electronics Practical Engineer. Part of a pre-military project of an elite intelligence unit .",
        institute: {
            name: "Mosenzone collage",
            shortName: "",
            duration: "Jun 2014 - Jun 2016"
        }
    },
    {
        title: "High School Matriculation Certificate",
        year: 2014,
        description: "Achieved three years high school matriculation certificate with 5 unit of Math ang English, 7 unit of Electronics.",
        institute: {
            name: "Ort Hof-Hasharon High School",
            shortName: "",
            duration: "Sep 2011 - Jun 2014"
        }
    },
];

const QualificationItem = ({ qualification }) => (
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div className="flex items-center">
            <time className="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">{qualification.year}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {qualification.title}
                {qualification.institute.url && (
                    <a href={qualification.institute.url} target="_blank" rel="noopener noreferrer" className="ml-3">
                        <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                    </a>
                )}
            </h3>
        </div>
        <p className="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">{qualification.description}</p>
        <p className="text-base font-light text-gray-800 dark:text-gray-400">
            <span title={qualification.institute.name}>{qualification.institute.name}</span> &bull; {qualification.institute.duration}
        </p>
    </li>
);

const Qualifications = () => {
    return (
        <div className="mb-16">
            <div className="flex items-center">
                {/* <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Qualifications</h1> */}
            </div>
            <ol id="qualification" className="lg:w-3/4 relative border-l border-gray-200 dark:border-gray-700 mt-6">
                {qualifications.map((qualification, index) => (
                    <QualificationItem key={index} qualification={qualification} />
                ))}
            </ol>
        </div>
    );
};

export default Qualifications;