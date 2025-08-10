import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/touhid404", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/touhidul-dev5", label: "LinkedIn" },
    { icon: <FaFacebook />, url: "https://facebook.com/touhidul.dev5", label: "Facebook" },
    // { icon: <FaInstagram />, url: "https://instagram.com/yourusername", label: "Instagram" },
  ];

  return (
    <div className="flex flex-wrap gap-4 my-4">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-white text-2xl p-3 rounded-full bg-gray-900/80 border border-gray-700 
                     hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
