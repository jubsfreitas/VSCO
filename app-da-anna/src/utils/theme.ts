export interface ThemeParams {
    light: Partial<Theme>;
    // dark: Partial<Theme>;
}

export enum ThemeType {
    LIGHT = "light",
    DARK = "dark",
}

export const colors = {
    white: "#fff",
    black: "#000",

    ice: "#F5F7F9",
    grey: "#b0b0b0",
    gray: "#4B5259",
    cian: "#333333",
    dark: "#232323",
    background: "#fff",
    primary: "#1238F1",
    secondary: "#aad63b",
};

export type Colors = typeof colors;

export const light = {
    background: colors.white,
    paper: colors.gray,
    primary: colors.primary,
    secondary: colors.secondary,
    footer: colors.ice,
    // danger: colors.ruddy,
    // warning: colors.yellow,
    // light: colors.lightGray,
    // info: colors.blueberry,
    // success: colors.harlequin,
    textPrimary: colors.black,
    placeholder: colors.gray,
    // textValidation: colors.ruddy,
    nav: colors.dark,
    accent: "#B446BF",
    link: "#393D7A",
    heading: "#393D7A",
    titleText: colors.black,
    subText: colors.gray,
    text: colors.black,
    textContrast: colors.ice,
    // disabled: colors.mediumGray,
    border: colors.ice,
    shadow: colors.grey,
    // positive: colors.success,
    // negative: colors.negative,
};

export type Theme = typeof light;

// export const dark: Theme = {
//     background: colors.dark,
//     paper: colors.cian,
//     primary: "#8A96DC",
//     secondary: colors.secondary,
//     footer: colors.ice,
//     // danger: colors.ruddy,
//     // warning: colors.yellow,
//     // light: colors.charcoalGray,
//     // info: colors.blueberry,
//     // success: colors.harlequin,
//     textPrimary: colors.white,
//     placeholder: colors.gray,
//     // textDisabled: colors.cloud,
//     // textValidation: colors.ruddy,
//     accent: "#8A96DC",
//     link: "#E0E0E0",
//     heading: "#FFFFFF",
//     titleText: "#8A96DC",
//     subText: "#D3D8E8",
//     text: colors.white,
//     textContrast: "#000000",
//     // disabled: colors.mediumGray,
//     border: "#EDEDED",
//     shadow: colors.cian,
//     // positive: colors.success,
//     // negative: colors.negative,
// };

export const theme = {
    light,
    // dark,
    breakpointes: {
        mobile: '400px',
        tablet: '768px',
        desktop: '1024px',
    },
};