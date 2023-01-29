import React, { useEffect } from 'react'
import {
    Wrap,
    ChoiceYear,
    P
} from './choiceStyle'
import {Btn, YearSelectorContainer, Label, RadioButton } from '../../components/Button'
import { useState } from 'react'
import { shuffle,random } from 'lodash'
import year2020 from '../../year2020'

export default function index() {
    const [isActive, setIsActive] = useState("");
    const [isChoice, setIsChoice] = useState("");
    const [selectedYear, setSelectedYear] = useState();
    // const QnAArr=[]
    const random1 =shuffle(year2020.low).slice(0,3);
    const random2 =shuffle(year2020.middle).slice(0,5);
    const random3 =shuffle(year2020.high).slice(0,2);
    const list=["2020년대", "2010년대", "2000년대", "1990년대", "All Time"]
    // console.log(random1,random2,random3);
    // QnAArr=[...random1,...random2,...random3]
    const onChange = (e) => {
        const { value } = e.target;
        const selected = list.filter((year) => year === value);
        if (selected) {
        setSelectedYear(selected);
        }

    };
    
    useEffect(()=>{
        let resultYear=""
        if(selectedYear ){
            console.log(selectedYear);
            if(selectedYear[0].length===6){
                if(selectedYear[0]==="2020년대")
                    resultYear=year2020;
                else if(selectedYear[0]==="2010년대")
                    resultYear=year2020;
                else if(selectedYear[0]==="2000년대")
                    resultYear=year2020;
                else if(selectedYear[0]==="1990년대")
                    resultYear=year2020;
                
                const random1 =shuffle(resultYear.low).slice(0,3);
                const random2 =shuffle(resultYear.middle).slice(0,5);
                const random3 =shuffle(resultYear.high).slice(0,2);
                let QnAArr=[...random1,...random2,...random3]
                console.log(QnAArr);
            }else{
                const random1 =shuffle([...year2020.low,...year2020.low,...year2020.low]).slice(0,3);
                const random2 =shuffle([...year2020.middle,...year2020.middle,...year2020.middle]).slice(0,5);
                const random3 =shuffle([...year2020.high,...year2020.high,...year2020.high]).slice(0,2);
                let QnAArr=[...random1,...random2,...random3]
                console.log(QnAArr);
    
            }

        }    


    },[selectedYear])
    
    return (
        <div className='question'>
        <Wrap>
            <ChoiceYear>원하는 연도를 선택해주세요</ChoiceYear>
            
            <YearSelectorContainer >
        {list.map((year,i) => (
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
            <P>전주 10초를 듣고 30초 안에<br/>노래의 가수, 제목을 맞히는 게임입니다.</P>
            <Btn type="button" href="/question/1990"  attr={isActive}>게임시작</Btn>
        </Wrap>
    </div>
    )
}
