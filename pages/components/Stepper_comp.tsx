import { useSteps, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator } from "@chakra-ui/react"
const steps = [
    { title: '1998年', description: '名古屋大学理学部数学科 卒業' },
    { title: '2000年', description: '名古屋大学理学部数学科 修士課程卒業' },
    { title: '2004年', description: 'コロンビア大学 博士課程修了' },
    { title: '2005年~', description: 'コロンビア大学 ポスドク' },
    { title: '2009年', description: '統計数理研究所 研究員' },
    { title: '2014年', description: '統計数理研究所 主任研究員' },
    { title: '2018年~現在', description: '東北大学 情報科学研究科 准教授  ' },
  ]
  
  export default function Stepper_comp() {
    const { activeStep } = useSteps({
      index: 6,
      count: steps.length,
    })
  
    return (
      <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  