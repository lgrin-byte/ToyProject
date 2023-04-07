import React, { useState,useEffect } from 'react'
import FeedbackModal from '../../components/modal/FeedbackModal'
import useCustomModal from "../../hooks/useCustomModal";
import ModalPortal from "../../components/modal/ModalPortal";
import FeedBack from '../../components/FeedBack';
import { db } from "../../api/firebaseConfig"; 
import { BtnBack, Wrap,Title,BtnFeedback,WrapFeed,Nickname,Feed, ContFeed ,BtnFeed} from '../../styles/feedbackStyle';
import btnBack from '../../assets/images/btnBack.png'
import btnFeedback from '../../assets/images/btnFeedback.png'
import "firebase/firestore"; 
import Image from 'next/image';
import GoogleAd from "../../hooks/GoogleAd";
import image from "../../assets/images/main.png";

export default function index() {

const {
    modalOpen,
    setModalOpen,
    showModal,
} = useCustomModal();

const [array, setArray]=useState([]);

useEffect(()=>{
    db.collection('feedback').get().then((결과)=>{
        let arr=[]
        결과.forEach((doc)=>{
        
            
 
        if(doc.data().secret){
            arr.push({...doc.data(),nickname:"비밀유저",comment:"비밀댓글입니다."})
        }
        else{arr.push(doc.data())}
            })
        const arrSort = arr.sort((a,b)=>{
            return b.publish - a.publish
        }) 
        
        setArray(arrSort)
    })
    
},[modalOpen])

    return (
    <div className='feedback'>
        <Image src={image} style={{display:"none"}}/>
        <Wrap>
        <BtnBack src={btnBack} alt="" onClick={()=>window.close()}/>
        <Title>피드백을 남겨주세요!</Title>
        <BtnFeedback onClick={showModal} attr={modalOpen}>
            <BtnFeed src={btnFeedback} />
            리뷰 작성하기</BtnFeedback>
        <ModalPortal>
                {modalOpen && 
                    <FeedbackModal 
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen} 
                            type="feedback"
                            />}    
            </ModalPortal>  
        <ContFeed>
            {array.map((a,i)=>
                <WrapFeed  key={i}>
                    <Nickname name={a.nickname}>
                        <p>{a.nickname}</p>
                        <span>{a.datetime}</span>
                    </Nickname>
                    <Feed attr={a.secret}>
                        {a.comment}
                    </Feed>
                </WrapFeed>
            )}         

        </ContFeed>
        {/* <GoogleAd/> */}
         {/* <FeedBack/> */}
        </Wrap>
    </div>
  )
}
