// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
 

  return (
    <div className="flex flex-col items-center  p-6 bg-gray-100">
        <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <div className="p-4 border rounded-lg shadow-sm w-full sm:w-1/2">
              <p className="text-sm text-gray-500 font-semibold mb-1">🌟 Expert</p>
              <h4 className="text-lg font-medium">Web Design</h4>
              <p className="text-sm text-gray-500">Logos that reflect your core values.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm w-full sm:w-1/2">
              <p className="text-sm text-gray-500 font-semibold mb-1">🌟 Expert</p>
              <h4 className="text-lg font-medium">UI/UX Design</h4>
              <p className="text-sm text-gray-500">We integrate research and design thinking.</p>
            </div>
          </div>

          {/* Experience Snapshot */}
          <div className="mt-10 flex justify-around text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">11+</p>
              <p className="text-sm text-gray-500">Project Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">9+</p>
              <p className="text-sm text-gray-500">Certificates Earned</p>
            </div>
          </div>
    </div>
  );
};

export default Experience;
