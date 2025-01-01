import Background from "../components/Background.tsx";
import React, {useEffect, useState} from "react";


const Main: React.FC = () => {
    const texts = ['당신의 여행을 LB가 응원합니다.', '스마트 TV, 넷플릭스 제공', '세탁실 세탁기 및 건조기 완비','선산 최고의 휴식 숙소', '넓은 주차장 완비']; // 텍스트 배열
    const [currentText, setCurrentText] = useState(texts[0]); // 초기 텍스트 설정
    const [animate, setAnimate] = useState(false); // 애니메이션 상태

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % texts.length; // 배열 순환
            setAnimate(true); // 애니메이션 시작
            setCurrentText(texts[index]);
        }, 5000); // 3초마다 텍스트 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval을 정리합니다.
    }, []);

    useEffect(() => {
        if (animate) {
            setTimeout(() => {
                setAnimate(false); // 애니메이션 끝난 후 상태 초기화
            }, 4400); // 애니메이션 지속 시간 (1초)
        }
    }, [animate]);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 100);
    }, []);

    return (
        <>
            <Background/>

            {/* 화면 중앙에 글씨를 배치 */}
            <div className="h-[90%] w-full flex justify-center items-center">
                <div
                    className={`text-center text-white font-bold text-3xl lg:text-6xl transition-all duration-1000 ${animate ? 'opacity-100 -translate-y-4' : 'opacity-0'} `}>
                    {currentText}
                </div>
            </div>
        </>
    )
}


export default Main;