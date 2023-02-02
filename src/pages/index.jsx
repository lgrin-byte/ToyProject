import {
    Wrap,
    H,
    HB,
    Image,
    Input,
    ImageMain,
    WrapMain
} from './mainStyle'
import {Btn} from '../components/Button'
import Modal from '../components/modal/Modal'
import useCustomModal from "../hooks/useCustomModal";
import ModalPortal from "../components/modal/ModalPortal";

import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,login } from "./count/counterSlice";
import speaker from '../assets/images/speaker.png'
import main from '../assets/images/main.png'
import {
    // Div,
    Ment,
    Img,
    Rate,
    MyProgress,
    StateBar,
    TimerImg
} from './question/[id]/questionStyle'
import {Div, DivRate} from '../components/Div'
import ImageNext from 'next/image';

export default function index() {
    const [isActive, setIsActive] = useState();
    const count = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const {
        modalOpen,
        setModalOpen,
        showModal,
    } = useCustomModal();

    const handleNickname = (e)=>{
        console.log(e.target.value);
        e.target.value? setIsActive("change") :setIsActive("empty") 
        dispatch(login({name: e.target.value}))
        console.log("skdi",count.name)
    }
    


    return (
        <Wrap>
        
        <Div>
            <ImageNext src={speaker}  alt="" />
            <DivRate>
                {[1,2,3,4,5,6,7,8,9,10].map((a, i)=> 
                    <Rate range={i+1} level={10}></Rate>)
                }
            </DivRate>
        </Div>
            <p className='info'>(게임진행을 위해 소리를 켜주세요!)</p>
            <WrapMain>
                <ImageMain src={main} alt=""/>
                <H>무슨 노래 <br/> 듣고 계세요?</H>
                <HB>무슨 노래 <br/> 듣고 계세요?</HB>
                
            </WrapMain>
            <button onClick={showModal}>모달</button>
            <ModalPortal>
                {modalOpen && 
                    <Modal 
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen} 
                            />}    
            </ModalPortal>  
            <p className='start'>닉네임 입력하기</p>
            <Input type="text" id='' onChange={handleNickname}/>
            <Btn href="/choice" attr={isActive} >
                시작하기
            </Btn>
        </Wrap>
    )
}
