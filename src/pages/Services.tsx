import React, {useEffect, useState} from "react";
import Card, {CardProps} from "../components/Card.tsx";

const Services: React.FC = () => {
    const [isAppearance, setIsAppearance] = useState(false);

    const leftServices: CardProps[] = [
        {
            title: '헤밍웨이 매트리스', descriptions: ['전 객실에 헤밍웨이 매트리스를 도입해 편안한 잠자리를 제공합니다.'], image: '/hemingway.jpg'
        },
        {
            title: '넷플릭스 제공', descriptions: ['넷플릭스를 시청하실 수 있도록 제공합니다.'], image: '/netflix.png'
        },
        {
            title: '건조기 제공', descriptions: ['세탁하신 옷을 빠르게 건조시킬 건조기를 제공합니다.'], image: '/dryer.jpeg'
        }
    ]

    const rightServices: CardProps[] = [
        {
            title: '안마의자 (특실)', descriptions: ['특실에 안마의자를 도입해 편안한 휴식을 제공합니다.'], image: '/massage-chair.jpeg'
        },
        {
            title: '스파 (스파객실)', descriptions: ['스파를 통해 편안한 휴식을 제공합니다.'], image: '/spa.jpeg'
        },
        {
            title: '넓은 주차장 제공', descriptions: ['30대 이상의 차량을 주차할 수 있는 넓은 주차장으로 부족함이 없습니다.'], image: '/back-parking.jpeg'
        },
        {
            title: '세탁기 제공', descriptions: ['세탁할 옷을 편리하게 세탁할 세탁기를 제공합니다.', '세제도 제공하고 있습니다.'], image: '/washing.jpeg'
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setIsAppearance(true);
        }, 100);
    }, [])

    useEffect(() => {
        const boxes = document.querySelectorAll(".box");
        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 화면 안으로 들어오면 요소를 나타나게 함
                        entry.target.classList.remove("opacity-0", "translate-y-4");
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    } else {
                        // 화면 밖으로 나가면 요소를 다시 숨김
                        entry.target.classList.remove("opacity-100", "translate-y-0");
                        entry.target.classList.add("opacity-0", "translate-y-4");
                    }
                });
            },
            {
                root: null, // 뷰포트 기준
                rootMargin: "0px", // 추가 여백 없음
                threshold: 0.4,
            }
        );

        boxes.forEach((box) => observer.observe(box));
        // 클린업 함수로 observer 해제
        return () => {
            boxes.forEach((box) => observer.unobserve(box));
        };
    }, []);


    return (
        <>
            <div className='h-[10%] bg-black w-full absolute top-0 z-[-1]'>
            </div>

            <div className={`transition-all duration-1000 ${isAppearance ? 'opacity-100' : 'opacity-0'} mb-20`}>
                <div className='flex flex-col justify-center items-center m-10'>
                    <div className='font-bold text-4xl text-black mb-10'>LB의 제공 서비스</div>
                    <div className='bg-black rounded-full w-56 h-56 lg:w-80 lg:h-80 mb-20 justify-center flex'>
                        <img src='/front.jpg' className='w-full rounded-full shadow-2xl'/>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16 lg:ml-20 lg:mr-20'>
                        {
                            rightServices.map((service: CardProps) => (
                                <Card {...service} />
                            ))
                        }
                        {
                            leftServices.map((service: CardProps) => (
                                <Card {...service} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services;