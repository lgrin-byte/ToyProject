import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import YouTube from 'react-youtube';

import note from '../../../assets/images/note.png'
import cassette from '../../../assets/images/cassette.png'
import play from '../../../assets/images/play.png'
import replay from '../../../assets/images/replay.png'
import pause from '../../../assets/images/pause.png'
import timer from '../../../assets/images/timer.png'
import {Btn} from '../../../components/Button'
import {
    Cont_Inp,
    Title,
    Inp
} from '../../../components/InputAnswer'
import {Player} from '../../../components/Youtube'
import {
    Wrap,
    Div,
    Ment,
    Img,
    Rate,
    MyProgress,
    StateBar,
    TimerImg
} from './questionStyle'
import useInterval from '../../../hooks/useInterval'
import year2020 from '../../../year2020'
import { shuffle,random } from 'lodash'



export default function Question(props) {

    let QnAArr=[]
    const random1 =shuffle(year2020.low).slice(0,3);
    const random2 =shuffle(year2020.middle).slice(0,5);
    const random3 =shuffle(year2020.high).slice(0,2);

    QnAArr=[
        {singer: '소녀시대 ', title: '포에버원/FOREVER 1', url: '-sAfYm10kuE'},
        {singer: '지코 ', title: '새삥/', url: 'azaZt7eccnc'},
        {singer: '지코 ', title: '아무노래/', url: 'AAOyOZ3GeZ0'},
        {singer: '아이유 ', title: '라일락/', url: 'W475_MHV_EU'},
        {singer: '블랙핑크 BLACKPINK', title: '/Shut Down', url: 'JDRyqUx1X8M'},
        {singer: '블랙핑크 BLACKPINK', title: '/Pink Venom', url: '3or3dp3qNQU'},
        {singer: '나연 ', title: '/POP! (POP)', url: 'P8viALDvZmw'},
        {singer: '비오 BE’O', title: '자격지심/', url: 'pGJNp7qwKk4'},
        {url: 'iFDUuog1IcI', title: '블랙맘바', singer: '에스파'},
        {url: '_PBnU2eWLE4', title: '빨간 립스틱', singer: '이하이'}]

    console.log();
    const youtubeRef = useRef();
    const [playEvent, setPlayEvent] = useState();
    const [playState, setPlayState] = useState();
    const [singer, setSinger] = useState();
    const [title, setTitle] = useState();
    const [isActive, setIsActive] = useState("question");
    const [level, setLevel]=useState(0)
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const [second, setSecond] = useState(30);

useInterval(() => {

        setSecond(second - 1);
    }, 1000,second);
    const [isStartTimerOn, setIsStartTimerOn] = useState(true);
    const state = {
        play : {
            image: play,
            onClick: ()=>{
                playEvent? playEvent.target.playVideo() : youtubeRef.current.updateVideo();
            }
        },
        replay : {
            image: replay,
            onClick: ()=>{
                youtubeRef.current.updateVideo();
            }
        },
        pause : {
            image: pause,
            onClick: ()=>{
                playEvent.target.pauseVideo()
            }
        },
    }

    const handleAnswer = (e) => {
        // Input을 체크해서 state를 변경하는 함수.
        if (e.target.name === "singer") setSinger(e.target.value); 
        else if (e.target.name === "songName") setTitle(e.target.value);
        console.log(singer);
        console.log(title);

        // (singer&title) ? setIsActive("change") : setIsActive("question")
    }

    const handleBtn = () => {

        if(level<9){
            setLevel(level+1)
            setSecond(30)
        }
    }

useEffect(()=>{

    if(singer&&title){
        setIsActive("change")
    }else{
        setIsActive("question")
    }
},[singer, title])


    if(second===0){
        setLevel(level+1)
        setSecond(30)
    }




    return (
        <div className='question'>
            <Wrap>
                <Div type="header">
                    <Img src= {note} alt="" />

                    <span className='span'>{level+1}/10</span>
                    <div></div>
                    {arr.map(a=> 
                    
                        <Rate range={a} level={level+1}></Rate>)
                    }
                    <span className='span'>2020s</span>
                </Div>
                <Player>
                    <Image src={cassette}/>
                { playState=== 1 ? 
                    <Image className="btn_play" src={state["pause"].image} onClick={state["pause"].onClick}/> :
                    <Image className="btn_play" src={state["play"].image} onClick={state["play"].onClick}/> }
                    <Image className="btn_replay" src={state["replay"].image} onClick={state["replay"].onClick}/>
                    {console.log(QnAArr[level])}
                <YouTube
                    
                    videoId= {QnAArr[level].url}
                    id="yotube"
                    ref={youtubeRef}
                    className="ir"
                    opts={
                        {
                            width: "560",
                            height: "315",
                            playerVars: {

                                // start:80,
                                end:10,
                                autoplay: 1, //자동재생 O
                                rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                            },
                        }
                    }
                    onPlay={(e)=>{e.target.playVideo();
                        setPlayEvent(e)
                        setPlayState(e.data);
                        console.log("플레이",e.data);
                        
                    }}
                    onPause={(e)=> {
                        console.log(e);
                        setPlayState(e.data);
                        console.log("일정",e.data);

                    }}   
                    onEnd={(e)=>{
                        setPlayState(e.data);
                        console.log("끝",e.data);
                        setPlayEvent()
                        e.target.stopVideo(0);
                                
                                }}   
                />
                </Player>
                <MyProgress>
                    <StateBar className='stateBar' width={second}></StateBar>
                </MyProgress>
                <Div>
                    <TimerImg className='vibration' time={second} src={timer}/>
                    <p>{second}s</p>
                </Div>
                <Cont_Inp>
                    <Title>가수</Title>

                    <Inp type="text" name='singer' onChange={handleAnswer}/>
                </Cont_Inp>
                <Cont_Inp>
                    <Title>제목</Title>
                    <Inp type="text" name="songName" onChange={handleAnswer}/>
                </Cont_Inp>
                    <Ment>정확한 철자가 아니면 오답처리 됩니다.</Ment>

                <Btn href={level===9? "/result" : "/question/1990"} attr={isActive} onClick={handleBtn}>다음</Btn>



            </Wrap>
        </div>
        
    )
}
