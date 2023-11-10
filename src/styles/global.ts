import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
    --background: #000000;
    --bg-header: #058ED9;
    --bg-header-light: #aadbf5;
    --bg-menu: #FFBC0A;
    --bg-menu-hover: #e28800;
    --bg-footer: #058ED9;
    --bg-blockContent: #ffffff;
    --text-default: #000000;
    --text-link: #6e6e6e;
    }

    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
    body {
    color: rgb(var(--background));
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
`
