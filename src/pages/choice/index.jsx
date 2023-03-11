import React, { useEffect } from "react";
import { Wrap, ChoiceYear, P } from "../../styles/choiceStyle";
import {
    Btn,
    YearSelectorContainer,
    Label,
    RadioButton,
} from "../../components/Button";
import { useState } from "react";
import { shuffle, random } from "lodash";
import year2020 from "../../year2020";
import year2010 from "../../year2010";
import year2000 from "../../year2000";
import year1990 from "../../year1990";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../hooks/count/counterSlice";
import { useRouter } from "next/router";
import year2020img from "../../assets/images/year2020.png";
import year2010img from "../../assets/images/year2010.png";
import year2000img from "../../assets/images/year2000.png";
import year1990img from "../../assets/images/year1990.png";
import alltimeimg from "../../assets/images/alltime.png";

export default function index() {
    const count = useSelector((state) => state.user.value);
    const [isActive, setIsActive] = useState("");
    const [isHref, setIsHref] = useState("");
    const [selectedYear, setSelectedYear] = useState();
    const dispatch = useDispatch();
    const [musicYear, setMusicYear] = useState("2020년대");
    const [musicArr, setMusicArr] = useState([]);
    const [musicImg, setMusicImg] = useState();
    const random1 = shuffle(year2020.low).slice(0, 3);
    const random2 = shuffle(year2020.middle).slice(0, 5);
    const random3 = shuffle(year2020.high).slice(0, 2);
    const list = [
        "2020s",
        "2010년대",
        "2000년대",
        "1990년대",
        "1990-2020 올타임",
    ];

    const router = useRouter();

    const onChange = (e) => {
        const { value } = e.target;
        const selected = list.filter((year) => year === value);
        if (selected) {
            setSelectedYear(selected);
            setIsActive("change");
            setIsHref(`/question/${selected}`);
        }
    };

    useEffect(() => {
        let resultYear = "";
        if (selectedYear) {
            if (selectedYear[0].length === 6) {
                if (selectedYear[0] === "2020년대") {
                    resultYear = year2020;
                    setMusicYear("2020");
                    setMusicImg(year2020img);
                } else if (selectedYear[0] === "2010년대") {
                    resultYear = year2010;
                    setMusicYear("2010");
                    setMusicImg(year2010img);
                } else if (selectedYear[0] === "2000년대") {
                    resultYear = year2000;
                    setMusicYear("2000");
                    setMusicImg(year2000img);
                } else if (selectedYear[0] === "1990년대") {
                    resultYear = year1990;
                    setMusicYear("1990");
                    setMusicImg(year1990img);
                }

                const random1 = shuffle(resultYear.low).slice(0, 3);
                const random2 = shuffle(resultYear.middle).slice(0, 5);
                const random3 = shuffle(resultYear.high).slice(0, 2);
                setMusicArr([...random1, ...random2, ...random3]);
            } else {
                const random1 = shuffle([
                    ...year2020.low,
                    ...year2020.low,
                    ...year2020.low,
                ]).slice(0, 3);
                const random2 = shuffle([
                    ...year2020.middle,
                    ...year2020.middle,
                    ...year2020.middle,
                ]).slice(0, 5);
                const random3 = shuffle([
                    ...year2020.high,
                    ...year2020.high,
                    ...year2020.high,
                ]).slice(0, 2);
                setMusicArr([...random1, ...random2, ...random3]);
                setMusicYear("All");
                setMusicImg(alltimeimg);
            }
        }
    }, [selectedYear]);

    return (
        <div className={`color${musicYear}`}>
            <Wrap>
                <ChoiceYear>원하는 연도를 선택해주세요</ChoiceYear>

                <YearSelectorContainer>
                    {list.map((year, i) => (
                        <div key={year}>
                            <RadioButton
                                id={year}
                                type="radio"
                                name="year-selector"
                                value={year}
                                onChange={onChange}
                            />
                            <Label htmlFor={year}>{year}</Label>
                        </div>
                    ))}
                </YearSelectorContainer>
                <P>
                    전주 10초를 듣고 30초 안에
                    <br />
                    노래의 가수와 제목을 입력해주세요!
                </P>
                <Btn
                    type="button"
                    href={isHref}
                    attr={isActive}
                    onClick={() => {
                        // router.replace('/')
                        dispatch(
                            login({
                                name: count.name,
                                year: musicYear,
                                music: musicArr,
                                musicImg,
                                score: 0,
                            })
                        );
                    }}
                >
                    게임시작
                </Btn>
            </Wrap>
        </div>
    );
}
