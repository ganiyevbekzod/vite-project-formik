import { createGlobalStyle } from "styled-components";
export const GlobaStyle=createGlobalStyle`
html {
  height: 100%;
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  transition: all 0.3s ease;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  background-color: var(--main-body-color);
  font-family: "Poppins";
}

main {
  flex-grow: 1;
}

img {
  vertical-align: middle;
  object-fit: cover;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.container {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
}
`