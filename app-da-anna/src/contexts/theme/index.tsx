import { Colors, ThemeParams, ThemeType, colors, light } from "../../utils/theme";
import { DefaultTheme, ThemeProvider as OriginalThemeProvider, withTheme } from "styled-components";
import React, { useState } from "react";
// import remoteConfig from "@react-native-firebase/remote-config";

// import { Appearance, Dimensions } from "react-native";
import createContext from "../../utils/createContex";
// import { useMediaQuery } from "react-responsive";
// import { sizes } from "../../utils/sizes";

interface Context {
    themeType: ThemeType;
    // media: {
    //     isDesktop: boolean;
    //     isTablet: boolean;
    //     isMobile: boolean;
    // };
    theme: DefaultTheme;
    changeThemeType: () => void;
    colors: Colors;
}

const [useContex, Provider] = createContext<Context>();

interface Props {
    children?: React.ReactElement;
    // Using initial ThemeType is essential while testing apps with consistent ThemeType
    initialThemeType?: ThemeType;
    customTheme?: ThemeParams;
}

function ThemeProvider({ children, customTheme }: Props): React.ReactElement {
    // const enableAutoTheme = remoteConfig().getValue("theme_auto").asBoolean();

    // const isMobile = useMediaQuery({ maxWidth: 767 });
    // const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 992 });
    // const isDesktop = useMediaQuery({ minWidth: 992 });
    // const isLandScape = useMediaQuery({ orientation: "landscape" });
    // const [windowWidth, setWindowWidth] = useState(0);
    // const [windowHeight, setWindowHeight] = useState(0);

    const [themeType, setThemeType] = useState(ThemeType.LIGHT);

    // useEffect(() => {
    //     // const { width, height } = Dimensions.get("window");
    //     setWindowWidth(width);
    //     setWindowHeight(height);

    //     const subscription = Dimensions.addEventListener("change", ({ window }) => {
    //         setWindowWidth(window.width);
    //         setWindowHeight(window.height);
    //     });
    //     return () => subscription.remove();
    // }, []);

    // useEffect(() => {
    //     if (enableAutoTheme) {
    //         const setThemeAparence = ({ colorScheme }: Appearance.AppearancePreferences) => {
    //             setThemeType(colorScheme === "light" ? ThemeType.LIGHT : ThemeType.DARK);
    //         };
    //         setThemeAparence({
    //             colorScheme: Appearance.getColorScheme(),
    //         });
    //         const l = Appearance.addChangeListener(setThemeAparence);

    //         return () => l.remove();
    //     } else {
    //         setThemeType(ThemeType.LIGHT);
    //     }
    // }, [enableAutoTheme]);

    const changeThemeType = (): void => {
        const newThemeType = themeType === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;

        setThemeType(newThemeType);
    };

    // const defaultTheme = themeType === ThemeType.DARK ? { ...dark, ...customTheme?.dark } : { ...light, ...customTheme?.light };
    const defaultTheme = { ...light, ...customTheme?.light };

    // const media = {
    //     // isMobile,
    //     // isTablet,
    //     // isDesktop,
    //     // isLandScape,
    //     // windowHeight,
    //     // windowWidth,
    // };

    const theme: DefaultTheme = {
        ...defaultTheme,
        // ...media,
        // ...sizes
    };

    return (
        <Provider
            value={{
                // media,
                themeType,
                changeThemeType,
                theme: theme,
                colors,
            }}
        >
            <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
        </Provider>
    );
}

export { useContex as useTheme, ThemeProvider, ThemeType, withTheme };