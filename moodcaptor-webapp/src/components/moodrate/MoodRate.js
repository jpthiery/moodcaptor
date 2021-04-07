import React, {useState} from "react";

import {Layer, Stage, Star} from "react-konva";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const MoodRate = ({maxLevel, initialRate = 0, handleRate}) => {

    const computeRateItemsValues = (rate) => {
        const rateItemsValues = []
        let i = 0
        for (; i < rate; i++) {
            rateItemsValues.push(true)
        }
        for (; i < maxLevel; i++) {
            rateItemsValues.push(false)
        }
        return rateItemsValues
    }

    const rateItemsValues = computeRateItemsValues(initialRate)

    const widthItem = 50
    const heightItem = 50

    const totalWidth = maxLevel * widthItem

    const [rateItemsState, setRateItemsState] = useState(rateItemsValues)


    const handleItemSelected = (rate) => {
        const rateItemsValues = computeRateItemsValues(rate)
        setRateItemsState(rateItemsValues)
        handleRate(rate)
    }

    const createRateItem = (width, height, x, y, rateLevel, isSelected) => {
        const color = isSelected ? 'yellow' : 'blank'
        return (
            <Star
                key={rateLevel}
                x={x}
                y={y}
                numPoints={5}
                innerRadius={5}
                outerRadius={15}
                width={width}
                height={height}
                fill={color}
                stroke={'black'}
                strokeWidth={1}
                onMouseOver={() => handleItemSelected(rateLevel)}
            />
        )
    }

    const rateItems = rateItemsState.map((isSelected, index) => createRateItem(
        widthItem,
        heightItem,
        (widthItem * (index + 1)) - (widthItem / 2),
        heightItem / 2,
        index + 1,
        isSelected
    ))

    return (
        <>
            <Typography variant={"body1"} >Rate :</Typography>
            <Stage width={totalWidth} height={heightItem}>
                <Layer>
                    {rateItems}
                </Layer>
            </Stage>
        </>
    )

}

MoodRate.propTypes = {
    maxLevel: PropTypes.number.isRequired
}

export default MoodRate