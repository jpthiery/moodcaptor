
import DateFnsUtils from '@date-io/date-fns';


const dateFns = new DateFnsUtils();
const dateFormat = 'dd/MM/yyyy'

export const convertDateToString = (date) => {
    console.log(date)
    return dateFns.format(date, dateFormat)
}

export const convertStringToDate = (date) => {
    return dateFns.parse(date, dateFormat)
}