import React from 'react';
import './style.scss';

export default function WrapComponent() {
    const [state, setState] = React.useState({
        selectedCategory: '',
        showResult: false,
        loading: false,
        pushBtn: false
    });

    const onClickPreferBtn = (category) => {
        setState((prevState) => ({
            ...prevState,
            selectedCategory: category,
            showResult: false,
            pushBtn: true
        }));
    };

    const typeList = ['한식', '중식', '양식', '일식', '아시안', '다 좋아요'];

    const KoreanFood = ['간장게장', '족발', '수육', '잔치국수', '냉면', '차돌된장찌개', '돼지갈비', '유부초밥', '소갈비', '참치김치찌개', '육개장', '삼겹살', '알밥', '대패삼겹살', '연탄불고기', '회덮밥', '콩나물국밥', '미역국정식', '고등어구이', '계란말이', '갈비찜', '닭갈비', '갈비탕', '갈비찜', '돌솥비빔밥', '떡볶이', '뼈해장국', '김밥', '곱창', '쫄면&돈가스김밥', '돼지국밥', '고추장찌개', '엽떡', '된장찌개', '찜닭', '설렁탕', '육회비빔밥', '열무비빔밥', '닭볶음탕', '돼지갈비찜', '순두부찌개', '삼계탕', '냉이된장국', '닭발', '해물순두부', '소갈비찜', '쟁반짜장', '뼈해장국', '주먹밥', '곱창전골', '감자탕', '부대찌개', '불고기', '참치김밥', '라면', '장조림', '오리훈제', '아구찜', '육회', '제육볶음', '양대창', '떡만두국', '버섯전골', '동태전', '소고기덮밥', '등갈비', '바지락칼국수', '순대국', '해물삼합', '오므라이스', '돼지김치찜', '소머리국밥', '막창', '낚지볶음', '쭈꾸미볶음', '허니콤보', '강된장보리밥', '보쌈', '삼겹살덮밥', '장어덮밥', '치킨마요', '스팸마요', '참치마요', '솥밥', '3분 카레'];
    const ChineseFood = ['짜장면', '탕수육', '짬뽕', '팔보채', '마파두부', '꿔바로우', '간짜장', '간짬뽕', '냉짬뽕', '고추잡채', '마라탕', '마라샹궈'];
    const JapaneseFood = ['초밥', '카이센동', '스테키동', '가츠동', '규카츠', '가츠나베', '야끼소바', '오꼬노미야끼', '냉모밀', '치즈돈가스', '생선가스', '왕돈가스', '경양식돈가스', '카레라이스', '하이라이스', '오야코동', '우동', '김치우동', '어묵우동', '카레우동', '규동', '텐동', '부타동', '가쓰동', '소보로동', '니라타마동', '카레동', '낫토', '사케동', '츠케멘', '라멘', '탄탄멘', '야키니꾸', '몬자야키', '쿠시카츠', '샤브샤브', '스키야키', '나가사키 짬뽕', '호르몬동'];
    const AmericanFood = ['스파게티', '샌드위치', '리조또', '치킨', '라자냐', '알리오올리오', '파스타', '프렌치 토스트', '피시 앤 칩스', '스테이크', '피자', '햄버거'];
    const AsianFood = ['팟타이', '쌀국수', '똠양꿍', '월남쌈', '반미', '우육면', '딤섬', '그린커리', '커리', '랭쌥', '카오팟', '푸팟퐁커리'];

    const foodCategories = [
        { name: '한식', items: KoreanFood },
        { name: '중식', items: ChineseFood },
        { name: '일식', items: JapaneseFood },
        { name: '양식', items: AmericanFood },
        { name: '아시안', items: AsianFood }
    ];

    const emojis = {
        '한식' : '🍚',
        '중식' : '🥮',
        '양식' : '🍔',
        '일식' : '🍣',
        '아시안' : '🍲',
        '다 좋아요' : '🎉',
    }


    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    const [selectedFood, setSelectedFood] = React.useState('');

    // 클릭한 거 제외
    // const selectRandomFood = () => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         showResult: true,
    //         loading: true
    //     }));

    //     setTimeout(() => {
    //         let availableCategories = [...foodCategories];
    //         if (state.selectedCategory === '다 좋아요') {
    //             availableCategories = availableCategories.filter(category => category.name === state.selectedCategory);

    //         }
    //         const randomCategory = getRandomItem(availableCategories);
    //         const randomFood = getRandomItem(randomCategory.items);
    //         setSelectedFood(`${randomFood}`);
    //         setState((prevState) => ({
    //             ...prevState,
    //             showResult: true,
    //             loading: false,
    //         }));
    //     }, 1000);
    // };

    const selectRandomFood = () =>{

        //기본 셋팅, 점심 뭐먹지?
        // 버튼 안 누르고 결과 보려고 하면 버튼을 눌러주세요,
        //버튼 누르면 점심 뭐먹지로 또 바뀜
        if(!state.selectedCategory){
            setState((prevState)=>({
                ...prevState,
                pushBtn: true,
            }))
            return
        }

        setState((prevState)=>({
            ...prevState,
            showResult : false,
            loading : true,
            pushBtn: true
        }))
        setTimeout(()=>{
            let availableFoods = []
            if(state.selectedCategory === '다 좋아요'){
                availableFoods = foodCategories.flatMap(category => category.items)
            }
            else {
                const category = foodCategories.find(category => category.name === state.selectedCategory);
                availableFoods = category ? category.items : [];
            }
            const randomFood = getRandomItem(availableFoods);
            setSelectedFood(randomFood)
            setState((prevState)=>({
                ...prevState,
                showResult : true,
                loading : false,
                pushBtn: true
            }))
        },800)
    }

    return (
        <div id='wrap'>
            <div className="container">
                <div className="title">
                    <div className="main-title">
                        <i></i>
                        <h1>점심 뭐 먹니</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="box">
                        {typeList.map((btn, idx) => (
                            <button
                                key={idx}
                                onClick={() => onClickPreferBtn(btn)}
                                className={state.selectedCategory === btn ? 'click' : ''}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                    <div className="box">
                        <button className='result' onClick={selectRandomFood}>

                            {state.pushBtn
                            ? state.selectedCategory === '' 
                                ? '버튼을 클릭해주세요'
                                : (state.loading ? '메뉴 고르는 중...' 
                                : (state.showResult  ? '오늘 점심은' : '점심 뭐 먹지?'))
                            :  '점심 뭐 먹지?'
                            }
                        </button>
                    </div>
                    <div className="box">
                        {/* 선택한 것에 따라 앞에 이모티콘 붙이기  */}
                        {state.showResult && !state.loading &&
                        <h2>
                            <strong>{emojis[state.selectedCategory]}</strong>
                            {selectedFood}</h2>}
                    </div>
                </div>
            </div>
        </div>
    );
}
