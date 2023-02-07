import React, {useEffect, useRef} from 'react'
import style from "./modal.module.css"
import { Back, WrapModal,CancelBar,CloseSpan,Btn,CloseBtn,TitleBox, PlayBox, UlModal, LiModal ,ExplainImg, RedSpan} from './ModalStyle';
import 나가기 from '../../assets/images/나가기.svg'
import title from '../../assets/images/titleBox.png'
import alert from '../../assets/images/alert.png'
import example from '../../assets/images/example.png'
import Image from 'next/image';


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
                <TitleBox>
                    <Image src={title}/>
                    <PlayBox><RedSpan>전주 10초</RedSpan>를 듣고 <RedSpan>제한시간 30초</RedSpan> 안에 <br/><RedSpan>가수, 제목</RedSpan>을 입력해주세요.</PlayBox>
                    <div className='contMargin'></div>
                    <Image src={alert}/>
                    <PlayBox>
                        <UlModal>

                            <LiModal><p>전주 10초는 다시듣기 가능합니다.</p></LiModal>
                            <LiModal><p>‘새로고침, 뒤로가기’ 클릭 시<br/>
                                메인화면으로 이동하게 됩니다.</p></LiModal>
                            <LiModal><p>맞춤법이 다를시 오답처리됩니다.</p></LiModal>
                            <LiModal><p>‘영어로 적어주세요'문구가 있는 칸은 <RedSpan>영문,숫자로만 기입</RedSpan>해주세요.<br/>
                            <RedSpan>(한글 작성시 오답처리됩니다.)</RedSpan></p>
                                <ExplainImg src={example}/>
                                </LiModal>
                            <LiModal><p>띄어쓰기, 특수문자, 대소문자는<br/>
                                오답처리에 반영되지 않습니다.</p></LiModal>
                        </UlModal>
                    </PlayBox>
                </TitleBox>

            </WrapModal>
        </Back>
    )
}
