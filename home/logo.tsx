import { theme as appTheme } from './theme.styles'
type Props = JSX.IntrinsicElements['svg'] & { theme?: 'light' | 'dark' }
const colors = {
  foreground: '--ng-foreground',
  background: '--ng-background',
  accent: '--ng-accent',
}
const colorVars: typeof colors = Object.entries(colors).reduce(
  (acc, [key, color]) => {
    acc[key as keyof typeof colors] = `var(${color})`

    return acc
  },
  {} as typeof colors
)

function resolveTheme(
  vars: typeof colorVars,
  theme?: 'light' | 'dark'
): typeof colorVars {
  if (!theme) {
    return vars
  }

  if (theme === 'light') {
    return {
      ...vars,
      foreground: appTheme.colors.foreground,
      background: appTheme.colors.background,
    }
  }

  if (theme === 'dark') {
    return {
      ...vars,
      foreground: appTheme.colors.background,
      background: appTheme.colors.foreground,
    }
  }

  throw new Error('No valid theme provided!')
}

export const NgPartyIcon = (props: Props) => {
  const { theme, ...rest } = props

  const useColors = resolveTheme(colorVars, theme)

  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 1294 1293"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>ngParty logo</title>
      <path
        d="m456.245 194.245h287.51v287.51h-287.51z"
        fill={useColors.foreground}
        transform="matrix(-4.49453871468 0 0 4.4945511717 3343.46657599999 -872.38509753)"
      />
      <g fillRule="nonzero">
        <path
          d="m0-41.177.633 4.472c4.05-2.869 9.155-5.316 14.471-5.316 7.636 0 12.024 4.261 12.024 12.193v30.672h-12.108v-26.917c0-3.291-1.477-5.105-4.894-5.105-2.447 0-5.611 1.097-8.397 3.08v28.942h-12.108v-42.021h10.379z"
          fill={useColors.background}
          transform="matrix(4.85883406292 0 0 4.8588384348 489.63118574386 720.55932836545)"
        />
        <path
          d="m0-21.264c0 3.459 1.729 6.75 6.328 6.75s6.329-3.333 6.329-6.75v-1.603c0-3.418-1.73-6.877-6.329-6.877-4.261 0-6.328 2.827-6.328 5.906zm3.544 28.563c-.802 0-1.562 0-2.32-.042-1.688.928-3.544 2.7-3.544 5.105 0 3.459 3.037 4.43 7.214 4.43h4.514c4.219 0 8.312-.338 8.312-4.599 0-3.67-2.658-4.894-5.949-4.894zm23.036-51.05c-1.645 3.839-4.515 7.805-7.088 10.252 3.417 2.7 4.894 6.16 4.894 10.632v1.645c0 8.48-6.75 14.598-18.311 14.598-1.518 0-2.995-.126-4.346-.38-1.138.97-2.067 2.194-2.067 3.291 0 1.392 1.14 2.152 2.869 2.152h10.379c8.607 0 15.442 4.683 15.442 13.88 0 8.945-8.016 13.164-17.889 13.164h-7.172c-9.915 0-15.737-3.882-15.737-10.759 0-4.429 3.417-7.551 6.708-9.323-2.321-1.309-4.05-3.544-4.05-6.287 0-3.418 2.447-6.244 5.147-8.101-4.472-2.362-7.088-6.37-7.088-11.349v-3.375c0-8.143 7.003-13.754 17.804-13.754 2.321 0 4.557.338 6.54.928 1.308-2.574 2.657-7.13 3.29-10.21z"
          fill={useColors.background}
          transform="matrix(4.85883406292 0 0 4.8588384348 716.5050932773 698.42257024043)"
        />
        <path
          d="m0-11.527.106 1.5c1.429-1.051 3.047-1.736 4.524-1.736 1.983 0 3.105 1.122 3.105 3.2v8.799h-1.263v-8.539c0-1.488-.697-2.267-2.126-2.267-1.181 0-2.716.543-4.133 1.606v9.2h-1.264v-11.763z"
          fill={useColors.accent}
          transform="matrix(4.85883406292 0 0 4.8588384348 443.89047857987 809.86482121938)"
        />
        <path
          d="m0-3.023c0-2.208-1.264-3.472-3.165-3.472s-3.165 1.264-3.165 3.472v.862h6.33zm1.264 3.023c0 2.834-1.972 4.606-4.83 4.606-1.713 0-3.248-.425-3.768-.638l.166-1.098c.483.165 1.854.579 3.578.579 2.279 0 3.59-1.359 3.59-3.496v-1.122h-7.582v-1.901c0-2.87 1.961-4.559 4.417-4.559 2.457 0 4.429 1.689 4.429 4.559v3.07z"
          fill={useColors.accent}
          transform="matrix(4.85883406292 0 0 4.8588384348 534.76201681232 789.20641802141)"
        />
        <path
          d="m0-2.149 3.2-4.807h1.418l-3.862 5.622 4.181 6.141h-1.417l-3.52-5.232-3.52 5.232h-1.417l4.169-6.023-3.861-5.74h1.417l3.212 4.807z"
          fill={useColors.accent}
          transform="matrix(4.85883406292 0 0 4.8588384348 571.96445863906 787.65414534801)"
        />
        <path
          d="m0-8.716h2.102l.129-3.283h1.099v3.283h3.318v1.04h-3.306v7.782c0 1.523.804 2.043 1.936 2.043.533 0 1.182-.094 1.63-.189l.142 1.075c-.472.13-1.181.248-1.913.248-1.807 0-3.047-.91-3.047-3.023v-7.936h-2.09v-1.04z"
          fill={useColors.accent}
          transform="matrix(4.85883406292 0 0 4.8588384348 601.84838731952 796.20932103454)"
        />
      </g>
    </svg>
  )
}
