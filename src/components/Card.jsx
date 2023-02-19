import React from 'react';
import { useSelector } from "react-redux";

import { Wrap, H,HB, Input ,ContYear,Box, YearTitle,Story, Share,Back} from "../pages/result/resultStyle";
const Card = React.forwardRef((_, inputRef) => {

    const count = useSelector((state) => state.user.value);

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
<div ref={inputRef}>
        <p>'{count.name}'님의 점수는?</p>
                <ContYear attr="cont">
                <YearTitle> 
                <H>2020s</H>
                <HB>2020s</HB>
                
                </YearTitle>
                <ContYear attr="effect">
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((a, i)=> 
                    <Box></Box>)       }
                </ContYear>
                </ContYear>
                    <Back></Back>

                <ContYear attr="cont">
                
                <ContYear attr="score">
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((a, i)=> 
                    <Box></Box>)       }
                    
                </ContYear>
                <YearTitle> 
                <H>{count.score}개</H>
                <HB>{count.score}개</HB>
                
                </YearTitle>
                </ContYear>
                {/* <h2>갓 오브 뮤직</h2> */}
                <Story>
                    당신의 삶의 유일한 보약은 music..?<br/> 어떻게 이걸 다 맞히죠?<br/>
                    일반인의 권한으로 한문제도 빠짐 없이<br/>모두 맞혀버린
                    당신에게는<br/>갓 오브 뮤직 상을 드리고 싶습니다.
                </Story>
</div>
    );  
                })

export default Card;

