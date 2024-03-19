'use client';
import { getAllTours } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import TourCard from './TourCard';

const ToursList = () => {
  const { data, isPending } = useQuery({
    queryKey: ['tours'],
    queryFn: () => getAllTours(),
  });

  if (isPending) {
    return <div className="loading"></div>;
  }

  if (!data) {
    return (
      <div className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <span className="text-lg">No tours available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default ToursList;
