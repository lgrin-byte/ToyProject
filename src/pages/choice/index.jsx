import React from 'react'
import {
    Wrap,
    BtnYear,
    BtnChoice,
    P
} from './choiceStyle'

export default function index() {
    return (
<>
        <Wrap>
            <BtnYear type="button" href="/choice" >1990년대</BtnYear>
            <BtnYear type="button" href="/choice">2000년대</BtnYear>
            <BtnYear type="button" href="/choice">2010년대</BtnYear>
            <BtnYear type="button" href="/choice">2020년대</BtnYear>
            <BtnYear type="button" href="/choice">올타임레전드</BtnYear>
            <P>전주 10초를 듣고 30초 안에 <br/> 해당 노래의 가수, 노래 제목을<br/>맞히는 방식의 게임입니다.</P>
            <BtnChoice type="button" href="/question/1990">게임시작</BtnChoice>

        </Wrap>
</>
    )
}
