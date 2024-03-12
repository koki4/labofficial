import { Container, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import { FiUsers } from 'react-icons/fi';
const members = () => {
    return (
        <Container maxW='2000px'>
            <ResponsiveNavbar />
            <Container maxW={'8xl'} py={12} mb={1} pb={0}>
                <Heading size={"lg"} marginTop="1">
                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                        メンバー<FiUsers color="#FFD700" style={{ marginLeft: '8px' }} />
                    </Text>
                </Heading>
                <Container m={5} pt={4}>
                    <Heading size={"md"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            博士課程
                        </Text>
                    </Heading>
                    <UnorderedList m={8}>
                        <ListItem>佐々木康介 (D2)</ListItem>
                        <ListItem>三浦真帆 (D2)</ListItem>
                        <ListItem>岡田智也 (D1)</ListItem>
                    </UnorderedList>
                    <Heading size={"md"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            修士課程
                        </Text>
                    </Heading>
                    <UnorderedList m={8}>
                        <ListItem>清水真理子 (M2)</ListItem>
                        <ListItem>吉田悠太 (M2)</ListItem>
                        <ListItem>鈴木さやか (M2)</ListItem>
                        <ListItem>中島健太 (M1)</ListItem>
                        <ListItem>田村さくら (M1)</ListItem>
                        <ListItem>高田匠 (M1)</ListItem>
                    </UnorderedList>

                    <Heading size={"md"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            学士課程
                        </Text>
                    </Heading>
                    <UnorderedList m={8}>
                        <ListItem>山口雄大 (B4)</ListItem>
                        <ListItem>佐々木美香 (B4)</ListItem>
                    </UnorderedList>
                </Container>
            </Container>
        </Container>
    );
}

export default members;