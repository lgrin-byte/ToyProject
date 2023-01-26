import React, { useRef, useState } from 'react'
import Image from 'next/image';
import YouTube from 'react-youtube';
import note from '../../../assets/images/note.png'
import cassette from '../../../assets/images/cassette.png'
import play from '../../../assets/images/play.png'
import replay from '../../../assets/images/replay.png'
import pause from '../../../assets/images/pause.png'
import {Btn} from '../../../components/Button'

import {
    Wrap,
    Div,
    Input,
    Ment,
    Img,
    Rate
} from './questionStyle'
import {Player} from '../../../components/Youtube'


export default function Question() {
    const youtubeRef = useRef();

    const [playEvent, setPlayEvent] = useState();
    const [playState, setPlayState] = useState(); 
    const arr = [1,2,3,4,5,6,7,8,9,10];
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

    return (
        <Wrap>
            <Div type="header">
                <Img src= {note} alt="" />
                <span className='span'>2/10</span>
                <div></div>
                {arr.map(a=> <Rate></Rate>)
                }
                <span className='span'>2020s</span>
            </Div>
            <Player>
                <Image src={cassette}/>
            { playState=== 1 ? 
                <Image className="btn_play" src={state["pause"].image} onClick={state["pause"].onClick}/> :
                <Image className="btn_play" src={state["play"].image} onClick={state["play"].onClick}/> }
                <Image className="btn_replay" src={state["replay"].image} onClick={state["replay"].onClick}/>

            <YouTube
                videoId= "jeqdYqsrsA0"
                id="yotube"
                ref={youtubeRef}
                className="ir"
                opts={
                    {
                        width: "560",
                        height: "315",
                        playerVars: {
                            start:80,
                            end:90,
                            autoplay: 1, //자동재생 O
                            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                    }
                }
                onPlay={(e)=>{e.target.playVideo();
                    console.log(e.target.getDuration());
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
            <div>시간초바</div>
            <span>가수</span>
            <Input type="text" />
            <span>제목</span>
            <Input type="text"/>
            <Ment>정확한 철자가 아니면 오답처리 됩니다.</Ment>
            <Btn href="/choice" attr='question'>다음</Btn>


        </Wrap>
    )
}
