/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    ChakraProvider,
    Checkbox,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react'
import { useState } from 'react'
import { GridHeader, GridItem, GridRow } from './components/GridComponents'
import Section from './components/Section'
import { packages } from './data/data'

const WorkOrderCreation = () => {
    const [expandedPackageIndex, setExpandedPackageIndex] = useState<number>(-1)
    const [expandedActivityIndex, setExpandedActivityIndex] =
        useState<number>(-1)
    const [checkedItems, setCheckedItems] = useState(
        packages.map((pkg) => ({
            checked: false,
            activities: pkg.activities.map((activity) => ({
                checked: false,
                workItems: activity.workItems.map(() => false),
            })),
        }))
    )

    const handlePackageExpand = (index: number) => {
        setExpandedPackageIndex(expandedPackageIndex === index ? -1 : index)
    }

    const handleActivityExpand = (index: number) => {
        setExpandedActivityIndex(expandedActivityIndex === index ? -1 : index)
    }

    const handlePackageCheck = (pkgIndex: number) => {
        const newCheckedItems = [...checkedItems]
        const isChecked = !newCheckedItems[pkgIndex].checked
        newCheckedItems[pkgIndex].checked = isChecked
        newCheckedItems[pkgIndex].activities.forEach((activity) => {
            activity.checked = isChecked
            activity.workItems.forEach((_, index) => {
                activity.workItems[index] = isChecked
            })
        })
        setCheckedItems(newCheckedItems)
    }

    const handleActivityCheck = (pkgIndex: number, actIndex: number) => {
        const newCheckedItems = [...checkedItems]
        const isChecked =
            !newCheckedItems[pkgIndex].activities[actIndex].checked
        newCheckedItems[pkgIndex].activities[actIndex].checked = isChecked
        newCheckedItems[pkgIndex].activities[actIndex].workItems.forEach(
            (_, index) => {
                newCheckedItems[pkgIndex].activities[actIndex].workItems[
                    index
                ] = isChecked
            }
        )
        setCheckedItems(newCheckedItems)
    }

    const handleWorkItemCheck = (
        pkgIndex: number,
        actIndex: number,
        itemIndex: number
    ) => {
        const newCheckedItems = [...checkedItems]
        newCheckedItems[pkgIndex].activities[actIndex].workItems[itemIndex] =
            !newCheckedItems[pkgIndex].activities[actIndex].workItems[itemIndex]
        setCheckedItems(newCheckedItems)
    }

    const handleMainCheck = (isChecked: boolean) => {
        const newCheckedItems = [...checkedItems]
        newCheckedItems.forEach((pkg) => {
            pkg.checked = isChecked
            pkg.activities.forEach((activity) => {
                activity.checked = isChecked
                activity.workItems.forEach((_, index) => {
                    activity.workItems[index] = isChecked
                })
            })
        })
        setCheckedItems(newCheckedItems)
    }

    return (
        <ChakraProvider>
            <Box className="p-4 !text-center">
                <Box className="flex p-5 justify-between w-full ">
                    <Heading size={'lg'}>Work Orders</Heading>
                    <Button size={'md'} colorScheme="teal">
                        Save
                    </Button>
                </Box>
                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Other</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box>
                                <Accordion colorScheme="teal" allowMultiple>
                                    <GridRow>
                                        <Checkbox
                                            onChange={(ev) => {
                                                handleMainCheck(
                                                    (ev.target as any).checked
                                                )
                                            }}
                                        />
                                        <GridHeader>Packages</GridHeader>
                                        <GridHeader hideOnSmallScreen={true}>
                                            Rate (in sqft)
                                        </GridHeader>
                                        <GridHeader hideOnSmallScreen={true}>
                                            Total
                                        </GridHeader>
                                        <GridHeader>Action</GridHeader>
                                    </GridRow>
                                    {packages.map((pkg, pkgIndex) => (
                                        <AccordionItem key={pkgIndex}>
                                            <GridRow>
                                                <Checkbox
                                                    isChecked={
                                                        checkedItems[pkgIndex]
                                                            .checked
                                                    }
                                                    onChange={() =>
                                                        handlePackageCheck(
                                                            pkgIndex
                                                        )
                                                    }
                                                />
                                                <GridItem>{pkg.name}</GridItem>
                                                <GridItem
                                                    hideOnSmallScreen={true}
                                                >
                                                    567.80
                                                </GridItem>
                                                <GridItem
                                                    hideOnSmallScreen={true}
                                                >
                                                    ₹ 2,98,6792
                                                </GridItem>
                                                <GridItem>
                                                    <AccordionButton
                                                        className="flex items-center justify-center w-[30px] h-[30px] mx-auto"
                                                        onClick={() =>
                                                            handlePackageExpand(
                                                                pkgIndex
                                                            )
                                                        }
                                                    >
                                                        {expandedPackageIndex ===
                                                        pkgIndex ? (
                                                            <ChevronUpIcon />
                                                        ) : (
                                                            <ChevronDownIcon />
                                                        )}
                                                    </AccordionButton>
                                                </GridItem>
                                            </GridRow>
                                            <AccordionPanel>
                                                <Accordion allowMultiple>
                                                    {pkg.activities.map(
                                                        (
                                                            activity,
                                                            actIndex
                                                        ) => (
                                                            <AccordionItem
                                                                key={actIndex}
                                                            >
                                                                <GridRow>
                                                                    <Checkbox
                                                                        isChecked={
                                                                            checkedItems[
                                                                                pkgIndex
                                                                            ]
                                                                                .activities[
                                                                                actIndex
                                                                            ]
                                                                                .checked
                                                                        }
                                                                        onChange={() =>
                                                                            handleActivityCheck(
                                                                                pkgIndex,
                                                                                actIndex
                                                                            )
                                                                        }
                                                                    />
                                                                    <GridItem>
                                                                        {
                                                                            activity.name
                                                                        }
                                                                    </GridItem>
                                                                    <GridItem
                                                                        hideOnSmallScreen={
                                                                            true
                                                                        }
                                                                    >
                                                                        567.80
                                                                    </GridItem>
                                                                    <GridItem
                                                                        hideOnSmallScreen={
                                                                            true
                                                                        }
                                                                    >
                                                                        ₹
                                                                        2,98,6792
                                                                    </GridItem>
                                                                    <GridItem>
                                                                        <AccordionButton
                                                                            className="flex items-center justify-center w-[30px] h-[30px] mx-auto"
                                                                            onClick={() =>
                                                                                handleActivityExpand(
                                                                                    actIndex
                                                                                )
                                                                            }
                                                                        >
                                                                            {expandedActivityIndex ===
                                                                            actIndex ? (
                                                                                <ChevronUpIcon />
                                                                            ) : (
                                                                                <ChevronDownIcon />
                                                                            )}
                                                                        </AccordionButton>
                                                                    </GridItem>
                                                                </GridRow>
                                                                <AccordionPanel>
                                                                    <Section
                                                                        data={
                                                                            activity.workItems
                                                                        }
                                                                        checkedItems={
                                                                            checkedItems
                                                                        }
                                                                        actIndex={
                                                                            actIndex
                                                                        }
                                                                        pkgIndex={
                                                                            pkgIndex
                                                                        }
                                                                        handleWorkItemCheck={
                                                                            handleWorkItemCheck
                                                                        }
                                                                    />
                                                                </AccordionPanel>
                                                            </AccordionItem>
                                                        )
                                                    )}
                                                </Accordion>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Box>
                        </TabPanel>
                        <TabPanel>hello world</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </ChakraProvider>
    )
}

export default WorkOrderCreation
