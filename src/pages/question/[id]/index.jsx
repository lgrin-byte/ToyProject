import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import YouTube from 'react-youtube';

import note from '../../../assets/images/note.png'
import year2020img from '../../../assets/images/year2020.png'
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
    TimerImg,
    
} from './questionStyle'
import RefreshModal from '../../../components/modal/FeedbackModal'
import useCustomModal from "../../../hooks/useCustomModal";
import ModalPortal from "../../../components/modal/ModalPortal";

import useInterval from '../../../hooks/useInterval'
import year2020 from '../../../year2020'
import { shuffle,random } from 'lodash'
import Link from 'next/link';
import Router from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,login } from "../../count/counterSlice";



export default function Question(props) {
    const count = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    // let count.music=[]
    const random1 =shuffle(year2020.low).slice(0,3);
    const random2 =shuffle(year2020.middle).slice(0,5);
    const random3 =shuffle(year2020.high).slice(0,2);

    const answerArr = []
    const youtubeRef = useRef();
    const [playEvent, setPlayEvent] = useState();
    const [playState, setPlayState] = useState();
    const [singer, setSinger] = useState();
    const [title, setTitle] = useState();
    const [isActive, setIsActive] = useState("question");
    const [level, setLevel]=useState(1)
    // const arr = [1,2,3,4,5,6,7,8,9,10];
    const [second, setSecond] = useState(30);
    const {
        modalOpen,
        setModalOpen,
        showModal,
    } = useCustomModal();
    useEffect(
        ()=>{

            if(level===1 ){
                if(count.music.length!==0){
                    console.log(count.music);
                    youtubeRef.current.updateVideo();}
                else{
                    Router.push("/")

                }

            }else if(!youtubeRef.current.updateVideo()){
            
            }
        },[]

    )

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
        // console.log(singer);
        // console.log(title);

        // (singer&title) ? setIsActive("change") : setIsActive("question")
    }

    const handleBtn = () => {
        if(level<10){
            setLevel(level+1)
            setSecond(30)
            handleCheck()
        }
        else{
            // Router.replace('/')
        }
    }
const handleCheck = ()=>{
    // answerArr.push({title, singer})
    const answerTitle=count.music[level-1].title.split("/")
    const answerSinger=count.music[level-1].singer.split("/")
    let 숫자=0
    for (let i of answerTitle){
        i=i.toLowerCase().split(' ').join('');
        console.log(answerTitle,":",i);
        if(title.toLowerCase().split(' ').join('')=== i  ){
                숫자+=1
                break
            }
        }
    
    for (let j of answerSinger){
        j=j.toLowerCase().split(' ').join('');
        console.log(j);
        if(singer.toLowerCase().split(' ').join('') === j ){
            console.log("정답입니다");
            숫자+=10
            break
        }}
        if(숫자===11){
            let score=count.score+1
            console.log(score);
            dispatch(login({ name: count.name ,music : count.music, year:count.year,musicImg:count.musicImg, score:score}))

        }
    console.log(숫자);
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
        handleCheck()
        
    }

    useEffect(()=>{
        if(level===11){
            
            handleBtn()

            const targerPage = '/loading';
            Router.push(targerPage);
            // Router.replace('/')
        }
        setSinger("")
        setTitle("")
    },[level])
// 새로고침 막기 변수
const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
}

// 브라우저에 렌더링 시 한 번만 실행하는 코드
useEffect(() => {
    (() => {
        window.addEventListener("beforeunload", preventClose);    
    })();

    return () => {
        window.removeEventListener("beforeunload", preventClose);
    };
},[]);

const onKeyPress=(e)=>{
    if(e.key==='Enter'){
        focusRef.current.focus();
    }
}
const focusRef = useRef();
    return (
        <div className={`color${count.year}`}>
            <Wrap>
                <Div type="header">
                    <Img src= {note} alt="" />

                    <span className='span'>{level}/10</span>

                    <div></div>
                    {count.music.map((a, i)=> 
                    
                        <Rate range={i+1} level={level}></Rate>)
                    }
                {count.year==='All'?<span className='span'>Alltime</span>: 
                    <span className='span'>{count.year}s</span>}
                </Div>
                <Player>
                    <Image src={count.musicImg} alt=""  width= "327" height= "223"/>
                { playState=== 1 ? 
                    <Image className="btn_play" alt="" src={state["pause"].image} onClick={state["pause"].onClick}/> :
                    <Image className="btn_play" alt="" src={state["play"].image} onClick={state["play"].onClick}/> }
                    <Image className="btn_replay" alt="" src={state["replay"].image} onClick={state["replay"].onClick}/>
                    {count.music[level-1]&&<YouTube
                    
                    videoId= {count.music[level-1].url}
                    id="yotube"
                    ref={youtubeRef}
                    className="ir"
                    opts={
                        {
                            width: "560",
                            height: "315",
                            playerVars: {
                                start:0.5,
                                end:11,
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
                        console.log("",count.music[level-1].title)
                        console.log("",count.music[level-1].singer)
                        
                    }}
                    onPause={(e)=> {
                        console.log(e);
                        setPlayState(e.data);
                        console.log("일시정지",e.data);

                    }}   
                    onEnd={(e)=>{
                        setPlayState(e.data);
                        console.log("끝",e.data);
                        setPlayEvent()
                        e.target.stopVideo(0);
                                
                                }}   
                />}
                </Player>
                <MyProgress>
                    <StateBar className='stateBar' width={second}></StateBar>
                    
                </MyProgress>
                <Div  time={second}>
                    <TimerImg className='vibration' time={second} src={timer} alt=""/>
                    <p >{second}s</p>
                </Div>
                <Cont_Inp>
                    <Title attr={`point${count.year}`}>가수</Title>
                    <Inp type="text" onKeyPress={onKeyPress} name='singer' value={singer} onChange={handleAnswer}/>
                </Cont_Inp>
                <Cont_Inp>
                    <Title attr={`point${count.year}`}>제목</Title>
                    <Inp type="text" name="songName" ref={focusRef}  value={title} onChange={handleAnswer}/>
                </Cont_Inp>
                    <Ment>정확한 철자가 아니면 오답처리 됩니다.</Ment>
                <Btn href={level===10? "/loading" : "#"} attr={isActive} onClick={handleBtn}>{level===10? "끝!" : "다음"}</Btn>
            </Wrap>
        </div>
        
    )
}
