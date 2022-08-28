import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Fish() {
    return (
        <Box fontSize="lg" fontWeight="500">

            <Link>Freshwater</Link>
            <br />
            <Link>Seawater</Link>
            <br />
            <Link>Ready to Cook</Link>
            <br />
            <Link>Crab</Link>
        </Box>
    )
}
