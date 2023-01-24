import React, { useRef, useState } from 'react'
import YouTube from 'react-youtube';
import {
    Wrap,
    Div,
    Player,
    Btn,
    Input,
    Ment
} from './questionStyle'

export default function Question() {
    const youtubeRef = useRef();
    const [play, setPlay] = useState();
    const onPlay =(e)=>{
        // youtubeRef.current.onPlay()
        e.current.props.onPlay
        console.log(e.current.props.onPlay);
    }

    const handleDiv = (e)=>{
        // console.log(e.target.children[0].stopVideo(0))
    }

    return (
        <Wrap>
            <Div>
                <span>2/10</span>
                <span>1990년대</span>
            </Div>
            <div>진행바</div>
            <Player>
            <YouTube
                videoId= "jeqdYqsrsA0"
                id='yotube'
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
                    setPlay(e)}}
                onPause={(e)=> {
                    console.log(e);

                }}   
                onEnd={(e)=>{e.target.stopVideo(0);
                            console.log(e);
                            
                            }}   
            />
            <Div>
                <Btn onClick={()=>{
                    // youtubeRef.current.updateVideo();
                    play.target.playVideo()

                }}>재생</Btn>
                <Btn onClick={()=>{
                    youtubeRef.current.updateVideo();

                }}>처음부터</Btn>
                <Btn onClick={()=>{
                    // play.onStateChange(2)
                    // play.target.stopVideo()
                    play.target.pauseVideo()
                }}>일시정지</Btn>
            </Div>
            </Player>
            <div>시간초바</div>
            <span>가수</span>
            <Input type="text" />
            <span>제목</span>
            <Input type="text"/>
            <Ment>정확한 철자가 아니면 오답처리 됩니다.</Ment>
            <Btn>다음</Btn>


        </Wrap>
    )
}
