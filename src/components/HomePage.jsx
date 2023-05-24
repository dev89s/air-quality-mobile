import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchWeatherByCity } from '../redux/temperature/WeatherSlice';

const cityList = [
  'Seoul',
  'Sydney',
  'New-York',
  'Amsterdam',
  'London',
];

function HomePage() {
  const {
    weatherList, listState, error,
  } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    if (listState === 'empty') {
      cityList.forEach((city) => {
        dispatch(fetchWeatherByCity(city));
      });
    }
  }, [dispatch, listState]);

  if (listState === 'loading') {
    return (
      <h2>The page is loading</h2>
    );
  }

  if (error) {
    return (
      <h2>
        There is an error:
        {' '}
        {error}
      </h2>
    );
  }

  return (
    <section className="home-page">
      <h2>Home Page</h2>
      <ul className="weather-list">
        {weatherList.map((city) => (
          <li key={city.id}>
            <NavLink className="weather-link" to={`/city/${city.name.split(' ').join('-')}`}>
              {city.name}
              :
              {' '}
              {city.temp}
              {' '}
              degrees
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${city.weather.icon}.png`}
                alt="weather-icon"
              />
            </NavLink>
          </li>
        ))}
      </ul>

    </section>
  );
}

export default HomePage;
