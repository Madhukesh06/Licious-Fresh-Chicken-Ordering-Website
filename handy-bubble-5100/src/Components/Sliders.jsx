
import { Box } from '@chakra-ui/react'
import SliderComponent from './SliderComponent';


export default function Sliders() {

    return (
        <Box display="flex" width="80%" margin="auto" gap="2rem" justifyContent="space-between">
            <SliderComponent />
            <SliderComponent />
            <SliderComponent />
        </Box>
    )
}
