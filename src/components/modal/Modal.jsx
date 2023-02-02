import React, {useEffect, useRef} from 'react'
import style from "./modal.module.css"
import { Back, WrapModal,CancelBar,CloseSpan,Btn,CloseBtn } from './ModalStyle';
import 나가기 from '../..//assets/images/나가기.svg'

export default function Modal({type, modalOpen, setModalOpen, handleModal}) {

    const pages = {
        "profile": ["설정 및 개인정보", "로그아웃"],
        "post": ["삭제", "수정"],
        "product": ["수정", "삭제", "웹사이트에서 보기"],
        "myComment": ["삭제하기"],
        "your": ["신고하기"],
        "chat": ["채팅창 나가기"]
    }

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

    return (
        <Back>
            <WrapModal ref={modalRef} type={type} >
                <CloseBtn>
                    <CloseSpan onClick= {closeModal}>나가기</CloseSpan>
                    <CancelBar src={나가기} width="12" height="12" onClick= {closeModal}> 
                    </CancelBar>
                </CloseBtn>
                {   

                }
            </WrapModal>
        </Back>
    )
}
