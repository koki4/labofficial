import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp} from 'react-icons/io5'
import { IoEarthOutline } from "react-icons/io5";
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Article1 = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={'8xl'} py={12} mb={1} pb={0}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>ようこそ</Heading>
          <Heading>東北大学 小森研究室へ</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            本研究室では、<br/>
            ベイズ統計学をはじめとした理論統計学、ニューラルネットや深層学習の理論的な構造について<br/>
            幅広く研究しています。
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Article1
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'ベイズ統計学'}
            />
            {/* <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'機械学習'}
            /> */}
            <Article1
              icon={<Icon as={IoEarthOutline} color={'purple.500'} w={5} h={5} />}
            //   iconBg={useColorModeValue('purple.100', 'purple.900')}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'情報幾何学'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://img.freepik.com/free-vector/illustration-of-data-analysis-graph_53876-18132.jpg?w=740&t=st=1708524619~exp=1708525219~hmac=7c497b57e0b56a9feffd5598a0c3270621b231af2be7e729573483cdc303c2ee'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}