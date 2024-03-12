// import Link from "next/link";
import styles from "../../styles/Home.module.css"
import { Link } from "@chakra-ui/react";

import { Button, Flex, Heading, Input, } from "@chakra-ui/react";
import { Container, Box } from '@chakra-ui/react'

const ProductsList = () => {
    return (
        <div >
            <Container maxW='md'>
            <Box padding='5' color='black' maxW='md'>
                <h1 >Hello</h1>
                <ul>
                    <li>
                        <Link href="/products/smartphone">スマートフォン</Link>
                    </li>
                    <li>
                        <Link href="/products/pc">パソコン</Link>
                    </li>
                    <li>
                        <Link href="/products/headphone">ヘッドフォン</Link>
                    </li>
                </ul>
            </Box>
            </Container>
            <Flex height="60vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" padding={12} rounded={6}>
                    <Heading mb={6}>Log in</Heading>
                    <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" />
                    <Input placeholder="********" variant="filled" mb={6} type="password" />
                    <Button mb={6} colorScheme="teal">Log in</Button>
                    <Button>Toggle Color Mode</Button>
                </Flex>
            </Flex>
        </div>
    );
}

export default ProductsList;