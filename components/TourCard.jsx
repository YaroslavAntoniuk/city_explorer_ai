import Link from 'next/link';

const TourCard = ({ tour }) => {
  const { id, city, country, title } = tour;

  return (
    <Link
      href={`/tours/${id}`}
      className="card card-compact min-h-28 max-w-60 rounded-xl bg-base-200 hover:bg-base-200/50"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center">{title}</h2>
        <span>
          {city}, {country}
        </span>
      </div>
    </Link>
  );
};

export default TourCard;
