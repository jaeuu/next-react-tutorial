import React from 'react';
//import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Wanted from "/public/wanted.svg";


const Header: React.FC = () => {
    return (
        <header className="fixed z-20 top-0 w-full border-b-2 ">
            <div className=" mx-auto my-0 bg-white px-4 font-semibold text-gray-600 h-full w-7/12 ">
                <div className="flex justify-between items-center py-3">
                    <div className='flex items-center justify-center'>
                        <button><MenuIcon className="text-3xl"/></button>
                        <Wanted className='ml-3 w-24 h-auto'/>
                    </div>
                    <div className="flex justify-between items-center">
                        <ul className="flex ">
                            <li className="px-4 py-1"><a>채용</a></li>
                            <li className="px-4 py-1"><a>이벤트</a></li>
                            <li className="px-4 py-1"><a>이력서</a></li>
                            <li className="px-4 py-1"><a>소셜</a></li>
                            <li className="px-4 py-1"><a>프리랜서</a></li>
                            <li className="px-4 py-1"><a>AI 합격예측</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center ">
                        <ul className="flex justify-center items-center">
                            <li className="p-2"><SearchIcon className="text-2xl" /></li>
                            <li className=""><span>회원가입</span></li>
                            <li className=""><span>/로그인</span></li>
                        </ul>
                        <span className="mx-8">|</span>
                        <button className="border-solid border-2 border-gray-300 rounded-full h-10 w-31 px-2 text-gray-500 ">기업 서비스</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
