import React from 'react';
import logo from './logo.svg';
import './App.css';

// export edildiği için başka yerden şu isim formatında component html dosyalar içerisinde çağırılabilir
// <App /> veya <App> </App>
export default function App() {
  const number = 10; // variable
  // arrow functions
  const showMessage = () => {
    alert('mesaj')
  }
  // CTRL + J ile terminal ekranı açıyoruz // projeyi serve yayınlamak için npm start
  // bu kısımda event, variable tanımları yapabiliriz. // event variable tanımları her zaman return ifadesi üstüne yazılır
  // bu componente dinamik olarak arayüze yansıtacağımız değerleri tanımladığımız arayüzleri yazdığımız kısım.
  return ( // jsx dosyası tsx
    <div className="App">
      <span>
      Numara : {number} 
       {/* data binding  property binding */}
       {/* componentdeki değişken değerini arayüze bağlama tekniğine propery binding */}
       <button onClick={showMessage}>Click Me</button>
       {/* event binding */}
       {/* component içinde tanımlanan bir function ifadesini event'e bağlayarak callback ettiğimiz yönteme ise event binding diyoruz. */}
      </span>
    </div>
  );
}

// export default App;
