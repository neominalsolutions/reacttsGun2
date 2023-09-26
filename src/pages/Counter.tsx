
// app/couter
// url üzeirnden çağırılan componentlere sayfa componentleri deriz.
// apiden veri çekme, arayüzde kullanıcı etkileşimi sonucu bir eylem yapma gibi özellikleri burada geliştiririz.

import { useState } from "react";
import Button from "../components/Button";

// genel anlamda sayfa componentleri sayfaya ait davranışlar kendi içerisinde tanımlar ve state dediğimiz kavramlar ile çalışır
function Counter() {
  // let counter = 0;
  // react ekranın yeniden render edilmesi için özel bir duruma ihtiyacı var.
  // biz bu özel duruma state diyoruz.
  // state son render edilen sayfanın güncel halindeki değerleri üzerinde barındıran bir local storage mekanizması. state component ile ilgili güncel veri saklanıyor.
  // react da state mekanizmasını kullan.
  // hook dediğimiz yapılar. React veya başka paketlerde önceden tanımlanan ve component bazı özellikler kazandıran yapılar.
  // ilk değer getter
  // ikinci değer bu value set eden setter
  const [counter,setCounter] = useState<number>(0);
  // const [counter2,setCounter2] = useState<number>(1);

  const artir = () => {
    if(counter < 100){
      // counter++;
      // state yeni değer almasını setter ile yapıyoruz.
      // counter sadece react içerisinde read only tanımlanmıştır
      setCounter(counter + 1);
      console.log('counter +', counter);
    }
  }
  const azalt = () => {
    if(counter > 0){
      // counter--;
      setCounter(counter - 1); // set işlemi counter property güncelliyor. component yenide render alıyor
      console.log('counter -', counter);
    }
  }

  return (
    <>
    <label>Sayac: {counter}</label>
     <Button myClick={artir} text="Sayacı Artır (+)" myStyles={{color:'blue'}}  />
     <Button myClick={azalt} text="Sayacı Azalt (-)" myStyles={{color:'grey'}}  />
    </>
  )
}

export default Counter;