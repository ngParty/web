export const stripTrailingSlash = (value: string) => {
  return value.endsWith('/') ? value.slice(0, -1) : value
}
