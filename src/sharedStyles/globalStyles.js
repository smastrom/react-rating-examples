import { createGlobalStyles } from 'goober/global';

export const GlobalStyles = createGlobalStyles`

    :root {
      --background-color: #F3F4F6;
      --border-color: #EEEFF2;
      --blue-primary-color: #2563EB;
      --transparent-color: rgba(0, 0, 0, 0);
    }

    a {
      font-weight: 400;
    }


    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }

    html {
      background-color: var(--background-color);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      font-weight: 400;
      -moz-tab-size: 4;
      tab-size: 4;
      font-family: "Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    }

    body {
      margin: 0;
      line-height: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp,
    pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      font-weight: inherit; /* 1 */
      line-height: inherit; /* 1 */
      color: inherit; /* 1 */
      margin: 0; /* 2 */
      padding: 0; /* 3 */
    }

    button,
    select {
      text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button; /* 1 */
      background-color: transparent; /* 2 */
      background-image: none; /* 2 */
    }

    :-moz-focusring {
      outline: auto;
    }

    :-moz-ui-invalid {
      box-shadow: none;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    ol,
    ul,
    menu {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    textarea {
      resize: vertical;
    }

    input::placeholder,
    textarea::placeholder {
      opacity: 1; /* 1 */
      color: #9ca3af; /* 2 */
    }

    button,
    [role="button"] {
      cursor: pointer;
    }

    :disabled {
      cursor: default;
    }

    [hidden] {
      display: none;
    }

`;
