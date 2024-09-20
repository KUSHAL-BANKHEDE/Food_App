import React, { useState, useEffect } from 'react';
import { GITHUB_USER_API } from '../Utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AboutSkeleton from '../Components/shimmers/AboutSkeleton';

const REPOSITORIES = [
  {
    name: 'Food_App-swiggy',
    url: 'https://github.com/KUSHAL-BANKHEDE/swiggy.git',
    description: 'Frontend repository for the Food App. It includes the user interface and design elements for the application.',
  },
  {
    name: 'Food_App-Backend',
    url: 'https://github.com/KUSHAL-BANKHEDE/swiggy.git',
    description: 'Backend repository for the Food App. It handles the server-side logic, mocks the backend for Swiggy\'s public API to bypass CORS policy, and provides the necessary API endpoints.',
  },
];

const About = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'defaultName',
    location: 'defaultLocation',
    avatar_url: '',
    html_url: '',
  });
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GITHUB_USER_API);
        const data = await response.json();
        setUserInfo(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <AboutSkeleton />; 
  }

  const { name, location, avatar_url, html_url } = userInfo;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center flex-wrap">
      <div className="max-w-6xl w-full flex my-10 flex-wrap gap-6 justify-center">
        {/* User Info Card */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex flex-col items-center">
            <img
              src={avatar_url}
              alt="GitHub profile"
              className="w-32 h-32 rounded-full border-4 border-blue-400 mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
            <h3 className="text-lg mb-4 text-blue-600 underline">kushalbankhede1@gmail.com</h3>
            <h4 className="text-md text-gray-600 mb-4">Contact: +91 8878904546</h4>
            <p className="text-lg text-gray-600 mb-6">
              Hi there! I'm a passionate software developer with a focus on creating innovative and efficient applications. Please check out my GitHub repositories to explore some of my recent projects. Your feedback and collaboration are always welcome!
            </p>
          </div>
        </div>

        {/* Repositories Card */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Projects</h2>
            <p className="text-gray-600 mb-6 text-center">
              Please check out the following repositories to understand the frontend and backend of the Food App. Each repository contains detailed information about the features and implementation.
            </p>
            {REPOSITORIES.map((repo) => (
              <div key={repo.name} className="mb-6 text-center flex flex-col items-center">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 mb-2"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span className="ml-2 text-xl font-semibold">{repo.name}</span>
                </a>
                <p className="text-gray-600 text-center">{repo.description}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
