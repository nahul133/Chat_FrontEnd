import { animateScroll } from 'react-scroll'


export const scroll = ( id ) => {

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    });

}



export const scrollAnimado = ( id ) => {

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    });

}