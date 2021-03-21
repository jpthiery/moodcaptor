import React, {useState} from "react";

import {Layer, Stage} from "react-konva";

const MoodRate = ({maxLevel, createRateItem, handleRate}) => {

    const rateItemsValues = []
    let i = 0
    for (; i < maxLevel; i++) {
        rateItemsValues.push(false)
    }

    const widthItem = 50
    const heightItem = 50

    const totalWidth = maxLevel * widthItem

    const [rateItemsState, setRateItemsState] = useState(rateItemsValues)

    const handleItemSelected = (rate) => {
        console.log(rate)
        const rateItemsValues = []
        let i = 0
        for (; i <= rate; i++) {
            rateItemsValues.push(true)
        }
        for (; i < maxLevel; i++) {
            rateItemsValues.push(false)
        }
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
        <span>
            <p>Rate :</p>
            <Stage width={totalWidth} height={heightItem}>
                <Layer>
                    {rateItems}
                </Layer>
            </Stage>
        </span>
    )

}

export default MoodRate