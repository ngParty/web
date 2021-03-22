import css from 'styled-jsx/css'

const colors = {
  foreground: '#000',
  background: '#fff',
  accent: '#75bbd7',
  // accent: '#3fea90',
  // accent: '#79ffe1',
}

const breakpoints = {
  mobile: '600px',
  tablet: '960px',
  desktop: '1200px',
}

const font = {
  sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif`,
  mono: `Menlo, Monaco, Lucida Console, Liberation Mono,
  DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace`,
}

export const globalStyles = css.global`
  :root {
    --font-sans: ${font.sans};
    --font-mono: ${font.mono};

    --ng-foreground: ${colors.foreground};
    --ng-background: ${colors.background};
    --ng-accent: ${colors.accent};
    --ng-selection: var(--ng-accent);

    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999;
    --accents-4: #888;
    --accents-5: #666;
    --accents-6: #444;
    --accents-7: #333;
    --accents-8: #111;

    --ng-success: purple;

    --ng-link-color: var(--ng-success);

    --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
    --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
    --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
    --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);
    --shadow-logo: 0 0 20px 2px rgba(0, 0, 0, 0.68);

    --ng-page-margin: 16pt;
    --ng-page-width: 750pt;
    --ng-page-width-with-margin: 782pt;

    --ng-gap-big: 10rem;
    --ng-gap-big-half: 5rem;

    --ng-gap: 16pt;
    --ng-gap-negative: -16pt;
    --ng-gap-half: 8pt;
    --ng-gap-half-negative: -8pt;
    --ng-gap-quarter: 4pt;
    --ng-gap-quarter-negative: -4pt;
    --ng-gap-double: 32pt;
    --ng-gap-double-negative: -32pt;

    --ng-breakpoint-mobile: 600px;
    --ng-breakpoint-tablet: 960px;
  }

  .dark-theme {
    --ng-foreground: ${colors.background};
    --ng-background: ${colors.foreground};
    --ng-accent: ${colors.accent};
    --ng-selection: var(--ng-accent);

    --accents-8: #fafafa;
    --accents-7: #eaeaea;
    --accents-6: #999;
    --accents-5: #888;
    --accents-4: #666;
    --accents-3: #444;
    --accents-2: #333;
    --accents-1: #111;

    --ng-link-color: var(--geist-foreground);

    --shadow-small: 0 0 0 1px var(--accents-2);
    --shadow-medium: 0 0 0 1px var(--accents-2);
    --shadow-large: 0 0 0 1px var(--accents-2);
    --shadow-sticky: 0 0 0 1px var(--accents-2);
    --shadow-hover: 0 0 0 1px var(--geist-foreground);
    --shadow-logo: 0 0 20px 2px var(--accents-2);
  }

  html,
  body {
    background-color: var(--ng-background);
    color: var(--ng-foreground);
  }

  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    font-family: var(--font-sans);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--ng-selection);
    color: var(--ng-foreground);
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`

export const cssVar = (themeKey: string) => `var(--ng-${themeKey})`

export const theme = {
  colors,
  breakpoints,
} as const
