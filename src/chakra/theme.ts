import { extendTheme } from "@chakra-ui/react"
import '@fontsource/open-sans'


export const theme = extendTheme({
    colors: {
        brand: {
            100: "#ff3c00",
        },
    },
    fonts: {
        body: "Open Sans, sans-serif"
    }
})