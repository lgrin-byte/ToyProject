import {
    Wrap,
    Input,
    ImageMain,
    WrapMain,
    ImgMain,
} from "../styles/mainStyle";
import { Btn, ModalBtn } from "../components/Button";
import Modal from "../components/modal/Modal";
import useCustomModal from "../hooks/useCustomModal";
import ModalPortal from "../components/modal/ModalPortal";
import ReactGA from "react-ga";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../hooks/count/counterSlice";
import speaker from "../assets/images/speaker.png";
import title from "../assets/images/title.png";
import main from "../assets/images/main.png";
import {
    Rate,
} from "../styles/questionStyle";
import { Div, DivRate } from "../components/Div";
import ImageNext from "next/image";
import "firebase/firestore";
import GoogleAd from "../hooks/GoogleAd";

export default function index() {
    const [isActive, setIsActive] = useState();
    const dispatch = useDispatch();
    const { modalOpen, setModalOpen, showModal } = useCustomModal();
    const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

    const handleNickname = (e) => {
        e.target.value ? setIsActive("change") : setIsActive("empty");
        dispatch(login({ name: e.target.value }));
    };

    ReactGA.initialize(TRACKING_ID);

    return (
        <Wrap>
            <Div>
                <ImageNext src={speaker} alt="" />
                <DivRate>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, i) => (
                        <Rate range={i + 1} level={10}></Rate>
                    ))}
                </DivRate>
            </Div>
            <p className="info">(게임진행을 위해 소리를 켜주세요!)</p>
            <WrapMain>
                <ImageMain src={main} alt="" />
                <ImgMain src={title} alt="무슨 노래 듣고 계세요?" />
                <ModalBtn onClick={showModal}>게임규칙</ModalBtn>
            </WrapMain>

            <ModalPortal>
                {modalOpen && (
                    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                )}
            </ModalPortal>
            <p className="start">닉네임 입력하기</p>
            <Input type="text" id="" onChange={handleNickname} />
            <Btn href="/choice" attr={isActive}>
                시작하기
            </Btn>
            <GoogleAd />
        </Wrap>
    );
}
