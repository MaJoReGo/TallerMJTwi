import React from 'react';
import { noticeMain } from '../../FashionMain';
import { notice } from '../../Fashion';

export const Main = () => {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center h-full w-full bg-pinkie">
          <div className="m-4 p-4 bg-purple text-center  w-full overflow-y-auto">
            {noticeMain.map((item) => (
              <div key={item.id}>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <img src={item.image} alt="Noticia" className="w-full h-auto mb-2 max-w-xs mx-auto" />
                <p className="text-sm">{item.description}</p>
                <p className="text-xs text-pink-black">Fuente: {item.font}</p>
                <p className="text-xs text-pink-black">Fecha: {item.date}</p>
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
    </main>
  );
};
