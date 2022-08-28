import { Box, Button, Divider, Image } from "@chakra-ui/react"

export default function SliderComponent() {
    const property = {
        imageUrl: 'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>

                    <Box

                        fontWeight="bold"
                        letterSpacing='wide'
                        fontSize='md'
                        textTransform='uppercase'
                        ml='2'
                        mb="4"
                    >
                        Chicken Curry Cut - Small Pieces
                    </Box>
                </Box>

                <Box
                    alignContent="left"
                    color="grey"
                    fontSize='sm'
                    fontWeight="semibold"
                >
                    Small pieces of bone-in & boneless chicken for curries
                </Box>
                <Box borderRadius='full' px='2' colorScheme='teal' fontWeight="500">
                    Net wt: 500gms  {" "} Gross: 667gms
                </Box>
                <Box display="flex" justifyContent="space-between" mt="5">
                    <Box color="red" fontWeight="bold">MRP : ₹159</Box>
                    <Box> <Button bg="#D11243" color="white">ADD TO CART</Button> </Box>
                </Box>
                <Divider mt="2" />
                <Box display="flex" justifyContent="center" gap="2" mt="2">
                    <Box> <Image src="https://www.licious.in/img/rebranding/express_delivery.svg" /> </Box>
                    <Box color="grey" fontWeight="500" > Today in 90 min </Box>
                </Box>

            </Box>
        </Box >
    )
}