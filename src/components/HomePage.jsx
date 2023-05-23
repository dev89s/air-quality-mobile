import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
    if (listState !== 'loaded') {
      cityList.forEach((city) => {
        dispatch(fetchWeatherByCity(city));
      });
    }
  }, [dispatch, cityList]);

  useEffect(() => {
    if (weatherList.length === cityList.length) {
      dispatch(loaded());
    }
  }, [weatherList]);

  if (listState === 'loading') {
    return (
      <h2>The page is loading</h2>
    );
  }
  if (listState === 'loaded') {
    return (
      <section className="home-page">
        <h2>Home Page</h2>
        <ul>
          {weatherList.map((city) => (
            <li key={city.id}>
              <NavLink to={`/city/${city.name.split(' ').join('-')}`}>
                {city.name}
                :
                {' '}
                {city.temp}
                {' '}
                degrees
              </NavLink>
            </li>
          ))}
        </ul>

      </section>
    );
  }
  if (listState === 'empty') {
    return (
      <h2>the list is empty</h2>
    );
  }
}

export default HomePage;
