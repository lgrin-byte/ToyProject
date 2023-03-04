import React, {useEffect, useRef, useState} from 'react'
import style from "./modal.module.css"
import { WrapModal,CancelBar,CloseSpan,Btn,CloseBtn } from './ModalStyle';
import { Back,Wrap,Cont,Input,CheckBox,Comment,BtnSubmit } from './FeedbackModalStyle';
import 나가기 from '../..//assets/images/나가기.svg'
import { db } from "../../api/firebaseConfig"; 
import "firebase/firestore"; 

export default function FeedbackModal({type, modalOpen, setModalOpen, handleModal}) {
    const [name, setName] = useState();
    const [comment, setComment] = useState();
    const [isActive, setIsActive] = useState();
    const [isSecret, setIsSecret] = useState(false);
    const onChange = ({ target }) => {target.checked ? setIsSecret(true) : setIsSecret(false);}; 
    const focusRef = useRef();

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef();
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };
        
        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    const handleFeedback = (e) => {
        // Input을 체크해서 state를 변경하는 함수.
        if (e.target.name === "name") setName(e.target.value); 
        else if (e.target.name === "comment") setComment(e.target.value);
    }
    useEffect(()=>{

    
        if(name&&comment){
            setIsActive("active")
        }else{
            setIsActive("")
        }


    },[name, comment])
    const onKeyPress=(e)=>{
        if(e.key==='Enter'){
            focusRef.current.focus();
        }
    }
    const addData = () => {
        const now = new Date();
        const year = (now.getFullYear()+"").slice(2,);
        let month= ('0' + (now.getMonth()+1)).slice(-2);
        let day= ('0' + now.getDate()).slice(-2); 
        var hours = ('0' + now.getHours()).slice(-2); 
        var minutes = ('0' + now.getMinutes()).slice(-2);
        var seconds = ('0' + now.getSeconds()).slice(-2); 

        db.collection('feedback').add(
            {nickname: name,
            comment: comment,
            datetime:`${year}.${month}.${day}`,
            publish:parseInt(year+month+day+hours+minutes+seconds),
            secret:isSecret
        }
        )
            
        .then(() => {
            closeModal()
        }).catch(err => {
            console.log(err);
        }
        )
    }

    return (
        <Back>
            <Wrap  ref={modalRef}>
            <WrapModal type={type} >
                <Cont>
                    <Input type="text" name='name' value={name} onChange={handleFeedback} onKeyPress={onKeyPress} maxLength={7} placeholder='닉네임을 입력해주세요.'/>
                    <CheckBox>
                        <input type="checkbox" id="secret"  onClick={onChange}/>
                        <label htmlFor="secret" onClick={onChange} >비밀글</label>
                    </CheckBox>
                </Cont>
                <Comment id="comment" name='comment' value={comment}  ref={focusRef}  onChange={handleFeedback} cols="30"  maxLength={100} rows="5" placeholder='내용을 작성해주세요'></Comment>
            </WrapModal>
            <BtnSubmit attr={isActive} onClick={addData}>올리기</BtnSubmit>
            </Wrap>
        </Back>
    )
}
