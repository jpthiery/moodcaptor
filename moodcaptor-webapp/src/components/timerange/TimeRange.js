import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const TimeRange = ({handleDateChanged}) => {

    const dateFns = new DateFnsUtils();
    const dateFormat = 'dd/MM/yyyy'
    let now = new Date();
    const [selectedDate, setSelectedDate] = React.useState(now);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        handleDateChanged(dateFns.format(date, dateFormat))
    };

    handleDateChanged(dateFns.format(now, dateFormat))

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
