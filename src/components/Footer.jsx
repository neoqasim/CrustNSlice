import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-8'>
            <footer className="flex flex-col items-center justify-center bg-white text-black py-6 rounded-lg shadow-md">
                <p className="text-lg font-bold mb-4">Made with <span className="text-orange-600">love</span> by neoQasim</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/neoqasim" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-600 hover:text-orange-600" size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/neoqasim/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-gray-600 hover:text-orange-600" size={32} />
                    </a>
                    <a href="https://twitter.com/neoqasim" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-gray-600 hover:text-orange-600" size={32} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
