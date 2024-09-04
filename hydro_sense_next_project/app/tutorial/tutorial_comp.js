//integrar toda lógica do socket.io

'use client' // indica que vai renderizar no browser do client

import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'


export default function TutorialComp(props){

    const socket = io("http://localhost:5000");//aqui ao invés de localhost ele colocou o ip dele

    useEffect(() => {

        socket.on("connect", () => {
            console.log(socket.id)
        })

        return () => {
            socket.disconnect()
        };

    }, [])


    return("página tutorial :)")

}
