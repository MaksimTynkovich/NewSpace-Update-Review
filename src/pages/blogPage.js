import Header from '../components/Header'
import '../styles/BlogPage.css'
import post from '../img/post.jpg'
import articleElement from '../img/articleElement.jpg'
import { Link } from 'react-router-dom'
import nextpost1 from '../img/reviews4.jpg'
import nextpost2 from '../img/blog2.jpg'
import nextpost3 from '../img/reviews5.jpg'
import Footer from '../components/Footer.js'
import { useState } from 'react';
import Menu from '../components/menu'

function BlogPage() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='btn__back'><Link to='/'><div className='svg'><svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 9 14" fill="none">
          <path d="M8 1L2 7L8 13" stroke-width="1.5" />
        </svg></div> <div className='stack'>технологии</div></Link></div>
        <div className='post'>
          <div className='post__title'>Поставщики <span>Tesla</span> приостанавливают производство некоторых компонентов из-за проблем с электричеством </div>
          <div className='post__content'>
            <div className='post__info'>
              <div className='post__date'>26 ноября, 2021</div>
              <div className='post__other'>
                <div className='post__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                <div className='post__favorite'>
                  <svg fill="#BFC6CE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28px" height="26px"><path d="M 7 5 L 7 28 L 8.59375 26.8125 L 16 21.25 L 23.40625 26.8125 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59375 19.1875 L 16 18.75 L 15.40625 19.1875 L 9 24 Z" /></svg>
                </div>
                <div className='post__share'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                  <path d="M12.3695 4.23697H12.1195V4.48697V15.5065H9.88041V4.48697V4.23697H9.63041H7.41971L11 -0.127547L14.5802 4.23697H12.3695ZM19.4674 10.7478V10.4978H19.2174H16.7282V8.49349H20.5869C20.8907 8.49349 21.1781 8.60404 21.3867 8.79475C21.5945 8.98478 21.7065 9.23747 21.7065 9.49566V23.2696C21.7065 23.5278 21.5945 23.7805 21.3867 23.9705C21.1781 24.1612 20.8907 24.2718 20.5869 24.2718H1.41302C1.10922 24.2718 0.82188 24.1612 0.613286 23.9705C0.40544 23.7805 0.293457 23.5278 0.293457 23.2696V9.49566C0.293457 9.23747 0.405439 8.98478 0.613286 8.79475C0.821881 8.60403 1.10923 8.49349 1.41302 8.49349H5.27172V10.4978H2.78259H2.53259V10.7478V22.0174V22.2674H2.78259H19.2174H19.4674V22.0174V10.7478Z" fill="#BFC6CE" stroke-width="0.5" />
                </svg></div>
              </div>
            </div>
            <div className='post__intro'><img src={post} /></div>
            <div className='hr' style={{ marginTop: 70 }}></div>
            <div className='inner'>
              <div className='post__other'>
                <div className='post__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                  <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg><div className='like__count'>230</div></div>
                <div className='post__comment'>
                  <svg onClick={() => setMenuActive(!menuActive)} xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 20" fill="none">
                    <path d="M8.18772 16.0603L7.96718 15.8354H7.65217H0.75V0.75H21.25V15.8354H14.3478H14.0328L13.8123 16.0603L11 18.9287L8.18772 16.0603Z" stroke="#BFC6CE" stroke-width="1.5" />
                  </svg> <div className='comment__count'>12</div>
                </div>
                <div className='post__favorite'>
                  <svg fill="#BFC6CE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28px" height="26px"><path d="M 7 5 L 7 28 L 8.59375 26.8125 L 16 21.25 L 23.40625 26.8125 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59375 19.1875 L 16 18.75 L 15.40625 19.1875 L 9 24 Z" /></svg>
                </div>
              </div>
              <div className='article'>
                Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит электроэнергии. Остановка производства является частью усилий компаний по соблюдению ужесточённой политики Пекина в области энергопотребления, которая вызвана резким ростом цен на уголь и <br /> природный газ, растущим спросом на энергию, а также усилиями страны по <br /> сокращению выбросов — и это лишь некоторые причины.
                <br />
                <br />
                Дочерняя компания Foxconn — Eson Precision Engineering, которая производит <br /> важнейшие механические компоненты для Tesla, отметила в воскресенье, что приостановила производство на своих заводах в Куньшане с воскресенья по пятницу. <br /> Eson сообщила об этом в заявлении, поданном на Тайваньскую фондовую биржу. <br /> Филиал <span style={{ color: '#AB3535' }}>Foxconn</span>, однако, подчеркнул, что намерен удовлетворить потребности своих клиентов, несмотря на перебои с электроэнергией в стране.
                <div className='cite'>
                  <div> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                    <path opacity="0.8" d="M14.0391 32.4L0.0390632 46V-4.76837e-07H14.0391V32.4ZM44.0391 32.4L30.0391 46V-4.76837e-07H44.0391V32.4Z" fill="#D93D3D" />
                  </svg></div><span>Мы рассчитываем организовать производство <br /> в выходные дни или во время предстоящих <br /> праздников [в следующем месяце], чтобы <br /> удовлетворить потребности клиентов
                  </span>
                </div>
                <div className='quote'>— отметили в Eson. </div>
                <img style={{ marginBottom: 50, fontSize: 20, lineHeight: '150%' }} src={articleElement} />
                <div>Ряд ключевых поставщиков Tesla из Китая временно приостанавливают производство, поскольку в стране продолжается дефицит электроэнергии. Остановка производства является частью усилий компаний по соблюдению ужесточённой политики Пекина в области энергопотребления, которая вызвана резким ростом цен на уголь и <br /> природный газ, растущим спросом на энергию, а также усилиями страны по <br /> сокращению выбросов — и это лишь некоторые причины. </div>
                <div className='tags'>
                  <span>Space X</span>
                  <span>IT</span>
                </div>
                <div className='state__comment'>
                  <div>
                    <div className='post__like'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 21" fill="none">
                      <path d="M7.05 1C3.70875 1 1 3.72607 1 7.08868C1 13.1774 8.15 18.7125 12 20C15.85 18.7125 23 13.1774 23 7.08868C23 3.72607 20.2913 1 16.95 1C14.904 1 13.0945 2.02235 12 3.58714C11.4421 2.78742 10.701 2.13476 9.83934 1.68442C8.9777 1.23407 8.02091 0.999311 7.05 1Z" stroke="#BFC6CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg><div className='like__count'>230</div></div>
                    <div className='post__comment'>
                      <svg onClick={() => setMenuActive(!menuActive)} xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 20" fill="none">
                        <path d="M8.18772 16.0603L7.96718 15.8354H7.65217H0.75V0.75H21.25V15.8354H14.3478H14.0328L13.8123 16.0603L11 18.9287L8.18772 16.0603Z" stroke="#BFC6CE" stroke-width="1.5" />
                      </svg> <div className='comment__count'>12</div>
                    </div>
                  </div>
                  <div>
                    <div className='post__favorite'>
                      <svg fill="#BFC6CE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28px" height="26px"><path d="M 7 5 L 7 28 L 8.59375 26.8125 L 16 21.25 L 23.40625 26.8125 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59375 19.1875 L 16 18.75 L 15.40625 19.1875 L 9 24 Z" /></svg>
                    </div>
                    <div className='post__share'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                      <path d="M12.3695 4.23697H12.1195V4.48697V15.5065H9.88041V4.48697V4.23697H9.63041H7.41971L11 -0.127547L14.5802 4.23697H12.3695ZM19.4674 10.7478V10.4978H19.2174H16.7282V8.49349H20.5869C20.8907 8.49349 21.1781 8.60404 21.3867 8.79475C21.5945 8.98478 21.7065 9.23747 21.7065 9.49566V23.2696C21.7065 23.5278 21.5945 23.7805 21.3867 23.9705C21.1781 24.1612 20.8907 24.2718 20.5869 24.2718H1.41302C1.10922 24.2718 0.82188 24.1612 0.613286 23.9705C0.40544 23.7805 0.293457 23.5278 0.293457 23.2696V9.49566C0.293457 9.23747 0.405439 8.98478 0.613286 8.79475C0.821881 8.60403 1.10923 8.49349 1.41302 8.49349H5.27172V10.4978H2.78259H2.53259V10.7478V22.0174V22.2674H2.78259H19.2174H19.4674V22.0174V10.7478Z" fill="#BFC6CE" stroke-width="0.5" />
                    </svg></div>
                  </div>
                </div>
                <div className='hr'></div>
                <div className='comment'>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8294 2.43784L15.8296 2.43761C16.1062 2.15731 16.4357 1.93457 16.7988 1.78222C17.162 1.62989 17.5517 1.55097 17.9455 1.55C18.3393 1.55078 18.7292 1.62954 19.0924 1.78175C19.4557 1.93397 19.7853 2.15663 20.0621 2.43689L20.0626 2.43741C20.3436 2.71355 20.5668 3.0429 20.7192 3.40623C20.8715 3.76956 20.95 4.1596 20.95 4.55358C20.95 4.94756 20.8715 5.33759 20.7192 5.70092C20.5668 6.06425 20.3436 6.3936 20.0626 6.66974L20.0623 6.67005L8.36581 18.3658L8.14975 18.4094L8.14961 18.4095L4.07782 19.2194L4.07719 19.2195L3.06491 19.4345L3.2799 18.423L3.28003 18.4223L4.08997 14.3504L4.08998 14.3504L4.13293 14.1335L15.8294 2.43784ZM19.0906 5.70061L19.0913 5.69983C19.4577 5.33347 19.6463 4.94613 19.6463 4.55367C19.6463 4.16123 19.4577 3.77408 19.0914 3.4081C18.7233 3.03928 18.3352 2.86111 17.9455 2.86111C17.5557 2.86111 17.1683 3.0393 16.7996 3.40807L16.7988 3.40883L16.2895 3.9404L16.2556 3.97574L16.2902 4.01035L18.4891 6.20846L18.5237 6.24303L18.559 6.20922L19.0906 5.70061ZM15.3207 4.98132L15.2854 4.94595L15.25 4.98131L6.29549 13.9344L6.24685 13.983L6.30811 14.0143C7.24474 14.4922 8.00661 15.2535 8.48516 16.1898L8.51644 16.251L8.56503 16.2024L17.5181 7.25012L17.5534 7.21478L17.5181 7.17942L15.3207 4.98132ZM5.40185 15.1272L5.34599 15.1047L5.33416 15.1637L4.84775 17.5928L4.83302 17.6664L4.90658 17.6517L7.33641 17.166L7.39548 17.1542L7.373 17.0983C7.1942 16.6539 6.92743 16.2502 6.5887 15.9115C6.24997 15.5727 5.84627 15.3059 5.40185 15.1272Z" fill="#BFC6CE" stroke="#161619" stroke-width="0.1" />
                    <rect x="1.5" y="21.75" width="21" height="1" fill="#BFC6CE" />
                  </svg>
                  <div className='placeholder' onClick={() => setMenuActive(!menuActive)}>Алиса Зарипова</div></div>
                  <Menu active={menuActive} setActive={setMenuActive} />
                <div className='hr'></div>
                <div className='donate'>
                  <div className='inner'>
                    <div className='donate__block'>Нам очень нужна ваша помощь!
                      <div className='donate__link'> <p> поддержать проект </p><div> <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M0 8.5H17" className='donate__link__svg' stroke-width="1.5" />
                        <path d="M9.27295 16L17.0002 8.5L9.27295 1" className='donate__link__svg' stroke-width="1.5" />
                      </svg></div></div>
                    </div>
                    <div className='donate__block'>Пожалуйста, поддержите нас, чтобы мы могли    и дальше делиться с вами самыми свежими и интересными новостями.</div>
                  </div>
                </div>
                <div className='hr'></div>
              </div>
            </div>
            <div className='other__posts'>
              <div className='title'>Читайте далее</div>
              <div className='next__posts'>
                <div className='inner'>
                  <div className='next__post__blog'>
                    <img src={nextpost1} alt="" />
                      <div className='info'><div className='tag' style={{width: 62}}>Space X</div><div className='next__time'>9 ноября, 2020</div></div>
                      <div className='title'>Ship 20 успешно прошёл крио-тест! </div>
                  </div>
                  <div className='next__post__blog'>
                    <img src={nextpost2} alt="" />
                      <div className='info'><div className='tag' style={{width: 62}}>Space X</div><div className='next__time'>Вчера</div></div>
                      <div className='title'>Ship 20 успешно прошёл крио-тест! </div>
                  </div>
                  <div className='next__post__blog'>
                    <img src={nextpost3} alt="" />
                      <div className='info'><div className='tag' style={{width: 62}}>Space X</div><div className='next__time'>Вчера</div></div>
                      <div className='title'>Ship 20 успешно прошёл крио-тест! </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
