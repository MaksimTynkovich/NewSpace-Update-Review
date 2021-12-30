import React, {useState} from 'react';
import '../styles/menu.css'
import userPhoto from '../img/userPhoto.png'

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className='blur' />
            <div className='menu__content' onClick={e => e.stopPropagation()}>
                <div className='inner' style={{color: "#fff"}}>
                    <div className='menu__header'>
                    Комментарии (12)
                    </div>
                    <div className='burger-btn' onClick={() => setActive(false)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<rect width="29.4507" height="1.47254" transform="matrix(0.709512 0.704693 -0.709512 0.704693 1.04492 0.208496)" className='burger-btn__svg'/>
<rect width="29.4507" height="1.47254" transform="matrix(0.709512 -0.704693 0.709512 0.704693 0.0605469 20.7539)" className='burger-btn__svg'/>
</svg></div>
                </div>
                <div className='popup__content'>
                    <textarea className='comment__input' placeholder='Ваш комментарий'>
                    </textarea>
                    <div id='response'>                            
                    <div className='comment__cancellation'>Отмена</div>
                    <div className='comment__send'>Отправить</div>
                    </div>
                    <div className='user__comment'>
                        <div className='user__inner'>
                            <div className='user__photo'><img src={userPhoto} alt="" /></div>
                            <div className='user__info'>
                                <div className='user__name'>login login</div>
                                <div className='user__time'>4 часа назад</div>
                            </div>
                        </div>
                        <div className='comment__text'>
                        Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит электроэнергии. Остановка производства является частью усилий компаний по 
                        </div>
                        <div className='comment__response'>
                            <div className='comment__answer'>Ответить</div>
                            <div className='comment__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                        </div>
                    </div>
                    <div className='reply__post'>
                        <div className='reply__line'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="228" viewBox="0 0 1 228" fill="none">
<rect width="1" height="228" transform="matrix(-1 0 0 1 1 0)" fill="#D93D3D"/>
</svg>
                        </div>
                    <div className='user__comment'>
                        <div className='user__inner'>
                            <div className='user__photo'><img src={userPhoto} alt="" /></div>
                            <div className='user__info'>
                                <div className='user__name'>login login</div>
                                <div className='user__time'>4 часа назад</div>
                            </div>
                        </div>
                        <div className='comment__text'>
                        Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит. Остановка производства является частью усилий компаний.
                        </div>
                        <div className='comment__response'>
                            <div className='comment__answer'>ответить</div>
                            <div className='comment__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                        </div>
                    </div>
                        </div> 
                        <div className='user__comment'>
                        <div className='user__inner'>
                            <div className='user__photo'><img src={userPhoto} alt="" /></div>
                            <div className='user__info'>
                                <div className='user__name'>login login</div>
                                <div className='user__time'>4 часа назад</div>
                            </div>
                        </div>
                        <div className='comment__text'>
                        Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит электроэнергии. Остановка производства является частью усилий компаний по 
                        </div>
                        <div className='comment__response'>
                            <div className='comment__answer'>ответить</div>
                            <div className='comment__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                        </div>
                    </div>
                    <div className='user__comment'>
                        <div className='user__inner'>
                            <div className='user__photo'><img src={userPhoto} alt="" /></div>
                            <div className='user__info'>
                                <div className='user__name'>login login</div>
                                <div className='user__time'>4 часа назад</div>
                            </div>
                        </div>
                        <div className='comment__text'>
                        Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит электроэнергии. Остановка производства является частью усилий компаний по 
                        </div>
                        <div className='comment__response'>
                            <div className='comment__answer'>ответить</div>
                            <div className='comment__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                        </div>
                    </div>
                    <div className='user__comment'>
                        <div className='user__inner'>
                            <div className='user__photo'><img src={userPhoto} alt="" /></div>
                            <div className='user__info'>
                                <div className='user__name'>login login</div>
                                <div className='user__time'>4 часа назад</div>
                            </div>
                        </div>
                        <div className='comment__text'>
                        Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит электроэнергии. Остановка производства является частью усилий компаний по 
                        </div>
                        <div className='comment__response'>
                            <div className='comment__answer'>ответить</div>
                            <div className='comment__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu