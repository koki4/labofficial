import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Container,
    SimpleGrid,
    Stack,
    StackDivider,
    Flex
} from '@chakra-ui/react'

const Article2 = () => {
    return (
        <Container maxW={'8xl'} py={12} mb={1} pb={0}>
            {/* <Heading>なぜこの時代に統計学が求められているのか</Heading> */}

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://img.freepik.com/free-vector/artificial-intelligence-isometric-composition-with-data-analysis-pictograms-computer-windows-and-character-of-robot_1284-55177.jpg?w=996&t=st=1708578936~exp=1708579536~hmac=f90d1ac2691c3e861f4b993735ad2cbb16e1c36d7d8ac9e8751bbe2045e00f13'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Heading>この時代の</Heading>
                    <Heading>統計学の必要性</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        研究者や企業が「ビッグデータ」を使って問題を解決しようとする際、統計学と機械学習はどちらも欠かせません。統計学は、データの意味を理解し、信頼性を評価するための基本的なツールを提供します。<br/>
                        一方、機械学習は、大規模なデータセットからパターンを抽出し、予測モデルを構築するための技術です。
                        統計学は、データの意味を理解するための基礎を提供します。統計学を理解することで、私たちはデータをより効果的に分析し、意思決定をより良くすることができます。統計学は、データの分布、確率モデル、仮説検定、推定などの概念を含みます。これらの概念を理解することで、私たちはデータの意味をより良く理解し、より良い意思決定を行うことができるようにすることを目指します。
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                    </Stack>
                </Stack>
            </SimpleGrid>

        </Container>
    )
}

export default Article2