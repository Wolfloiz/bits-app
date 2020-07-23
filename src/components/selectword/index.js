import React from 'react'
import {WPower, WLed,WButton,WBarGraph,WRoller} from '../Game/palavras'
import{ Container} from './style'
export default function index() {
    return (
    <Container>
    <div><WPower /></div>
    <div><WLed /></div>
    <div><WButton /></div>
    <div><WBarGraph /></div>
    </Container>
    )
}
