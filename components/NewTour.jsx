'use client';
import { generateTourResponse } from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import TourInfo from './TourInfo';

const NewTour = () => {
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await generateTourResponse(destination);
      if (newTour) {
        return newTour;
      }
      toast.error('No matching city or country found. Please try again.');
      return null;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form data using FormData constructor
    const formData = new FormData(e.target);
    // Convert FormData entries to an array of key-value pairs
    const destination = Object.fromEntries(formData);

    mutate(destination);
  };

  if (isPending) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join w-full gap-4">
          <input
            type="text"
            placeholder="City"
            name="city"
            required
            className="input input-bordered join-item w-full"
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            required
            className="input input-bordered join-item w-full"
          />
          <button className="btn btn-primary join-item" type="submit">
            Generate tour
          </button>
        </div>
        <div className="mt-16">{tour && <TourInfo tour={tour} />}</div>
      </form>
    </>
  );
};

export default NewTour;
