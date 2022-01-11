import blog1 from '../img/blog1.jpg'
import blog2 from '../img/blog2.jpg'
import reviews1 from '../img/reviews1.jpg'
import reviews2 from '../img/reviews2.jpg'
import reviews3 from '../img/reviews3.jpg'
import reviews4 from '../img/reviews4.jpg'
import reviews5 from '../img/reviews5.jpg'
import reviews6 from '../img/reviews6.jpg'
import reviews7 from '../img/reviews7.jpg'

function PostElement(props) {

    return (
        <div className='infinity__block'>
            <div className='img'><img src={reviews5} /></div>
            <div className='info'><div className='tag'>{props.tag}</div><div className='time'>{props.date} {props.month}, {props.year}</div></div>
            <div className='title'>{props.title}</div>
        </div>
    );
}

export default PostElement;
