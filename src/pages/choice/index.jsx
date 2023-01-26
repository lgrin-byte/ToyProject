import React from 'react'
import {
    Wrap,
    ChoiceYear,
    P
} from './choiceStyle'
import {Btn} from '../../components/Button'
export default function index() {
    return (
<>
        <Wrap>
            <ChoiceYear>원하는 연도를 선택해주세요</ChoiceYear>
            <Btn type="button" attr="choice" href="/choice" >1990년대</Btn>
            <Btn type="button" attr="choice" href="/choice">2000년대</Btn>
            <Btn type="button" attr="choice" href="/choice">2010년대</Btn>
            <Btn type="button" attr="choice" href="/choice">2020년대</Btn>
            <Btn type="button" attr="choice" href="/choice">올타임레전드</Btn>
            <P>전주 10초를 듣고 30초 안에 <br/> 해당 노래의 가수, 노래 제목을<br/>맞히는 방식의 게임입니다.</P>
            <Btn type="button" href="/question/1990">게임시작</Btn>

        </Wrap>
</>
    )
}
