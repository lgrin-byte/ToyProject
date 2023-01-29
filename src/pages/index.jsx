import {
    Wrap,
    H,
    Image,
    Input
} from './mainStyle'
import {Btn} from '../components/Button'
import { useState } from 'react'

export default function index() {
    const [isActive, setIsActive] = useState();

    const handleNickname = (e)=>{
        console.log(e.target.value);
        e.target.value? setIsActive("change") :setIsActive("empty") 
    }

    return (
        <Wrap>
            <H>무슨 노래 <br/> 듣고 계세요?</H>
            <Image>일러스트</Image>
            <p className='start'>닉네임 입력하기</p>
            <Input type="text" id='' onChange={handleNickname}/>
            <Btn href="/choice" attr={isActive}>
                다음 페이지
            </Btn>
        </Wrap>
    )
}
