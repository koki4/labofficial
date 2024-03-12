import { Container, Heading, Text, Box, Image, AspectRatio, } from "@chakra-ui/react";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import { BiDoorOpen, BiMap } from 'react-icons/bi';

const access = () => {
    return (
        <Container maxW='2500px'>
            <ResponsiveNavbar />
            <Container maxW={'10xl'} py={12} mb={1} pb={0}>
                <Heading size={"lg"} marginTop="1">
                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                        アクセス <BiDoorOpen color="black" />
                    </Text>
                </Heading>
                <Container m={5} pt={4} className="aaa" maxW="60%">

                    <Heading size={"md"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            <BiMap /> 所在
                        </Text>
                    </Heading>
                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center" m={5}>
                        〒980-8579
                        仙台市青葉区荒巻字青葉6-3-09
                        情報科学研究科棟1206-2号室
                    </Text>

                    <Heading size={"md"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            地下鉄からのアクセス
                        </Text>
                    </Heading>
                    <Text m={5}>
                        仙台駅から地下鉄東西線八木山動物公園方面 青葉山駅降車、<br />
                        北1番・南1番出口から徒歩1分
                    </Text>
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://www.is.tohoku.ac.jp/media/images/introduction/area_map.png'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Box>
                    </Box>

                    <Heading size={"md"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            学校周辺地図
                        </Text>
                    </Heading>
                    <AspectRatio ratio={16 / 9} m={5}>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8584.25624559416!2d140.8309928557912!3d38.255554498428985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a285672eef461%3A0x1b9bb27bf0b58b38!2z5p2x5YyX5aSn5a2mIOWkp-WtpumZouaDheWgseenkeWtpueglOeptuenkQ!5e0!3m2!1sja!2sjp!4v1710227794709!5m2!1sja!2sjp'
                        />
                    </AspectRatio>
                </Container>
            </Container>
        </Container>
    );
}

export default access;