import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactSkeleton from '../Components/shimmers/ContactSkeleton';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      setTimeout(()=>{setIsLoading(false)}, 2000);
    }, []);

    if (isLoading) {
      return <ContactSkeleton />; 
    }

    const html_url = 'https://github.com/KUSHAL-BAKHEDED'
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center flex-wrap">
      <div className="max-w-6xl w-full flex items-center my-20 flex-wrap gap-6 justify-center">

        {/* Links Card */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex flex-col items-center mb-6">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <FontAwesomeIcon className='text-gray-800' icon={faGithub} size="2x" />
              <span className="ml-2 text-gray-800 text-xl font-semibold">GitHub Profile</span>
            </a>
            <p className="text-gray-600 mb-6 text-center">
              Explore my GitHub profile to see all of my repositories and contributions. This is where I showcase my coding projects, including open-source contributions and personal projects.
            </p>
            <a
              href="https://www.linkedin.com/in/kushal-bankhede/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <span className="ml-2 text-xl font-semibold">LinkedIn Profile</span>
            </a>
            <p className="text-gray-600 mb-6 text-center">
              Connect with me on LinkedIn to view my professional background, endorsements, and network with other professionals. I share updates about my career, achievements, and industry insights.
            </p>
          </div>
        </div>

        
      </div>
    </div>
    )
  }

export default Contact;



