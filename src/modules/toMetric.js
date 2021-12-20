const toCelcius = (temperature) => {
  return (temperature - 32)*5/9
}

const toMetersPerSecond = (speed) => {
  return speed*2.237
}

const metric = {toCelcius, toMetersPerSecond}

export default metric
