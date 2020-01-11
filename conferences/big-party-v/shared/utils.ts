export const stripTrailingSlash = (value: string) => {
  return value.endsWith('/') ? value.slice(0, -1) : value
}

export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}
