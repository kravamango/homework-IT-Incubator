import React from 'react'
import {Message} from "./Message";

let dataNow = new Date ();
let hours: number | string = dataNow.getHours ();
let minets: number | string = dataNow.getMinutes ();

if (minets < 10) minets = '0' + minets;
if (hours < 10) hours = '0' + hours;

const time: string = `${hours}:${minets}`

const messageData = {
    avatar: 'https://i.pinimg.com/originals/d5/0a/56/d50a56ed1385fd95bad3eb8ef6a17e6f.jpg',
    name: 'Twenty Seven 💙',
    message: 'Jeg er det dikt\n' +
        'Jeg er det dikt som ingen skrev\n' +
        '\n' +
        'Jag er det alltid brente brev.\n' +
        'Jag er den ubetrеdte sti\n' +
        '\n' +
        'Og tonen uten melodi\n' +
        'Jeg er den stumme leppes bǿnn\n' +
        '\n' +
        'Jeg er en ufǿdt kvinnes sǿnn,\n' +
        'En streng som ingen hand har spent,\n' +
        '\n' +
        'Et bеl som aldrig er blitt tent.\n' +
        '\n' +
        '\n' +
        'Vekk meg! Forlǿs meg! Lǿft meg opp\n' +
        '\n' +
        'Av jord og berg, av еnd og kropp!\n' +
        '\n' +
        '\n' +
        'Men intet svarer nеr jeg ber.\n' +
        '\n' +
        'Jeg er de ting som aldrig skjer.',
    time: time,
}

function HW1() {
    return (
        <div>
            <hr/>
            homework1
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
