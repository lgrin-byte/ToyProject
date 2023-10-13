import React, { useEffect, useRef } from "react";
import {
    WrapModal,
    WrapModal2,
    BtnClose,
    BtnDelete,
    Btn,
    CloseBtn,
} from "./ModalStyle";
import {
    Back,
    Wrap,
    Cont,
    Input,
    CheckBox,
    Comment,
    BtnSubmit,
} from "../styles/feedbackModalStyle";
import { db } from "../../api/firebaseConfig";
import "firebase";

export default function ConfirmModal({ setModalOpen, selected }) {
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
        document.addEventListener("mousedown", handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener("mousedown", handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    const deleteFeed = () => {
        console.log(selected);
        db.collection("feedback").doc(selected).delete();
        closeModal();
    };
    return (
        <Back type="manage">
            <Wrap ref={modalRef}>
                <WrapModal2>
                    <p>삭제하시겠습니까?</p>
                    <BtnClose onClick={closeModal}>취소</BtnClose>
                    <BtnDelete onClick={deleteFeed}>삭제</BtnDelete>
                </WrapModal2>
            </Wrap>
        </Back>
    );
}
