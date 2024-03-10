import React from 'react';
import Stops from './Stops';

const TourInfo = ({ tour }) => {
  const { city, country, title, description, stops, suggestedPlaces } = tour;
  return (
    <div className="max-w-2xl">
      <h2 className="mb-4">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-gray-500 ml-2">
          {city}, {country}
        </span>
      </h2>
      <p>{description}</p>
      <Stops stops={stops} />
      <h3 className="mt-8 mb-4 text-2xl font-semibold">Suggested places</h3>
      <ul>
        {suggestedPlaces.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
};

export default TourInfo;
