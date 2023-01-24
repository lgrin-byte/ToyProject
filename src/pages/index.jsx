import {
    Wrap,
    BtnYear,
    H,
    Image,
    Input
} from './mainStyle'


export default function index() {
    return (
        <Wrap>
            <H>무슨 노래 <br/> 듣고 계세요?</H>
            <Image>일러스트</Image>
            <p className='start'>닉네임 입력하기</p>
            <Input type="text" />
            <BtnYear href="/choice">
                <button>다음 페이지</button>
            </BtnYear>
        </Wrap>
    )
}
