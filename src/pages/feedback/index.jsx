import React, { useState,useEffect } from 'react'
import FeedbackModal from '../../components/modal/FeedbackModal'
import useCustomModal from "../../hooks/useCustomModal";
import ModalPortal from "../../components/modal/ModalPortal";
import FeedBack from '../../components/FeedBack';
import { db } from "../../api/firebaseConfig"; 
import { BtnBack, Wrap,Title,BtnFeedback,WrapFeed,Nickname,Feed, ContFeed ,BtnFeed} from '../../styles/feedbackStyle';
import btnBack from '../../assets/images/btnBack.png'
import btnFeedback from '../../assets/images/btnfeedback.png'
import "firebase/firestore"; 
import Image from 'next/image';

export default function index() {
const arr = [
    {name:"냥",
    comment:"안녕하세요",
    datetime:"23.03.02",
    secret:true},
    {name:"냥냥",
        comment:"나영너리오ㅓ랸얼ㄴ나영너리오ㅓ랸얼ㄴ나영너리오ㅓ랸얼ㄴ나영너리오ㅓ랸얼ㄴ나영너리오ㅓ랸얼ㄴ나영너리오ㅓ랸얼ㄴ나영너리오ㅓ랸얼ㄴ",
        datetime:"20230302",
        secret:true},
    {name:"뇽뇽",
    comment:"나영너리오ㅓ랸얼ㄴ",
    datetime:"20230302",
    secret:false},
    ]
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
        //         arr.push(doc.data())
        else{arr.push(doc.data())}
            })
        // if(!arr[-1]){
        //     arr.pop()
        // }
        const arrSort = arr.sort((a,b)=>{
            return b.publish - a.publish
        }) 
        
        setArray(arrSort)
    })
    
},[modalOpen])

    return (
    <div className='feedback'>
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
                    <Nickname>
                        <p>{a.nickname}</p>
                        <span>{a.datetime}</span>
                    </Nickname>
                    <Feed attr={a.secret}>
                        {a.comment}
                    </Feed>
                </WrapFeed>
            )}         

        </ContFeed>
         {/* <FeedBack/> */}
        </Wrap>
    </div>
  )
}
