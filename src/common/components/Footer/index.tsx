import { Text } from "@mantine/core";
import colors from "../../styles/colors";

export default function Footer() {
    return(
        <footer style={{backgroundColor: '#181818', height :'3rem', display: 'flex', justifyContent: 'center', 
        alignItems: 'center', color: colors.text.main}}>
            <Text sx={{fontWeight: 600}}>
                developed by Guilherme, 2023.
            </Text>
        </footer>
    )
}