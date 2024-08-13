import Image from "next/image";

import mLogo from "../public/mLogo.svg";
import searchL from "../public/searchL.png";
import likeL from "../public/like.png";
import callL from "../public/Call.png";
import languageLogo from "../public/Pages.png";
import cardL from "../public/card.png";
import instaL from "../public/ins_line.png";
import telegramL from "../public/telegram_line.png";
import whatsappL from "../public/whatsapp_line.png";
import facebookL from "../public/facebook_line.png";
import resultl from "../public/лого фулл 1.png";
import menuLogo from "../public/menu.png";

export default function Home() {
  return (
    <div>
      <nav className="main-b w-full h-100 flex items-center justify-between">
        <div className="logo-m">
          <Image src={mLogo} alt="logo" />
        </div>
        <div className="flex gap-12 h-txt hidden-to-show">
          <p>Услуги</p>
          <p>О нас</p>
          <p>Блог</p>
          <p>Контакты</p>
        </div>
        <div>
          <div className="flex gap-3">
            <Image className="logo-icons" src={searchL} alt="searchLogo" />
            <Image className="logo-icons" src={likeL} alt="likeLogo" />
            <div className="flex gap-3 hidden-to-show">
              <Image src={callL} alt="callLogo" />
              <Image src={languageLogo} alt="languageLogo" />
            </div>
            <div className="show-to-hidden logo-icons"><Image src={menuLogo} alt="menuLogo" /></div>
          </div>
        </div>
      </nav>

      <h2 className="main-b main-txt mt-14">Фотогалерея и видеотуры</h2>

      <div className="main-b mt-10 gap-3 filter-btns flex">
        <button className="h-14 flex items-center filter-btns-p active-btn">Все</button>
        <button className="h-14 flex items-center filter-btns-p">Фотографии</button>
        <button className="h-14 flex items-center filter-btns-p">Видеотуры</button>
      </div>

      <div class="main-b mt-4 grid grid-rows-3 grid-flow-row gap-4 xl:flex-col xl:h-auto xl:gap-4px xl:grid-cols-1 xl:grid xl:grid-flow-col">
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
        <div className="card">
          <Image src={cardL} alt="likeLogo" />
        </div>
      </div>

      <footer className="footer mt-24">
        <div className="main-b">
          <div className=" h-175 flex items-center justify-between">
            <div className="logo-m">
              <Image src={mLogo} alt="logo" height={75} />
            </div>
            <div>
              <div className="flex gap-5">
                <Image className="logo-icons-1" src={instaL} alt="searchLogo" />
                <Image className="logo-icons-1" src={telegramL} alt="likeLogo" />
                <Image className="logo-icons-1" src={whatsappL} alt="callLogo" />
                <Image className="logo-icons-1" src={facebookL} alt="facebookLogo" />
              </div>
            </div>
          </div>
          <div className="top-bottom-l flex grid-footer items-center gap-16 h-238">
            <div>
              <p className="font-bold">Услуги</p>
              <p>Купить</p>
              <p>Арендовать</p>
              <p>Продать</p>
              <p>Оценить</p>
            </div>
            <div>
              <p className="font-bold">Недвижимость</p>
              <p>Квартиры</p>
              <p>Новостройки</p>
              <p>Дома и участки</p>
              <p>Коммерческая </p>
            </div>
            <div>
              <p className="font-bold">Компания</p>
              <p>О нас</p>
              <p>Блог</p>
              <p>Контакты</p>
              <p>Связаться</p>
            </div>
            <div>
              <p className="font-bold">Связаться</p>
              <p>Ипотечный калькулятор</p>
              <p>Инвестиции в недвижимость</p>
              <p>в Дубае</p>
              <p></p>
            </div>
          </div>
          <div className="h-24 flex justify-between items-center">
            <div className="txt-color">
              2024 © RMC De Luxe real estate LLC. Все права защищены
            </div>
            <div>
              <Image src={resultl} alt="logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
