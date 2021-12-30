import '../styles/Posts.css';
import blog1 from '../img/blog1.jpg'
import blog2 from '../img/blog2.jpg'
import reviews1 from '../img/reviews1.jpg'
import reviews2 from '../img/reviews2.jpg'
import reviews3 from '../img/reviews3.jpg'
import reviews4 from '../img/reviews4.jpg'
import reviews5 from '../img/reviews5.jpg'
import reviews6 from '../img/reviews6.jpg'
import reviews7 from '../img/reviews7.jpg'
import ad from '../img/ad.jpg'
import { Link } from 'react-router-dom'

function Posts() {
    return (
        <div className='posts'>
            <div className='container'>
                <div className='first__level'>
                <Link to='BlogPage'>
                    <div className='first__level__block'>
                        <div className='img'><img src={blog1} /></div>
                        <div className='info'><div className='tag'>Электромобили</div><div className='time'>Сегодня</div></div>
                        <div className='title'>Поставщики Tesla приостанавливают производство <br /> некоторых компонентов из-за проблем с электричеством</div>
                    </div>
                    </Link>
                    <div className='first__level__block'>
                        <div className='img'><img src={blog2} /></div>
                        <div className='info'><div className='tag' style={{width: 62}}>Space X</div><div className='time'>9 ноября, 2020</div></div>
                        <div className='title'>Ship 20 успешно прошёл крио-тест! </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;