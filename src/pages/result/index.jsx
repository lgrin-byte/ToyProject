import React from "react";
import { Wrap, H,HB, Input ,ContYear,Box, YearTitle,Story, Share,Back} from "./resultStyle";
import { useSelector } from "react-redux";
import {Btn} from '../../components/Button'
import kakao from '../../assets/images/kakao.png'
import insta from '../../assets/images/insta.png'
import link from '../../assets/images/link.png'
import download from '../../assets/images/download.png'
import facebook from '../../assets/images/facebook.png'
import Image from 'next/image';


export default function Index() {
    const count = useSelector((state) => state.user.value);
    const btnShare = [
        [download,"이미지저장"],
        [link, "링크복사"],
        [kakao,"카카오톡"],
        [insta, "인스타그램"],
        [facebook, "페이스북"]

    ]
    return (
        <div>
            <Wrap>
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
                <H>{count.score}개</H>
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
                <Btn type="button" href="/">처음으로 돌아가기</Btn>
            </Wrap>
        </div>
    );
}
