import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherByCity, loaded } from '../redux/temperature/WeatherSlice';
import { cityName } from './City';

function HomePage() {
  const cityList = useMemo(() => {
    const cityList = [
      'Seoul',
      'Sydny',
      'New-York',
      'Amsterdam',
      'London',
    ];
    return cityList;
  }, [cityName]);

  const {
    weatherList, listState,
  } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    cityList.forEach((city) => {
      dispatch(fetchWeatherByCity(city));
    });
    dispatch(loaded());
  }, [dispatch, cityList]);

  if (listState === 'loading') {
    return (
      <h2>The page is loading</h2>
    );
  }
  return (
    <section className="home-page">
      <h2>Home Page</h2>
      <ul>
        {weatherList.map((city) => (
          <li key={city.id}>
            {city.name}
            :
            {' '}
            {city.temp}
            {' '}
            degrees
          </li>
        ))}
      </ul>

    </section>
  );
}

export default HomePage;
