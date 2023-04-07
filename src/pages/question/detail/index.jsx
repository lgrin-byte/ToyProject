import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import YouTube from "react-youtube";

import note from "../../../assets/images/note.png";
import timer from "../../../assets/images/timer.png";
import  answerImg from "../../../assets/images/answer.svg";
import falseImg from "../../../assets/images/false.svg";
import { Btn } from "../../../components/Button";
import { Cont_Inp, Title, Inp, MentEng } from "../../../components/InputAnswer";
import { Player } from "../../../components/Youtube";
import {
    Wrap,
    Div,
    Ment,
    Img,
    Rate,
    MyProgress,
    StateBar,
    TimerImg,
    ImageToast,
    ContToastAnswer,
    ContToastFalse
} from "../../../styles/questionStyle";
import useInterval from "../../../hooks/useInterval";
import year2020 from "../../../year2020";
import Link from "next/link";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../hooks/count/counterSlice";

export default function Question(props) {
    const count = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    const answerArr = [];
    const youtubeRef = useRef();
    const [playEvent, setPlayEvent] = useState();
    const [playState, setPlayState] = useState();
    const [singer, setSinger] = useState();
    const [title, setTitle] = useState();
    const [isActive, setIsActive] = useState("question");
    const [level, setLevel] = useState(1);
    // const arr = [1,2,3,4,5,6,7,8,9,10];
    const [second, setSecond] = useState(35);
    let [toastState, setToastState] = useState(false);
    const [color, setColor] = useState("#EF6363");

    useEffect(() => {
        if (count.music.length !== 0) {
            youtubeRef.current.updateVideo();
        } else {
            Router.push("/");
        }
    }, []);

    useInterval(
        () => {
            setSecond(second - 1);
        },
        1000,
        second,
        playState
    );

    const state = {
        play: {
            onClick: () => {
                playEvent
                    ? playEvent.target.playVideo()
                    : youtubeRef.current.updateVideo();
            },
        },
        replay: {
            onClick: () => {
                youtubeRef.current.updateVideo();
            },
        },
        pause: {
            onClick: () => {
                playEvent.target.pauseVideo();
            },
        },
    };

    useEffect(() => {
        if (playState == 1) {
            dispatch(
                login({
                    name: count.name,
                    music: count.music,
                    year: count.year,
                    musicImg: count.musicImg,
                    score: count.score,
                    state: 1,
                })
            );
        setColor("white")
        }
    }, [playState]);

    const handleAnswer = (e) => {
        // Input을 체크해서 state를 변경하는 함수.
        if (e.target.name === "singer") setSinger(e.target.value);
        else if (e.target.name === "songName") setTitle(e.target.value);
        // (singer&title) ? setIsActive("change") : setIsActive("question")
    };

    const handleBtn = () => {
        if (level < 11 && second < 35) {
            setLevel(level + 1);
            setSecond(35);
            handleCheck();
        } else {
            // Router.replace('/뮻')
        }
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            setToastState(false); // 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [toastState]);

    const handleCheck = () => {
        const answerTitle = count.music[level - 1]?.title.split("/");
        const answerSinger = count.music[level - 1]?.singer.split("/");
        let 숫자 = 0;
        console.log(
            " Bad Girl Good Girl ANTIFRAGILE heartbeat 8282 HOT".includes(
                count.music[level - 1]?.title
            )
        );
        for (let i of answerTitle) {
            i = i.toLowerCase().split(" ").join("");
            let resultData = title
                .toLowerCase()
                .split(" ")
                .join("")
                .replace(reg, "");

            if (resultData === i) {
                숫자 += 1;
                break;
            }
        }

        for (let j of answerSinger) {
            j = j.toLowerCase().split(" ").join("");
            let resultData2 = singer
                .toLowerCase()
                .split(" ")
                .join("")
                .replace(reg, "");

            if (resultData2 === j) {
                숫자 += 10;
                break;
            }
        }
        if (숫자 === 11) {
            let score = count.score + 1;
            setToastState("answer");
            dispatch(
                login({
                    name: count.name,
                    music: count.music,
                    year: count.year,
                    musicImg: count.musicImg,
                    score: score,
                    state: 1,
                })
            );
        } else {
            setToastState("false");
            dispatch(
                login({
                    name: count.name,
                    music: count.music,
                    year: count.year,
                    musicImg: count.musicImg,
                    score: count.score,
                    state: 1,
                })
            );
            // alert(`오답 정답:${answerTitle}, ${answerSinger}`)
        }
    };

    useEffect(() => {
        if (singer && title) {
            setIsActive("change");
        } else {
            setIsActive("question");
        }
    }, [singer, title]);

    if (second === 0) {
        setLevel(level + 1);
        setSecond(35);
        handleCheck();
    }

    useEffect(() => {
        if (level === 11) {
            handleBtn();

            const targerPage = "/loading";
            Router.push(targerPage);
        }
        setSinger("");
        setTitle("");
    }, [level]);
    // // 새로고침 막기 변수
    const preventClose = (e) => {
        e.preventDefault();
        e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
    };

    // // 브라우저에 렌더링 시 한 번만 실행하는 코드
    useEffect(() => {
        (() => {
            window.addEventListener("beforeunload", preventClose);
        })();

        return () => {
            window.removeEventListener("beforeunload", preventClose);
        };
    }, []);

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            focusRef.current.focus();
        }
    };
    const focusRef = useRef();
    return (
        <div className={`color${count.year}`}>
            <Wrap>
                <Div type="header">
                    <Img src={note} alt="" />

                    <span className="span">{level}/10</span>

                    <div></div>
                    {count.music.map((a, i) => (
                        <Rate range={i + 1} level={level}></Rate>
                    ))}
                    {count.year === "All" ? (
                        <span className="span">Alltime</span>
                    ) : (
                        <span className="span">{count.year}s</span>
                    )}
                </Div>
                <Player>
                    <Image
                        src={count.musicImg}
                        alt=""
                        width="327"
                        height="223"
                    />
                    {playState === 1 ? (
                        <svg
                            width="23"
                            height="28"
                            viewBox="0 0 23 28"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                            className="btn_play"
                            alt=""
                            onClick={state["pause"].onClick}
                        >
                            <path d="M8.625 0H0V28H8.625V0ZM14.375 28H23V0H14.375V28Z" />
                        </svg>
                    ) : (
                        <svg
                            width="26"
                            height="30"
                            viewBox="0 0 26 30"
                            fill={color}
                            xmlns="http://www.w3.org/2000/svg"
                            className="btn_play"
                            alt=""
                            onClick={state["play"].onClick}
                        >
                            <path d="M0.5 2.31676C0.5 1.99385 0.577083 1.67718 0.722916 1.39385C1.20208 0.477178 2.28542 0.145928 3.14583 0.656345L24.5833 13.3397C24.875 13.5126 25.1146 13.7688 25.275 14.0793C25.7542 14.9959 25.4417 16.1522 24.5833 16.6605L3.14583 29.3439C2.88437 29.4999 2.58573 29.5826 2.28125 29.5834C1.29792 29.5834 0.5 28.7334 0.5 27.6855V2.31676Z" />
                        </svg>
                    )}

                    <svg
                        width="31"
                        height="27"
                        viewBox="0 0 31 27"
                        fill="none"
                        stroke="white"
                        xmlns="http://www.w3.org/2000/svg"
                        className="btn_replay"
                        alt=""
                        onClick={state["replay"].onClick}
                    >
                        <path
                            d="M8.66653 2.5L4 6.625L8.66653 11.4375"
                            stroke-width="5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M4 6.625H19.3292C23.9179 6.625 27.8147 10.489 27.9936 15.2188C28.1826 20.2166 24.1781 24.5 19.3292 24.5H7.99893"
                            stroke-width="5"
                            stroke-linecap="round"
                        />
                    </svg>

                    {count.music[level - 1] && (
                        <YouTube
                            videoId={count.music[level - 1].url}
                            id="yotube"
                            ref={youtubeRef}
                            className="ir"
                            opts={{
                                width: "560",
                                height: "315",
                                playerVars: {
                                    start: 0.5,
                                    end: 11,
                                    autoplay: 1, //자동재생 O
                                    rel: 0, //관련 동영상 표시하지 않음
                                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                                },
                            }}
                            onPlay={(e) => {
                                e.target.playVideo();
                                setPlayEvent(e);
                                setPlayState(e.data);
                            }}
                            onPause={(e) => {
                                setPlayState(e.data);
                            }}
                            onEnd={(e) => {
                                setPlayState(e.data);
                                setPlayEvent();
                                e.target.stopVideo(0);
                            }}
                        />
                    )}
                </Player>
                <MyProgress>
                    <StateBar className="stateBar" width={second}></StateBar>
                </MyProgress>
                <Div time={second}>
                    <TimerImg
                        className="vibration"
                        time={second}
                        src={timer}
                        alt=""
                    />
                    <p className="ment">
                        재생이 안될 경우 되감기 버튼
                        <br />
                        클릭 후 2-3초 기다려주세요!
                    </p>
                    <span>{second}s</span>
                </Div>
                <Cont_Inp>
                    <Title attr={`point${count.year}`}>가수</Title>
                    <Inp
                        type="text"
                        onKeyPress={onKeyPress}
                        name="singer"
                        value={singer}
                        onChange={handleAnswer}
                    />
                </Cont_Inp>
                {"SS501 SES ses HOT H.O.T ".includes(
                    count.music[level - 1]?.singer.split("/")[0]
                ) && <MentEng>*(가수)영어/숫자로만 적어주세요.</MentEng>}
                <Cont_Inp>
                    <Title attr={`point${count.year}`}>제목</Title>
                    <Inp
                        type="text"
                        name="songName"
                        ref={focusRef}
                        value={title}
                        onChange={handleAnswer}
                    />
                </Cont_Inp>
                {" Bad Girl Good Girl ANTIFRAGILE heartbeat 8282 HOT".includes(
                    count.music[level - 1]?.title.split("/")[0]
                ) && <MentEng>*(제목)영어/숫자로만 적어주세요.</MentEng>}
                <Ment>정확한 철자가 아니면 오답처리 됩니다.</Ment>
                <Btn
                    href={level === 10 ? "/loading" : "#"}
                    attr={isActive}
                    onClick={handleBtn}
                    time={second}
                >
                    {level === 10 ? "끝!" : "다음"}
                </Btn>
                {toastState==="answer" && <ContToastAnswer> <ImageToast src={answerImg} /></ContToastAnswer>}
                {toastState==="false" && <ContToastFalse>
                                            <ImageToast src={falseImg} />
                                            <div>
                                                <p style={{color:"red", marginBottom:"4px"}}>오답!</p>
                                                <p>{count.music[level-2]?.singer.split("/")[0]}</p>
                                                <p>{count.music[level-2]?.title.split("/")[0]}</p>
                                            </div>
                                        </ContToastFalse>}
            </Wrap>
        </div>
    );
}
