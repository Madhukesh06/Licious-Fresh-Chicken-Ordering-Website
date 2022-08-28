import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (

        <Box
            style={{
                clear: "both",
                position: "relative",
                // height: "200px",
                margin: "auto",
                marginTop: "100px",
                width: "70rem",
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
                marginBottom: "2rem"
            }}
        >
            <Box>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "2rem",
                    }}
                >
                    <Box>
                        <Link size="lg" fontWeight="bold">
                            USEFUL LINKS
                        </Link>
                        <br />
                        <Link>Why Licious?</Link>
                        <br />
                        <Link>Refer & Earn</Link>
                        <br />
                        <Link>Licious Cash & Cash+</Link>
                        <br />
                        <Link>Careers</Link>
                        <br />
                        <Link>BLOG</Link>
                        <br />
                        <Link>Campaign</Link>
                        <br />
                        <Link>Bug Bounty Guidelines</Link>
                        <br />
                        <Link>About Us</Link>
                        <br />
                        <Link>FSSC 22000 Certification</Link>
                        <br />
                        <Link>FSSAI Licenses</Link>
                        <br />
                        <Link>Sitemap</Link>
                    </Box>
                    <Box>
                        <Link size="lg" fontWeight="bold">
                            EXPERIENCE LICIOUS APP ON MOBILE
                        </Link>
                        <br />
                        <Box display="flex" gap="1rem" cursor="pointer">
                            <Image src="https://www.licious.in/img/rebranding/app-store-new.svg" />
                            <Image src="https://www.licious.in/img/rebranding/play-store-new.png" />
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box></Box>
                    <Box display="flex" gap="1rem" cursor="pointer">
                        <Text fontWeight="bold">KEEP IN TOUCH</Text>
                        <Image src="https://www.licious.in/img/rebranding/insta_color.png" />
                        <Image src="https://www.licious.in/img/rebranding/fb_color.png" />
                        <Image src="https://www.licious.in/img/rebranding/twitter_color.png" />
                    </Box>
                </Box>
            </Box>

            <Box borderLeft="1px solid grey" height="350px" />
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "2rem",
                }}
            >
                <Box>
                    {" "}
                    <Link size="lg" fontWeight="bold">
                        CONTACT US
                    </Link>
                    <br />
                    <Link>Call: 1800-4190-786
                    </Link>
                    <br />
                    <Link>Talktous@licious.com</Link>
                    <br />
                    <Link size="lg" fontWeight="bold">REGISTERED OFFICE ADDRESS:</Link>
                    <br />
                    <Link>House of Licious, Zed Pearl, No 12,</Link>
                    <br />
                    <Link>Domlur Layout</Link>
                    <br />
                    <Link>Bangalore, Karnataka - 560071</Link>
                </Box>
                <Box>
                    {" "}
                    <Link>T&C</Link>
                    <br />
                    <Link>FAQ</Link>
                    <br />
                    <Link>Privacy Policy</Link>
                    <br />
                    <Link size="lg" fontWeight="bold">HAVE SECURITY CONCERN?</Link>
                    <br />
                    <Link>Mail us to:</Link>
                    <br />
                    <Link>security@licious.com</Link>

                </Box>
                <Box>
                    <Image width="120px" src="https://www.licious.in/img/rebranding/3-dsecure.png"></Image>
                </Box>
            </Box>
        </Box >
    );
}
