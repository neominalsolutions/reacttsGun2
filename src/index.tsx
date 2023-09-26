import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import Counter from './pages/Counter';

// jsx => template engine react uygulamalarında html yakın bir formatta dinamik web sayfalarını javascript kodu kullanarak render etmemizi sağlayan bir view engine.
// js versiyonu için bu dosya jsx ama ts versiyonu tsx uzantılı.

// uygulamaın main dosyası index.tsx
// React ana paketi
// ReactDOM HTML müdehale etmemiz sağlayan HTML üzerinde element oluşturmamızı sağlayan bir paket.

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Casting
);
// render function react'da bileşenlerin ara yüze append edilmesi sağlayan react DOM özelliği
// <></> fragment kapsayıcı ayraç
root.render(
  <>
  <Counter />
  <App></App>
   <App />
   {/* <button value={'deneme1'}></button> */}
   {/* Button btn = new Button() 
    btn.click+=ButtonClick(e args)
   */}
   <Button myHover={(event:any) => {
    console.log('event',event);
    alert('buton üstüne gelindi')
   }} myClick={() => {
    alert('button1 tıklandı')
   }} myStyles={{color:'blue', padding:'5px', borderRadius:'5px', margin:'5px',cursor:'pointer'}} text='Button1' />
   <Button myClick={()=> {
    window.prompt('yaşınızı giriniz');
   }} text='Button2' myStyles={{color:'red'}} />

   {/* custom react component çağırım. */}
   {/* <app /> bir predefined html element çağırımı */}
  </>
  // <React.StrictMode>
    // Uygulama ilk çalıştığında App isminde component üzerinden id root olan element component JS ile append ediliyor.
  // </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
