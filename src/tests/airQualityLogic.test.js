/* eslint-disable */
import {
  airQualityMeasure,
  no2QualityMeasure,
  coQualityMeasure,
  o3QualityMeasure,
  pm10QualityMeasure,
  pm2_5QualityMeasure,
  so2QualityMeasure,
} from '../logic/airQualityLogic';

describe('test airQualityMeasure functions', () => {
  it('test airQualityeMeasure function', () => {
    const index = 1;
    expect(airQualityMeasure(index)).toBe('Good');
  });
  it('test no2QualityMeasure function', () => {
    const index = 20;
    expect(no2QualityMeasure(index)).toBe('Good');
  });
  it('test coQualityMeasure function', () => {
    const index = 500;
    expect(coQualityMeasure(index)).toBe('Good');
  });
  it('test o3QualityMeasure function', () => {
    const index = 50;
    expect(o3QualityMeasure(index)).toBe('Good');
  });
  it('test pm10QualityMeasure function', () => {
    const index = 15;
    expect(pm10QualityMeasure(index)).toBe('Good');
  });
  it('test pm2_5QualityMeasure function', () => {
    const index = 7;
    expect(pm2_5QualityMeasure(index)).toBe('Good');
  });
  it('test so2QualityMeasure function', () => {
    const index = 10;
    expect(so2QualityMeasure(index)).toBe('Good');
  });
});
