/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from '@chakra-ui/react'
import { GridItem, GridRow } from './GridComponents'

const Section = ({
    data,
    checkedItems,
    handleWorkItemCheck,
    actIndex,
    pkgIndex,
}: {
    data: { name: string; rate: string; total: string }[]
    checkedItems: {
        activities: { workItems: boolean[] }[]
    }[]
    handleWorkItemCheck: (
        actIndex: number,
        itemIndex: number,
        workItemIndex: number
    ) => void
    actIndex: number
    pkgIndex: number
}) => {
    return data.map((item: any, index: number) => {
        return (
            <GridRow key={index}>
                <Checkbox
                    isChecked={
                        checkedItems[pkgIndex].activities[actIndex].workItems[
                            index
                        ]
                    }
                    onChange={() =>
                        handleWorkItemCheck(pkgIndex, actIndex, index)
                    }
                />
                <GridItem>{item.name}</GridItem>
                <GridItem hideOnSmallScreen={true}>{item.rate}</GridItem>
                <GridItem hideOnSmallScreen={true}>{item.total}</GridItem>
                <GridItem> </GridItem>
            </GridRow>
        )
    })
}

export default Section
