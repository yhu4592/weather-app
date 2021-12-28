const toCelcius = (temperature) => {
  return (temperature - 32)*5/9
}

const toKmPerSecond = (speed) => {
  return speed*2.237
}

const toMetric = {toCelcius, toKmPerSecond}

export default toMetric
