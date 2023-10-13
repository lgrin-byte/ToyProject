import React, { useState } from "react";
import { Cont_Inp, Title, Inp, BtnLogin } from "../components/InputAnswer";
import { WrapLogin } from "../styles/feedbackStyle";

export default function Login({ setIsLoading }) {
    const [password, setPassword] = useState();

    const onClick = () => {
        console.log(password);
        if (password == "123456") {
            setIsLoading(false);
        } else {
            alert("비밀번호가 불일치합니다.");
        }
    };

    const handleAnswer = (e) => {
        setPassword(e.target.value);
    };

    return (
        <WrapLogin>
            <h2>비밀번호를 입력하세요</h2>
            <Cont_Inp>
                <Inp type="password" value={password} onChange={handleAnswer} />
                <BtnLogin onClick={onClick}>로그인</BtnLogin>
            </Cont_Inp>
        </WrapLogin>
    );
}
