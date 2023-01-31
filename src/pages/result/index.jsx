import React from "react";
import { Wrap, H, Image, Input } from "./resultStyle";
import { useSelector } from "react-redux";
import {Btn} from '../../components/Button'

export default function Index() {
    const count = useSelector((state) => state.user.value);

    return (
        <div>
            <Wrap>
                <p>'{count.name}'님의 점수는?</p>
                <span> 10개</span>
                <Image>일러스트</Image>
                <h2>갓 오브 뮤직</h2>
                <p>
                    당신의 삶의 유일한 보약은 music..? 어떻게 이걸 다 맞히죠?
                    일반인의 권한으로 한문제도 빠짐 없이 모두 맞혀버린
                    당신에게는 갓 오브 뮤직 상을 드리고 싶습니다.
                </p>
                <p>공유하기</p>
                <Btn type="button" href="/">처음으로 돌아가기</Btn>
            </Wrap>
        </div>
    );
}
