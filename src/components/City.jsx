import { useLoaderData } from 'react-router-dom';

export function cityName({ params }) {
  const { cityName } = params;
  return { cityName };
}

function City() {
  const { cityName } = useLoaderData();
  return (
    <div className="city-details">
      <h2>{`${cityName.charAt(0).toUpperCase()}${cityName.slice(1)}`}</h2>
    </div>
  );
}

export default City;
