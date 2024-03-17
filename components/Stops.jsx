import React from 'react';

const Stops = ({ stops }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-8 mb-4 text-2xl font-semibold">Stops</h3>
      {stops.map((stop, index) => (
        <div key={index} className="relative w-full">
          {index > 0 && <div className="timeline-connector"></div>}
          <div className="flex items-center mb-6 w-full">
            <div className="mr-4 text-2xl">📍</div>
            <div className="bg-base-200 p-4 rounded-lg w-full">
              <h3 className="text-lg font-semibold mb-2">{stop.name}</h3>
              <p className="text-base-700 mb-2">{stop.description}</p>
              <p className="text-base-500">Location: {stop.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stops;
