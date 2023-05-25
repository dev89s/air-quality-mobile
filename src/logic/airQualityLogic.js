/* eslint-disable */
export function airQualityMeasure(index) {
  switch (index) {
    case 1:
      return 'Good';
    case 2:
      return 'Fair';
    case 3:
      return 'Moderate';
    case 4:
      return 'Poor';
    case 5:
      return 'Very Poor';
    default:
      return '';
  }
}

export function coQualityMeasure(measure) {
  if (measure >= 0 && measure < 4400)
    return 'Good';
  if (measure >= 4400 && measure < 9400)
    return 'Fair';
  if (measure >= 9400 && measure < 12400)
    return 'Moderate';
  if (measure >= 12400 && measure < 15400)
    return 'Poor';
  if (measure >= 15400)
    return 'Very Poor';
  return '';
}
export function no2QualityMeasure(measure) {
  if (measure >= 0 && measure < 40)
    return 'Good';
  if (measure >= 40 && measure < 70)
    return 'Fair';
  if (measure >= 70 && measure < 150)
    return 'Moderate';
  if (measure >= 150 && measure < 200)
    return 'Poor';
  if (measure >= 200)
    return 'Very Poor';
  return '';
}
export function o3QualityMeasure(measure) {
  if (measure >= 0 && measure < 60)
    return 'Good';
  if (measure >= 60 && measure < 100)
    return 'Fair';
  if (measure >= 100 && measure < 140)
    return 'Moderate';
  if (measure >= 140 && measure < 180)
    return 'Poor';
  if (measure >= 180)
    return 'Very Poor';
  return '';
}
export function pm2_5QualityMeasure(measure) {
  if (measure >= 0 && measure < 10)
    return 'Good';
  if (measure >= 10 && measure < 25)
    return 'Fair';
  if (measure >= 25 && measure < 50)
    return 'Moderate';
  if (measure >= 50 && measure < 75)
    return 'Poor';
  if (measure >= 75)
    return 'Very Poor';
  return '';
}
export function pm10QualityMeasure(measure) {
  if (measure >= 0 && measure < 20)
    return 'Good';
  if (measure >= 20 && measure < 50)
    return 'Fair';
  if (measure >= 50 && measure < 100)
    return 'Moderate';
  if (measure >= 100 && measure < 200)
    return 'Poor';
  if (measure >= 200)
    return 'Very Poor';
  return '';
}
export function so2QualityMeasure(measure) {
  if (measure >= 0 && measure < 20)
    return 'Good';
  if (measure >= 20 && measure < 80)
    return 'Fair';
  if (measure >= 80 && measure < 250)
    return 'Moderate';
  if (measure >= 250 && measure < 350)
    return 'Poor';
  if (measure >= 350)
    return 'Very Poor';
  return '';
}

