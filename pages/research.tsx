import ResponsiveNavbar from "./components/ResponsiveNavbar";
import { Container, Heading, Text, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { FaFlask } from 'react-icons/fa';

const research = () => {
    return (
        <div>
            <ResponsiveNavbar />
            <Container maxW='2000px'>
                {/* <Header /> */}
                <ResponsiveNavbar />
                <Container maxW={'8xl'} py={12} mb={1} pb={0}>


                    <Heading size={"lg"} marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
                            研究内容<FaFlask color="pink" style={{ marginLeft: '8px' }} />
                        </Text>
                    </Heading>
                    <Accordion allowMultiple>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="bold" fontSize="lg">
                                                ベイズ統計学の基礎理論および応用研究
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        小森研究室では、ベイズ統計学の基礎理論から実践的な応用まで幅広く研究を行っています。ベイズ統計学は不確実性を扱うための強力な枠組みであり、我々の研究はこの手法を用いて、様々な分野における問題の解明や予測を行っています。具体的には、ベイズ推定法やマルコフ連鎖モンテカルロ法（MCMC）、変分推論などの手法を用いて、実データに対するモデルの適合やパラメータの推定、予測分布の算出などを行っています。
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="bold" fontSize="lg">
                                                深層学習モデルの理論的な解明と新たなアルゴリズムの開発
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        当研究室では、深層学習の理論的な構造に関する解明と、新たなアルゴリズムの開発に重点を置いています。深層学習は機械学習の重要な分野であり、その理論的な解明はますます重要性を増しています。我々の研究では、ニューラルネットワークの層の間の情報伝達や活性化関数の役割、学習アルゴリズムの収束性などに焦点を当て、その理論的な側面を探求しています。また、これらの理論に基づいて新たな深層学習アルゴリズムの開発も行っており、高い性能と解釈可能性を兼ね備えた手法の提案に取り組んでいます。
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="bold" fontSize="lg">
                                                確率的グラフィカルモデルを用いたデータ解析手法の研究
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        当研究室では、確率的グラフィカルモデル（PGM）を用いたデータ解析手法の研究を行っています。PGMは複雑なデータ構造をグラフィカルな表現で捉え、それに基づいてデータ解析や推論を行う強力な枠組みです。我々の研究では、ベイズネットワークやマルコフランダムフィールドなどの代表的なPGMモデルを用いて、異常検知、パターン認識、ネットワーク解析などの様々な課題に取り組んでいます。また、PGMを用いたデータ解析手法の高速化やスケーラビリティの向上にも注力し、実世界の大規模なデータセットにも適用可能な手法の開発に努めています。
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="bold" fontSize="lg">
                                                ニューラルネットワークの構造や動作原理の解析と最適化
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        小森研究室では、ニューラルネットワークの構造や動作原理に関する解析を行い、その最適化に向けた研究を推進しています。ニューラルネットワークは深層学習の基盤となる技術であり、その構造や動作原理の理解は重要です。我々の研究では、畳み込みニューラルネットワーク（CNN）やリカレントニューラルネットワーク（RNN）などの代表的なモデルの構造や学習アルゴリズムについて詳細に解析し、その性能向上や効率化に向けた最適化手法を提案しています。また、ニューラルネットワークの解釈可能性やロバスト性にも焦点を当て、安定性や信頼性の向上に貢献する研究も行っています。
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="bold" fontSize="lg">
                                                時系列データ解析におけるベイズ推論の応用研究
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        小森研究室では、時系列データ解析におけるベイズ推論の応用研究を行っています。時系列データは時間に沿って観測されるデータであり、その解析は予測や異常検知などの重要なアプリケーションに関連しています。ベイズ推論は不確実性を適切に扱う手法であり、時系列データ解析においても有効です。我々の研究では、ベイズ線形回帰モデルやダイナミックベイズモデルなどの時系列モデルを用いて、データの構造や変動を適切に捉え、予測精度の向上や異常の検出に取り組んでいます。また、時系列データの長期的な予測や不確実性の推定、リアルタイムデータ解析などにも関心を持ち、実世界の時系列データに対する応用可能な手法の開発に取り組んでいます
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="bold" fontSize="lg">
                                                深層学習における誤差解析とロバスト性の向上に関する研究
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        当研究室では、深層学習における誤差解析とロバスト性の向上に関する研究を行っています。深層学習は大規模なデータセットに対して強力な予測能力を持つ一方で、ノイズや外れ値に敏感な側面もあります。我々の研究では、深層学習モデルの学習過程や予測結果における誤差の解析を通じて、モデルの弱点や改善の余地を明らかにします。また、データの品質向上やノイズ耐性の向上を目指した新たな学習アルゴリズムの提案や、敵対的な攻撃やドメインシフトなどのロバスト性向上のための手法の研究も行っています。深層学習の安定性と信頼性の向上に貢献し、実世界の応用における問題解決に寄与することを目指しています。
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

                </Container>
            </Container>
        </div>
    );
}

export default research;