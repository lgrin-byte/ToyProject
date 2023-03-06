import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import result1 from "../../public/result1.png";
import result2 from "../../public/result2.png";
import result3 from "../../public/result3.png";
import result4 from "../../public/result4.png";
import result5 from "../../public/result5.png";

import {
    Wrap,
    WrapCard,
    H,
    HB,
    Input,
    ContYear,
    Box,
    YearTitle,
    Story,
    Share,
    Back,
    ResultImg,
    Hall,
    HallB
} from "../styles/resultStyle";
import Router, { useRouter } from "next/router";

const Card = React.forwardRef((_, inputRef) => {
    const count = useSelector((state) => state.user.value);
    let [resultImg, setResultImg] = useState();
    let [levelResult, setLevelResult] = useState([]);

    const { query } = useRouter();
    useEffect(() => {
        if (query.score > 9) {
            setResultImg("result1");
            setLevelResult([
                `당신의 삶의 유일한 보약은 music..?`,
                `어떻게 이걸 다 맞히죠?`,
                `일반인의 권한으로 한문제도 빠짐 없이`,
                `모두 맞혀버린 당신에게는`,
                `갓 오브 뮤직 상을 드리고 싶습니다.`,
            ]);
        } else if (query.score > 8) {
            setResultImg("result2");
            setLevelResult([
                `이 정도는 껌이지`,
                `내 삶에서 음악은 빼놓을 수 없다.`,
                `외출할 때 이어폰 챙기는건 필수잖아~`,
                `음악과 항상 함께하는 life를 즐기는 당신!`,
                `가요계의 마스터로 임명합니다.`,
            ]);
        } else if (query.score > 6) {
            setResultImg("result3");
            setLevelResult([
                `아 분명히 아는 노랜데...`,
                `아무리 생각해도 모르겠다...`,
                `그래도 시대에 뒤쳐지지 않게`,
                `나름 이 당시 유행곡은 알고있지!`,
                `그런 당신은 유행에 뒤쳐지지 않는 타입!`,
            ]);
        } else if (query.score > 2) {
            setResultImg("result4");
            setLevelResult([
                `내 인생에 가요는`,
                `그렇게 중요하지 않다구^_^;`,
                `난. 나만의 길을 간다.`,
                `다 각자 취향의 노래가 있는거지^^`,
                `(혹은 미디어와 거리를 두는 타입일수도...)`,
            ]);
        } else {
            setResultImg("result5");
            setLevelResult([
                `미디어로부터 멀리 떠나`,
                `속세를 벗어난 삶을 사셨나요?`,
                `혹은 외국인일 가능성도 있겠네요!`,
                `도파민 중독으로부터 벗어나`,
                `건강한...삶을 살고 있는 당신, 응원합니다!`,
            ]);
        }
    }, [query]);

    // if(query.score===10){

    //     levelResult=[
    //         `당신의 삶의 유일한 보약은 music..?`,
    //             `어떻게 이걸 다 맞히죠?`,
    //             `일반인의 권한으로 한문제도 빠짐 없이`,`모두 맞혀버린 당신에게는`,`갓 오브 뮤직 상을 드리고 싶습니다.`]
    // }else if(query.score>8){

    //     levelResult=[
    //         `이 정도는 껌이지`,
    //         `내 삶에서 음악은 빼놓을 수 없다.`,
    //         `외출할 때 이어폰 챙기는건 필수잖아~`,
    //         `음악과 항상 함께하는 life를 즐기는 당신!`,
    //         `가요계의 마스터로 임명합니다.`]
    // }else if(query.score>6){

    //     levelResult=[
    //         `아 분명히 아는 노랜데...`,
    //         `아무리 생각해도 모르겠다...`,
    //         `그래도 시대에 뒤쳐지지 않게`,
    //         `나름 이 당시 유행곡은 알고있지!`,
    //         `그런 당신은 유행에 뒤쳐지지 않는 타입!`]
    // }else if(query.score>2){

    //     levelResult=[
    //         `내 인생에 가요는`,
    //         `그렇게 중요하지 않다구^_^;`,
    //         `난. 나만의 길을 간다.`,
    //         `다 각자 취향의 노래가 있는거지^^`,
    //         `(혹은 미디어와 거리를 두는 타입일수도...)`]
    // }else{

    //     levelResult=[
    //         `미디어로부터 멀리 떠나`,
    //         `속세를 벗어난 삶을 사셨나요?`,
    //         `혹은 외국인일 가능성도 있겠네요!`,
    //         `도파민 중독으로부터 벗어나`,
    //         `건강한...삶을 살고 있는 당신, 응원합니다!`]
    // }

    // const cardRef = useRef();
    // const onDownloadBtn = () => {
    //   const card = cardRef.current;
    //   domtoimage
    //     .toBlob(card)
    //     .then((blob) => {
    //       saveAs(blob, 'card.png');
    //     });
    // };

    return (
        <WrapCard year={`color${query.year}`} ref={inputRef}>
            <p>'{query.name}'님의 점수는?</p>
            <ContYear attr="cont">
                <YearTitle>
                    {query.year == "All" ? (
                        <>
                            <Hall year={`color${query.year}`}>2020s-1990s</Hall>
                            <HallB>2020s-1990s</HallB>
                        </>
                    ) : (
                        <>
                            <H year={`color${query.year}`}>{query.year}s</H>
                            <HB>{query.year}s</HB>
                        </>
                    )}
                </YearTitle>
                {query.year !== "All" && (
                    <ContYear attr="effect">
                        <Box type="year" />
                    </ContYear>
                )}
            </ContYear>
            <Back>
                <ResultImg img={resultImg} />
            </Back>

            <ContYear attr="cont">
                <ContYear attr="score">
                    <Box type="score" />
                    <YearTitle>
                        <H year={`color${query.year}`}>{query.score}개</H>
                        <HB>{query.score}개</HB>
                    </YearTitle>
                </ContYear>
            </ContYear>
            {/* <h2>갓 오브 뮤직</h2> */}
            <Story>
                {levelResult.map((a, i) => (
                    <>
                        <p>{a}</p>
                    </>
                ))}
            </Story>
            <Box type="bottom" />
        </WrapCard>
    );
});

export default Card;
