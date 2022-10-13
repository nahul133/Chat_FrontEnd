import moment from 'moment'


export const hora = ( hora ) => {
    const hoy = moment(hora)

    return hoy.format('HH:mm a | MMMM Do')
}