import React, {useState} from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const TimeRange = ({handleDateChanged}) => {

    let now = new Date();
    const [selectedDate, setSelectedDate] = useState(now);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        handleDateChanged(date)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Mood date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default TimeRange
