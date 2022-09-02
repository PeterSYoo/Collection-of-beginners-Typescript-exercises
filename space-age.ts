export function age(planet: string, seconds: number) {
  const oneEarthYear: number = 31557600;

  switch (planet) {
    case 'earth':
      const earthYears = seconds / oneEarthYear;
      return Number(earthYears.toFixed(2));
    case 'mercury':
      const mercuryYears = seconds / (oneEarthYear * 0.2408467);
      return Number(mercuryYears.toFixed(2));
    case 'venus':
      const venusYears = seconds / (oneEarthYear * 0.61519726);
      return Number(venusYears.toFixed(2));
    case 'mars':
      const marsYears = seconds / (oneEarthYear * 1.8808158);
      return Number(marsYears.toFixed(2));
    case 'jupiter':
      const jupiterYears = seconds / (oneEarthYear * 11.862615);
      return Number(jupiterYears.toFixed(2));
    case 'saturn':
      const saturnYears = seconds / (oneEarthYear * 29.447498);
      return Number(saturnYears.toFixed(2));
    case 'uranus':
      const uranusYears = seconds / (oneEarthYear * 84.016846);
      return Number(uranusYears.toFixed(2));
    case 'neptune':
      const neptuneYears = seconds / (oneEarthYear * 164.79132);
      return Number(neptuneYears.toFixed(2));
    default:
      break;
  }
}
