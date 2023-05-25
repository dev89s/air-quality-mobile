import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchWeatherByCity } from '../redux/temperature/WeatherSlice';
import rightArrow from '../assets/right-arrow-incircle.svg';

const cityList = [
  'Seoul',
  'Sydney',
  'New-York',
  'Amsterdam',
  'London',
  'Istanbul',
  'Singapore',
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
      <h2>The page is loading..</h2>
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
          <div
            key={city.id}
            className={`bg-wrap bg-${city.name.split(' ').join('-').toLowerCase()}`}
          >
            <li
              className={`weather-container w${(index === 0) ? '-header' : (((index - 1) % 4) + 1)}`}
              key={city.id}
            >
              <NavLink className="weather-link" to={`/city/${city.name.split(' ').join('-')}`}>
                <div className="link-header">
                  <div className="link-arrow-container">
                    <span>Air Quality</span>
                    <img src={rightArrow} alt="right arrow" width="24px" />
                  </div>
                </div>
                <div className="weather-details">
                  <div
                    className="city-name"
                    data-testid="city-name"
                  >
                    {city.name}
                  </div>
                  <div className="weather-display">
                    <span className="temperature" data-testid="temperature">
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
