import Header from '../components/Header';
import Slider from '../components/Slider'
import Posts from '../components/Posts'
import '../styles/HomePage.css'


function HomePage() {
  return (
    <div>
      <Header />
      <div className='header__after'>
            <div className='container'>
                <div className='header__after__inner'>
                    <div className='header__after__countdown'>
                        <div className='header__after__start'>Запуск <span className="header__after__span">SpaceX Crew-3</span> через</div>
                        <div className='header__after__timer'>10 <span className='format'>д</span> <span className="colon">:</span> 20 <span className='format'>ч</span> <span className="colon">:</span> 26 <span className='format'>м</span> <span className="colon">:</span> 20 <span className='format'>с</span></div>
                    </div>
                    <div className='header__after__stream'>
                        <div className='stream__text'>смотреть эфир</div><div className="stream__arrow"><svg className='stream__svg' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <path d="M0 8.5H17" stroke-width="1.5" />
                            <path d="M9.27295 16L17.0002 8.5L9.27295 1" stroke-width="1.5" />
                        </svg></div></div>
                </div>
            </div>
        </div>
        <Slider />
        <div className='Navbar'>
            <div className='container'>
                <div className='Navbar__inner'>
                    <div className='hr__block1'><div className='Navbar__hr'></div></div>
                    <div className='Navbar__menu'><a className='Navbar__links'>Астронавтика</a> <a className='Navbar__links'>космос и наука</a> <a className='Navbar__links'>Технологии</a></div>
                    <div className='hr__block2'><div className='Navbar__hr'></div></div>
                </div>
            </div>
        </div>
        <Posts />
    </div>
  );
}

export default HomePage;
