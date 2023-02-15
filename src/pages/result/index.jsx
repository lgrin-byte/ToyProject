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

export default function Index() {
    const count = useSelector((state) => state.user.value);
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
            imageUrl: "kakao",
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

    return (
        <div>
            <Wrap>
                <Card/>
                <p>'{count.name}'님의 점수는?</p>
                <ContYear attr="cont">
                <YearTitle> 
                <H>2020s</H>
                <HB>2020s</HB>
                
                </YearTitle>
                <ContYear attr="effect">
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((a, i)=> 
                    <Box></Box>)       }
                </ContYear>
                </ContYear>
                    <Back></Back>

                <ContYear attr="cont">
                
                <ContYear attr="score">
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((a, i)=> 
                    <Box></Box>)       }
                    
                </ContYear>
                <YearTitle> 
                <H  onClick={onClicFacebook}>{count.score}개</H>
                <HB>{count.score}개</HB>
                
                </YearTitle>
                </ContYear>
                {/* <h2>갓 오브 뮤직</h2> */}
                <Story>
                    당신의 삶의 유일한 보약은 music..?<br/> 어떻게 이걸 다 맞히죠?<br/>
                    일반인의 권한으로 한문제도 빠짐 없이<br/>모두 맞혀버린
                    당신에게는<br/>갓 오브 뮤직 상을 드리고 싶습니다.
                </Story>
                <p>공유하기</p>
                <ContYear attr="cont_share">
                {btnShare.map(a=>
                    <ContYear attr="share">
                        <Image src={a[0]}/>
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
