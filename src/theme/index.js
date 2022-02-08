import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            midnight_express: '#272B35',
            crail: '#BE4444',
            lynch: 'rgba(95, 116, 149, 0.101961)'
        }
    },
    fonts: {
        body: `Poppins, ${base.fonts?.body}`
    }
})

export default theme;