import React, { useEffect } from "react";
import {
    Wrap,
    H,
    HB,
    Input,
    ContYear,
    Box,
    YearTitle,
    Story,
    Share,
    Back,
    ContAnswer,
    Answer,
    AnswerTitle,
    ImageFeed,
    SpanFeed,
    SpanFeedB,
    ContBtn,
} from "../../styles/resultStyle";
import { useSelector } from "react-redux";
import { BtnResult, BtnContYear } from "../../components/Button";
import kakao from "../../assets/images/kakao.png";
import link from "../../assets/images/link.png";
import download from "../../assets/images/download.png";
import facebook from "../../assets/images/facebook.png";
import feedback from "../../assets/images/리뷰.png";

import Image from "next/image";
import useCopyClipBoard from "../../hooks/useCopyClipBoard";
import Card from "../../components/Card";
import { useRef } from "react";
// import './card.css';
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Router, { useRouter } from "next/router";

export default function Index() {
    const count = useSelector((state) => state.user.value);
    console.log(count);
    const inputRef = useRef(null);
    const arrMusic = [];
    const [isCopy, onCopy] = useCopyClipBoard();
    const { query } = useRouter();
    const text = `http://localhost:3001/result?name=${query.name}&year=${query.year}&score=${query.score}`;

    useEffect(() => {
        if (!Kakao.isInitialized()) {
            Kakao.init("a5eeb8ae193084c262275b9c23960ce8");
        }
    }, []);
    const onClicFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=http://localhost:3001/result?name=${query.name}&year=${query.year}&score=${query.score}/`
        );
    };
    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "무슨노래듣고계세요?",
                description: `당신의 삶의 유일한 보약은..?`,
                imageUrl: "%PUBLIC_URL%/favicon.ico",
                link: {
                    mobileWebUrl: "https://www.naver.com/",
                    androidExecParams: "test",
                },
            },
            buttons: [
                {
                    title: "문제맞추러가보기",
                    link: {
                        mobileWebUrl: "https://www.naver.com/",
                    },
                },
            ],
        });
    };

    const handleCopyClipBoard = () => {
        onCopy(text);
    };
    //    const cardRef = useRef();
    const onDownloadBtn = () => {
        const card = inputRef.current;
        domtoimage.toBlob(card).then((blob) => {
            saveAs(blob, `${query.score}'s_card.png`);
        });
    };

    const btnShare = [
        {
            image: download,
            title: "이미지저장",
            handle: onDownloadBtn,
        },
        { image: link, title: "링크복사", handle: handleCopyClipBoard },
        { image: kakao, title: "카카오톡", handle: shareKakao },
        { image: facebook, title: "페이스북", handle: onClicFacebook },
    ];
    return (
        <div className={`color${query.year}`}>
            <Wrap>
                <Card ref={inputRef} year={`color${count.year}`} data={query} />

                <p>공유하기</p>
                <ContYear attr="cont_share">
                    {btnShare.map((a) => (
                        <ContYear attr="share">
                            <Image
                                src={a.image}
                                onClick={a.handle}
                                style={{ cursor: "pointer" }}
                            />
                            <Share>{a.title}</Share>
                        </ContYear>
                    ))}
                </ContYear>
                {/* {isCopy && <span>복사 완료!!</span>} */}
                {count.year !== "" && (
                    <ContAnswer>
                        <AnswerTitle>정답/출처</AnswerTitle>
                        {count.music.map((x) => (
                            <Answer>
                                {x.singer.split("/")[0]}-{x.title.split("/")[0]}
                                (https://youtu.be/{x.url})
                            </Answer>
                        ))}
                    </ContAnswer>
                )}

                <BtnResult type="button" href="/">
                    처음으로 돌아가기
                </BtnResult>
                <BtnContYear attr="feedback" href="/feedback" legacyBehavior>
                    <a target="_blank">
                        <ContBtn>
                            <ImageFeed src={feedback} />
                            <SpanFeedB>
                                리뷰 작성하기
                                <br />
                                /보러가기
                            </SpanFeedB>
                            <SpanFeed>
                                리뷰 작성하기
                                <br />
                                /보러가기
                            </SpanFeed>
                        </ContBtn>
                    </a>
                </BtnContYear>
            </Wrap>
        </div>
    );
}
