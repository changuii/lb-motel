import React, {useEffect, useState} from "react";

const Directions: React.FC = () => {
    const [isAppearance, setIsAppearance] = useState(false);

    useEffect(() => {
        const map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(36.240510, 128.301045),
            zoom: 19
        });

        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(36.240510, 128.301045),
            map: map
        });

        marker.setMap(map);

        setTimeout(() => {
            setIsAppearance(true);
        }, 100);
    }, []);

    const handleNaverDirections = () => {
        window.open('https://map.naver.com/p/directions/14285722.0920807,4318284.8076659,%EA%B5%AC%EB%AF%B8%EC%97%AD%20%EA%B2%BD%EB%B6%80%EC%84%A0,11636508,PLACE_POI/14282407.16274866,4333765.773295734,%EC%97%98%EB%B9%84%EB%AA%A8%ED%85%94,15529639,PLACE_POI/-/car?c=11.00,0,0,0,dh');
    }

    return (
        <div
            className={`h-full duration-1000 transition-all ${isAppearance ? 'opacity-100 -translate-y-5' : 'opacity-0 translate-y-5'}`}>
            <div className="h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center">
                <div className="w-11/12 lg:w-4/12 h-1/3 lg:h-4/6 mt-10 lg:mt-0 shadow-2xl m-5 flex justify-center rounded-3xl items-center">
                    <div id="map" className="w-full h-full"></div>
                </div>
                <div
                    className='w-11/12 p-2 lg:w-4/12 h-1/3 lg:h-4/6 flex-col justify-start items-center text-xl font-bold text-black m-5 flex shadow-2xl rounded-2xl'>
                    <div className='text-2xl lg:text-3xl mb-5 mt-1 lg:mt-10 text-black font-bold'>오시는길</div>
                    <div className='flex justify-start flex-col'>
                        <div className='font-normal text-sm lg:text-lg'>구미역 : 170번 탑승 후 선산 터미널 도착 도보 5분거리</div>
                        <div className='font-normal text-sm lg:text-lg'>구미시외버스 터미널 : 171번 탑승 후 선산 터미널 도착 도보 5분거리</div>
                        <div className='font-normal text-sm lg:text-lg'>정문 : 선산 우체국을 바라보고 좌측에 골목으로 들어오시면 됩니다.</div>
                    </div>
                    <button onClick={() => handleNaverDirections()}
                            className='text-sm text-black mt-5 rounded-xl transition-all duration-500 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl'>길안내
                        서비스 바로가기
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Directions;
