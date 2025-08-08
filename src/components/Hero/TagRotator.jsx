import React, { useEffect, useState } from 'react';

const allTags = [
  'MERN Stack Developer',
  'UI/UX Enthusiast',
  'Clean Code Advocate',
  'Continuous Learner',
  'Backend Enthusiast',
  'Team Collaborator',
  'An Undergrade',
  'A React Enthusiast'
];

const TagRotator = () => {
  const [indexes, setIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((index, i) => (index + 3 + i) % allTags.length)
      );
    }, 4000); // rotate every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
      {indexes.map((i, idx) => (
        <span
          key={idx}
          className="px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-full text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 cursor-default min-w-[220px] text-center"
        >
          {allTags[i]}
        </span>
      ))}
    </div>
  );
};

export default TagRotator;
