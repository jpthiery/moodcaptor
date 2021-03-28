import React, {useState} from "react";

import {Layer, Stage} from "react-konva";

const MoodRate = ({maxLevel, initialRate=0, createRateItem, handleRate}) => {

    const computeRateItemsValues = (rate) => {
        const rateItemsValues = []
        let i = 0
        for (; i <= rate; i++) {
            rateItemsValues.push(true)
        }
        for (; i < maxLevel; i++) {
            rateItemsValues.push(false)
        }
        return rateItemsValues
    }

    const rateItemsValues = computeRateItemsValues()

    const widthItem = 50
    const heightItem = 50

    const totalWidth = maxLevel * widthItem

    const [rateItemsState, setRateItemsState] = useState(rateItemsValues)


    const handleItemSelected = (rate) => {
        console.log(rate)
        const rateItemsValues = computeRateItemsValues(rate)
        setRateItemsState(rateItemsValues)
        handleRate(rate+1)
    }

    const rateItems = rateItemsState.map((isSelected, rate) => createRateItem(
        widthItem,
        heightItem,
        (widthItem * (rate + 1)) - (widthItem / 2),
        heightItem / 2,
        rate,
        isSelected,
        handleItemSelected
    ))

    return (
        <div>
            <p>Rate :</p>
            <Stage width={totalWidth} height={heightItem}>
                <Layer>
                    {rateItems}
                </Layer>
            </Stage>
        </div>
    )

}

export default MoodRate