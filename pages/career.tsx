import ResponsiveNavbar from "./components/ResponsiveNavbar";
import { Container, Heading, Text } from "@chakra-ui/react";
import Stepper_comp from "./components/Stepper_comp";
import { BsNewspaper } from "react-icons/bs";
const career = () => {
    return (
        <div>
            <ResponsiveNavbar />
            <Container maxW='2000px'>
                <Container maxW={'8xl'} py={12} mb={1} pb={0}>
                    <Heading size={"lg"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            経歴<BsNewspaper color="#63B3ED" style={{ marginLeft: '8px' }} />
                        </Text>
                    </Heading>
                    <Container m={5} pt={4}>
                        <Stepper_comp />
                    </Container>
                </Container>
            </Container>
        </div>
    );
}

export default career;