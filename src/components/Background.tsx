import React, {useEffect, useState} from "react";

const Background: React.FC = () => {
    const [isAppearance, setIsAppearance] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAppearance(true);
        }, 100);
    }, [])

    return (
        <div className={`w-full h-full absolute top-0 z-[-1] duration-1000 transition-all ${isAppearance ? 'opacity-100' : 'opacity-0'}`}>
            {/* 배경 비디오 */}
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/background5.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* 흐릿한 오버레이 */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-0"></div>
        </div>
    );

}

export default Background