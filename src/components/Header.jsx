import { Link } from 'react-router-dom';
import kncoderimg from '../assets/kncoder.png';
import uzbflag from '../assets/uz.png';
import rusflag from '../assets/ru.png';
import engflag from '../assets/en.png';

function Header() {
    return (
        <div className="mx-auto w-full text-white PatrickHand flex items-center justify-between p-4  ">
            <div className="flex items-center gap-2 text-lg">
                <img src={kncoderimg} className='w-8' alt="Kncoder logo" />
                <p>Documentation to talk with kncoder</p>
            </div>
            <div className='flex text-base gap-6'>
                <Link className='hover:text-gray-500 underline' to='/'>Category name</Link>
                <Link className='hover:text-gray-500' to='/one'>Category name</Link>
                <Link className='hover:text-gray-500' to='/two'>Category name</Link>
            </div>
            <div className='flex items-center'>
                <div className="relative">
                    <button className="btn m-1">
                        <img className='w-8' src={uzbflag} alt="Uzbek flag" />
                    </button>
                    <ul className="absolute hidden group-hover:block menu p-2 shadow bg-base-100 rounded-box">
                        <li><a><img src={uzbflag} alt="Uzbek flag" /></a></li>
                        <li><a><img src={rusflag} alt="Russian flag" /></a></li>
                        <li><a><img src={engflag} alt="English flag" /></a></li>
                    </ul>
                </div>
                <button className="btn font-normal w-40 h-8 border-transparent btnstyle">
                    Roziman!
                </button>
            </div>
        </div>
    );
}

export default Header;
