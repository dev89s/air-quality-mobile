/* eslint-disable */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { fetchPolutionByCity } from '../redux/polution/PolutionSlice';
import {
  airQualityMeasure,
  coQualityMeasure,
  no2QualityMeasure,
  o3QualityMeasure,
  pm2_5QualityMeasure,
  pm10QualityMeasure,
  so2QualityMeasure,
} from '../logic/airQualityLogic';

export function cityName({ params }) {
  const { cityName } = params;
  return { cityName };
}

function City() {

  const [airQualityIndex, setAirQualityIndex] = useState();
  const [co, setCo] = useState();
  const [coQuality, setCoQuality] = useState();
  const [no2, setNo2] = useState();
  const [no2Quality, setNo2Quality] = useState();
  const [o3, setO3] = useState();
  const [o3Quality, setO3Quality] = useState();
  const [pm2_5, setPm2_5] = useState();
  const [pm2_5Quality, setPm2_5Quality] = useState();
  const [pm10, setPm10] = useState();
  const [pm10Quality, setPm10Quality] = useState();
  const [so2, setSo2] = useState();
  const [so2Quality, setSo2Quality] = useState();

  const {
    airQuality, dataState, error,
  } = useSelector((state) => state.polution);

  useEffect(() => {
    if (dataState === 'loaded') {
      const airQualityIndex = airQualityMeasure(airQuality.aqi);
      setAirQualityIndex(airQualityIndex);
      const { co, no2, o3, pm2_5, pm10, so2 } = airQuality.components;
      setCo(co);
      setCoQuality(coQualityMeasure(co));
      setNo2(no2);
      setNo2Quality(no2QualityMeasure(no2));
      setO3(o3);
      setO3Quality(o3QualityMeasure(o3));
      setPm2_5(pm2_5);
      setPm2_5Quality(pm2_5QualityMeasure(pm2_5));
      setPm10(pm10);
      setPm10Quality(pm10QualityMeasure(pm10));
      setSo2(so2);
      setSo2Quality(so2QualityMeasure(so2));
    }
  }, [dataState])

  const { cityName } = useLoaderData();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPolutionByCity(cityName.split('-').join(' ')));
  }, [dispatch]);

  if (dataState === 'loading') {
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
  const city = cityName.split('-').join(' ');
  return (
    <div className="city-details">
      <div className={`bg-wrap-details bg-${city.toLowerCase().split(' ').join('-')}`}>
        <div className="air-quality-header">
          <div className="air-quality-header-left">
            <h2 className="city-page-city-name">{city}</h2>
            <h3>
              General Air Quality Index:
            </h3>
            <h3 className="air-quality-index">
              {airQuality.aqi} ({airQualityIndex})
            </h3>
          </div>
        </div>
      </div>
      <ul className="air-quality-list">
        <span className="air-quality-list-header">Concentration of diffrent particles in air:</span>
        <li className="dark">
          <span>CO (Carbon monixide)</span>
          <span>{co} µg/m<sup>3</sup> ({coQuality})</span>
        </li>
        <li className="light">
          <span>NO<sub>2</sub> (Nitrogen monoxide)</span>
          <span>{no2} µg/m<sup>3</sup> ({no2Quality})</span>
        </li>
        <li className="dark">
          <span>O<sub>3</sub> (Ozone)</span>
          <span>{o3} µg/m<sup>3</sup> ({o3Quality})</span>
        </li>
        <li className="light">
          <span>PM<sub>2.5</sub> (Fine particles matter)</span>
          <span>{pm2_5} µg/m<sup>3</sup> ({pm2_5Quality})</span>
        </li>
        <li className="dark">
          <span>PM<sub>10</sub> (Coarse particles matter)</span>
          <span>{pm10} µg/m<sup>3</sup> ({pm10Quality})</span>
        </li>
        <li className="light">
          <span>SO<sub>2</sub> (Sulphur dioxide)</span>
          <span>{so2} µg/m<sup>3</sup> ({so2Quality})</span>
        </li>
      </ul>
    </div>
  );
}

export default City;
