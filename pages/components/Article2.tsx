import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Container,
    SimpleGrid
} from '@chakra-ui/react'

const Article2 = () => {
    return (
        <Container maxW={'8xl'} py={12} mb={1} pb={0}>
            {/* <Heading>なぜこの時代に統計学が求められているのか</Heading> */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://img.freepik.com/free-vector/artificial-intelligence-isometric-composition-with-data-analysis-pictograms-computer-windows-and-character-of-robot_1284-55177.jpg?w=996&t=st=1708578936~exp=1708579536~hmac=f90d1ac2691c3e861f4b993735ad2cbb16e1c36d7d8ac9e8751bbe2045e00f13'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Box>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)',
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    {/* <BlogTags tags={['Engineering', 'Product']} /> */}
                    <Heading marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            この時代の統計学の必要性
                        </Text>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        研究者や企業が「ビッグデータ」を使って問題を解決しようとする際、統計学と機械学習はどちらも欠かせません。統計学は、データの意味を理解し、信頼性を評価するための基本的なツールを提供します。一方、機械学習は、大規模なデータセットからパターンを抽出し、予測モデルを構築するための技術です。
                        統計学は、データの意味を理解するための基礎を提供します。統計学を理解することで、私たちはデータをより効果的に分析し、意思決定をより良くすることができます。統計学は、データの分布、確率モデル、仮説検定、推定などの概念を含みます。これらの概念を理解することで、私たちはデータの意味をより良く理解し、より良い意思決定を行うことができるようにすることを目指します。
                    </Text>
                    {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
                </Box>
            </Box>
            </SimpleGrid>
        </Container>
    )
}

export default Article2