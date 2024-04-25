import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { noticeMain } from '../../FashionMain';
import { notice } from '../../Fashion';
import { noticeDown } from '../../noticeDown';

export const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true 
  };

  return (
    <main className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center h-full w-full bg-pinkie">
          <div className="max-w-md mx-auto">
              {noticeMain.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <h2 className="text-xl font-bold text-center mb-4">{item.title}</h2>
                  <img src={item.image} alt="Noticia" className="w-full h-auto mb-4 max-w-full" />
                  <div className="text-sm text-center">
                    <p className="mb-1">{item.description}</p>
                    <p className="text-xs text-pink-black">Fuente: {item.font}</p>
                    <p className="text-xs text-pink-black">Fecha: {item.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full w-full bg-pink-black text-center">
          <div className="m-4 p-4 bg-pink-black rounded w-full overflow-y-auto">
            {notice.map((item) => (
              <div key={item.id}>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <img src={item.image} alt="Noticia" className="w-full h-auto mb-2 max-w-xs mx-auto" />
                <p className="text-sm">{item.description}</p>
                <p className="text-xs text-pinkie">Fuente: {item.font}</p>
                <p className="text-xs text-pinkie">Fecha: {item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center h-full w-full bg-pinkie">
          <div className="max-w-md mx-auto">
            <Slider {...settings}>
              {noticeDown.map((item) => (
                <div key={item.id} className="flex flex-col items-center ">
                  <h2 className="text-xl font-bold text-center mb-4">{item.title}</h2>
                  <img src={item.image} alt="Noticia" className="w-full h-auto mb-4 max-w-full" />
                  <div className="text-sm text-center">
                    <p className="mb-1">{item.description}</p>
                    <p className="text-xs text-pink-black">Fuente: {item.font}</p>
                    <p className="text-xs text-pink-black">Fecha: {item.date}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
};


