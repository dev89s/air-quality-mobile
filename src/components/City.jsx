import { useLoaderData } from 'react-router-dom';

export function cityName({ params }) {
  const { cityName } = params;
  return { cityName };
}

function City() {
  const { cityName } = useLoaderData();
  const city = cityName.split('-').join(' ');
  return (
    <div className="city-details">
      <h2>{`${city.charAt(0).toUpperCase()}${city.slice(1)}`}</h2>
    </div>
  );
}

export default City;
