import moment from 'moment';
export const convertToDays = (date: string): string => {
    const receivedDate = moment(date, 'DD/MM/YYYY HH:mm:ss', true);

    if (!receivedDate.isValid()) {
        return 'Formato de data inválido';
    }
    const currentDate = moment();
    const differenceBetweenDates = currentDate.diff(receivedDate, 'days');
    return `${differenceBetweenDates} dias atrás`;
}