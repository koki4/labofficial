import React from 'react';
import {
    Box,
    Flex,
    Button,
    IconButton,
    useDisclosure,
    useBreakpointValue,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link,
    Text
} from '@chakra-ui/react';
import { CgProfile } from "react-icons/cg";
import { BsNewspaper } from "react-icons/bs";
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaFlask } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BiDoorOpen } from 'react-icons/bi';

function ResponsiveNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isDrawer = useBreakpointValue({ base: true, lg: false });

    return (
        <Box px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                {/* <Box>Logo</Box>  */}
                <Flex
                    as="button" fontSize="xl" color="gray" align="center"
                    bg="transparent" p="3" mr="3" rounded="full" // fontWeight="800"
                >

                    <Link href="/home" style={{ textDecoration: "none" }}> <Text fontSize="2xl" color="teal" as='abbr' >理論統計学 小森圭介 研究室</Text> </Link>
                    {/* <Text fontSize="2xl" color="teal" as='b' p={2}> Kei.Lab</Text> */}
                </Flex>
                {isDrawer ? (
                    <>
                        <IconButton
                            icon={<HamburgerIcon />}
                            onClick={onOpen}
                            aria-label={'Open Menu'}
                            size={'md'}
                            mr={2}
                        />

                        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerBody>
                                    {/* ドロワーメニューの内容 */}
                                    <Link href="/home" style={{ textDecoration: "none" }}> <Text fontSize="2xl" color="teal" as='abbr' >小森圭介 研究室</Text> </Link>
                                    <Flex
                                        as="button" fontSize="xl" color="gray" align="center"
                                        bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                                    >
                                        <CgProfile color="lightgreen" />
                                        <Link href="/home"> <Text ml="3">ホーム</Text> </Link>
                                    </Flex>
                                    <Flex
                                        as="button" fontSize="xl" color="gray" align="center"
                                        bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                                    >
                                        <FaFlask color="pink" />
                                        <Link href="/research"> <Text ml="3">研究内容</Text> </Link>
                                    </Flex>
                                    <Flex
                                        as="button" fontSize="xl" color="gray" align="center"
                                        bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                                    >
                                        <BsNewspaper color="#63B3ED" />
                                        <Link href="/career"> <Text ml="3">経歴</Text> </Link>
                                    </Flex>
                                    <Flex
                                        as="button" fontSize="xl" color="gray" align="center"
                                        bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                                    >
                                        <FiUsers color="#FFD700" />
                                        <Link href="/members"> <Text ml="3">メンバー</Text> </Link>
                                    </Flex>
                                    <Flex
                                        as="button" fontSize="xl" color="gray" align="center"
                                        bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                                    >
                                        <BiDoorOpen color='black'/>
                                        <Link href="/access"> <Text ml="3">アクセス</Text> </Link>
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </>
                ) : (
                    <Flex>
                        {/* 通常のナビバーメニュー */}

                        <Box flex="1" />
                        <Flex
                            as="button" fontSize="xl" color="gray" align="center"
                            bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                        >
                            <CgProfile color="lightgreen" />
                            <Link href="/home"> <Text ml="3">ホーム</Text> </Link>
                        </Flex>
                        <Flex
                            as="button" fontSize="xl" color="gray" align="center"
                            bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                        >
                            <FaFlask color="pink" />
                            <Link href="/research"> <Text ml="3">研究内容</Text> </Link>
                        </Flex>
                        <Flex
                            as="button" fontSize="xl" color="gray" align="center"
                            bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                        >
                            <BsNewspaper color="#63B3ED" />
                            <Link href="/career"> <Text ml="3">経歴</Text> </Link>
                        </Flex>

                        <Flex
                            as="button" fontSize="xl" color="gray" align="center"
                            bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                        >
                            <FiUsers color="#FFD700" />
                            <Link href="/members"> <Text ml="3">メンバー</Text> </Link>
                        </Flex>
                        <Flex
                            as="button" fontSize="xl" color="gray" align="center"
                            bg="transparent" p="1" mr="1" ml="1" rounded="full" // fontWeight="800"
                        >
                            <BiDoorOpen color='black'/>
                            <Link href="/access"> <Text ml="3">アクセス</Text> </Link>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
}

export default ResponsiveNavbar;