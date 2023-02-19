import React,{ useEffect } from "react";
import { Wrap, H,HB, Input ,ContYear,Box, YearTitle,Story, Share,Back} from "./resultStyle";
import { useSelector } from "react-redux";
import {Btn} from '../../components/Button'
import kakao from '../../assets/images/kakao.png'
import insta from '../../assets/images/insta.png'
import link from '../../assets/images/link.png'
import download from '../../assets/images/download.png'
import facebook from '../../assets/images/facebook.png'
import Image from 'next/image';
import useCopyClipBoard from '../../hooks/useCopyClipBoard';
import Card from "../../components/Card";

import {useRef} from 'react';
// import './card.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';


export default function Index() {
    const count = useSelector((state) => state.user.value);
    const inputRef = useRef(null);

    const [isCopy, onCopy] = useCopyClipBoard();
    const text="복사"
    const btnShare = [
        [download,"이미지저장"],
        [link, "링크복사"],
        [kakao,"카카오톡"],
        [insta, "인스타그램"],
        [facebook, "페이스북"]

    ]
        useEffect(() => {
            if (!Kakao.isInitialized()) {
                Kakao.init("a5eeb8ae193084c262275b9c23960ce8");

            };
        }, []);
    const  onClicFacebook = () => {
            window.open('https://www.facebook.com/sharer/sharer.php?u=https://naver.com/')
          }
    const shareKakao = () => {
        Kakao.Link.sendDefault({
        objectType: "feed",
            content: {
            title: "무슨노래듣고계세요?",
            description: "내용은 미저어엉",
            imageUrl: "/favicon.ico",
            link: {
                mobileWebUrl: "모바일 url!",
                androidExecParams: "test",
            },
            },
            buttons: [
            {
                title: "웹으로 이동",
                link: {
                mobileWebUrl: "공유할 url!",
                },
            },
            ],
        });
    }
  

    const handleCopyClipBoard = () => {
      onCopy(text);
    };
//    const cardRef = useRef();
    const onDownloadBtn = () => {
      const card = inputRef.current;
      domtoimage
        .toBlob(card)
        .then((blob) => {
          saveAs(blob, 'card.png');
        });
    };
    return (
        <div>
            <Wrap>
                <Card  ref={inputRef}/>
                
                <p>공유하기</p>
                <ContYear attr="cont_share">
                {btnShare.map(a=>
                    <ContYear attr="share">
                        <Image src={a[0]} onClick={onDownloadBtn}/>
                        <Share>{a[1]}</Share>
                    </ContYear>
                )}
                </ContYear>
                {isCopy && <span>복사 완료!!</span>}
                <Btn type="button" href="/">처음으로 돌아가기</Btn>
            </Wrap>
        </div>
    );
}
