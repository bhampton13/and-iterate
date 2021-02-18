import { css } from "styled-components";

export const sizes = {
  mobileSmall: "320",
  mobileModern: "375",
  mobileLandscape: "410",
  mobileLarge: "620",
  tablet: "768",
  tabletLarge: "960",
  desktop: "1200",
  desktopLarge: "1360",
  wideScreen: "1400"
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (literals, ...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(literals, ...args)};
    }
  `;

  return accumulator;
}, {});

const colors = {
  primaryRed: "#FF323C",
  primaryBlue: "#2897FF",
  primaryLightGrey: "#FF323C",
  primaryDarkGrey: "#323232",
  primaryWhite: "#FFFFFF",
  secondaryPink: "#FF6ECF",
  secondaryPurple: "#A050FF",
  secondaryYellow: "#FFC800",
  secondaryOrange: "#FF7900",
  secondaryGreen: "#5AC328"
};

export default {
  colors,
  fonts: {
    hero: "futura-pt, sans-serif;",
    futura: "futura-pt, sans-serif;"
  },
  zIndex: {
    header: 1,
    hamburger: 2,
    logo: 3,
    mobileMenuLink: 4,
    modal: 5
  },
  input: {
    size: "1rem",
    fontWeight: "300",
    font: "Poppins, sans-serif;"
  },
  mobile: {
    h1: {
      color: colors.black,
      size: "1.875rem",
      fontWeight: "600",
      font: "Poppins, sans-serif;"
    },
    h2: {
      color: colors.black,
      size: "1.5rem",
      fontWeight: "500",
      font: "Poppins, sans-serif;"
    },
    h3: {
      color: colors.black,
      size: "1.375rem",
      fontWeight: "600",
      font: "Poppins, sans-serif;"
    },
    h4: {
      color: colors.black,
      size: "1.25rem",
      fontWeight: "400",
      font: "Poppins, sans-serif;"
    },
    button: {
      size: "1rem",
      fontWeight: "500",
      font: "Poppins, sans-serif;"
    },
    body: {
      color: colors.black,
      size: "1.125rem",
      fontWeight: "300",
      font: "Poppins, sans-serif;"
    },
    subtitle: {
      color: colors.black,
      size: "1rem",
      fontWeight: "500",
      font: "Poppins, sans-serif;"
    },
    bigBody: {
      color: colors.body,
      size: "1.375rem",
      fontWeight: "300",
      font: "Poppins, sans-serif;"
    },
    boldBody: {
      color: colors.black,
      size: "1.125rem",
      fontWeight: "600",
      font: "Poppins, sans-serif;"
    },
    bigNumber: {
      color: colors.black,
      size: "2.5rem",
      fontWeight: "600",
      font: "Poppins, sans-serif;"
    },
    modalTitle: {
      color: colors.admin,
      size: "1.25rem",
      fontWeight: "500",
      font: "Poppins, sans-serif;"
    },
    small: {
      color: colors.body,
      size: "0.875rem",
      fontWeight: "300",
      font: "Poppins, sans-serif;"
    },
    smallBold: {
      color: colors.body,
      size: "0.875rem",
      fontWeight: "500",
      font: "Poppins, sans-serif;"
    },
    tiny: {
      color: colors.body,
      size: "0.75rem",
      fontWeight: "300",
      font: "Poppins, sans-serif;"
    }
  },
  h1: {
    color: colors.black,
    size: "3.4375rem",
    fontWeight: "600",
    font: "Poppins, sans-serif;"
  },
  h2: {
    color: colors.black,
    size: "2rem",
    fontWeight: "500",
    font: "Poppins, sans-serif;"
  },
  h3: {
    color: colors.black,
    size: "1.625rem",
    fontWeight: "600",
    font: "Poppins, sans-serif;"
  },
  h4: {
    color: colors.black,
    size: "1.25rem",
    fontWeight: "500",
    font: "Poppins, sans-serif;"
  },
  button: {
    size: "1rem",
    fontWeight: "500",
    font: "Poppins, sans-serif;"
  },
  body: {
    color: colors.black,
    size: "1rem",
    fontWeight: "300",
    font: "Poppins, sans-serif;"
  },
  boldBody: {
    color: colors.black,
    size: "1.125rem",
    fontWeight: "600",
    font: "Poppins, sans-serif;"
  },
  modalTitle: {
    color: colors.admin,
    size: "1.25rem",
    fontWeight: "500",
    font: "Poppins, sans-serif;"
  },
  bigNumber: {
    color: colors.black,
    size: "2.5rem",
    fontWeight: "600",
    font: "Poppins, sans-serif;"
  },
  subtitle: {
    color: colors.black,
    size: "1rem",
    fontWeight: "500",
    font: "Poppins, sans-serif;"
  },
  bigBody: {
    color: colors.body,
    size: "1.375rem",
    fontWeight: "300",
    font: "Poppins, sans-serif;"
  },
  small: {
    color: colors.body,
    size: "0.875rem",
    fontWeight: "300",
    font: "Poppins, sans-serif;"
  },
  smallBold: {
    color: colors.body,
    size: "0.875rem",
    fontWeight: "500",
    font: "Poppins, sans-serif;"
  },
  tiny: {
    color: colors.body,
    size: "0.75rem",
    fontWeight: "300",
    font: "Poppins, sans-serif;"
  }
};