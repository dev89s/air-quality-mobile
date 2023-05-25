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
      <ul className="weather-list">
        {weatherList.map((city, index) => (
          <div key={city.id} className={`bg-wrap bg${index + 1}`}>
            <li className={`weather-container c${index + 1}`} key={city.id}>
              <NavLink className="weather-link" to={`/city/${city.name.split(' ').join('-')}`}>
                <div className="link-header">
                  {city.name}
                  {' '}

                </div>
                <div className="weather-display">
                  <span className="temperature">
                    {city.temp}
                    {' '}
                    °C
                  </span>
                  <img
                    className="weather-icon"
                    src={`https://openweathermap.org/img/wn/${city.weather.icon}@4x.png`}
                    alt="weather-icon"
                  />
                </div>
              </NavLink>
            </li>
          </div>
        ))}
      </ul>

    </section>
  );
}

export default HomePage;
