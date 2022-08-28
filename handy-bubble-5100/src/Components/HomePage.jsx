import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Sliders from './Sliders'

let data = [{
    id: 0,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
    name: "Today's Deal"
},
{
    id: 1,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png",
    name: "Chicken"
},
{
    id: 2,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png",
    name: "Fish & Seafood"
},
{
    id: 3,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png",
    name: "Mutton"
},
{
    id: 4,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png",
    name: "Ready to Cook"
},
{
    id: 5,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png",
    name: "Prawns"
},
{
    id: 6,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png",
    name: "Cold Cuts"
},
{
    id: 7,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png",
    name: "Spreads"
},
{
    id: 8,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png",
    name: "Eggs"
},
{
    id: 9,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png",
    name: "Biriyani & Kebab"
},
{
    id: 10,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d531fa3-8969-b105-6e93-f8810d54ab4c/original/Combo_(1).png",
    name: "Combos"
},
{
    id: 11,
    image: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4720e482-c73d-6cca-3616-466432b4d0da/original/Ft_Collection_3_(1).png",
    name: "Featured Collections"
}
]

export default function HomePage() {
    return (
        <Box mt="6.5rem">
            <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8" />
            <br />
            <br />
            <Heading float="left" ml="10rem">Shop by categories</Heading>
            <br />
            <br />

            <Text float="left" ml="10rem" fontWeight="500" mb="2">Shop by categories</Text>
            <br />
            <br />
            <SimpleGrid width="80%" margin="auto" columns={4} spacing={5}>
                {data.map((el) => (
                    <Box cursor="pointer" key={el.id}>
                        <Image boxShadow="rgba(0, 0, 0, 0.10) 0px 5px 15px" height="80%" width="100%" src={el.image} borderRadius="1rem" />
                        <br />
                        <Text style={{ textAlign: "center", fontWeight: "500", fontSize: "1.2rem" }}> {el.name} </Text>
                    </Box>
                ))}
            </SimpleGrid>

            <Heading float="left" ml="10rem" fontSize="2rem" mb="2">Best Sellers</Heading>
            <br />
            <Sliders />
            <br />
            <Heading float="left" ml="10rem" fontSize="2rem" mb="2">Boneless Cuts</Heading>
            <br />
            <Sliders />
            <br />
            <Heading float="left" ml="10rem">Explore by category</Heading>
            <br />
            <br />
            <SimpleGrid width="80%" margin="auto" columns={4} spacing={5}>
                {data.map((el) => (
                    <Box cursor="pointer" key={el.id} >
                        <Image boxShadow="rgba(0, 0, 0, 0.10) 0px 5px 15px" height="80%" width="100%" src={el.image} borderRadius="1rem" />
                        <br />
                        <Text style={{ textAlign: "center", fontWeight: "500", fontSize: "1.2rem" }}> {el.name} </Text>
                    </Box>
                ))}
            </SimpleGrid>

            <br />
            <Image width="80%" margin="auto" src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"></Image>
        </Box>
    )
}
