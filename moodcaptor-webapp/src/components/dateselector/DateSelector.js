import React, {useState} from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DateSelector = ({
                          date = new Date(),
                          label = "Mood date",
                          minDate,
                          maxDate,
                          handleDateChanged
                      }) => {


    const handleDateChange = (date) => {
        handleDateChanged(date)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label={label}
                value={date}
                onChange={handleDateChange}
                disableFuture
                minDate={minDate}
                maxDate={maxDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DateSelector
