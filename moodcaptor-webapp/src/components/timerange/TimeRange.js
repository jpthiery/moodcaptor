import React, {useState} from "react";
import DateFnsUtils from "@date-io/date-fns";

import DateSelector from "../dateselector/DateSelector";
import {convertStringToDate} from "../../date_utils";

import translate from "../../translations"

const TimeRange = ({startDateSelected, endDateSelected, timeRangeChanged}) => {

    const dateFns = new DateFnsUtils()

    const definedStart = convertStringToDate(startDateSelected);
    const definedEnd = convertStringToDate(endDateSelected);
    const [start, setStart] = useState(definedStart)
    const [end, setEnd] = useState(definedEnd)
    const t = translate.use().TimeRange

    const startChanged = newDate => {
        let endDate = end
        if (dateFns.isAfter(newDate, end)){
            setEnd(newDate)
            endDate = newDate
        }
        setStart(newDate)
        timeRangeChanged(newDate, endDate)
    }

    const endChanged = newDate =>  {
        let startDate = start
        if (dateFns.isBefore(newDate, start)){
            setStart(newDate)
            startDate = newDate
        }
        setEnd(newDate)
        timeRangeChanged(startDate, newDate)
    }

    return (
        <>
            <DateSelector label={t.start} date={definedStart} maxDate={definedEnd} handleDateChanged={date => startChanged(date)}/>
            <DateSelector label={t.end} date={definedEnd} minDate={definedStart} handleDateChanged={date => endChanged(date)}/>
        </>
    )

}

export default TimeRange
