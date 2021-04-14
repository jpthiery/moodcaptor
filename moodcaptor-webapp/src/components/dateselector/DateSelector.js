import React from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import translate from "../../translations";

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
    const t = translate.use().DateSelector

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format={t.dateFormat}
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
