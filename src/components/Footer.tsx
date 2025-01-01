import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col w-full h-24 bg-black opacity-70 justify-center items-center'>
            <div className='flex justify-center items-center gap-10'>
                <div className='text-slate-400'>
                    상호 : 엘비모텔
                </div>
                <div className='text-slate-400'>
                    대표 : 이정한
                </div>
                <div className='text-slate-400'>
                    소재지 : 경상북도 구미시 선산읍 남문로 29-5
                </div>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <div className='text-slate-400'>
                    사업자 등록번호 : 514-13-40272
                </div>
                <div className='text-slate-400'>
                    업종 : 숙박업
                </div>
            </div>
        </footer>
    )
}

export default Footer;