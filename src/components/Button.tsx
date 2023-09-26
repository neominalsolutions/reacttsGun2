// component geliştirirken componentler bir arayüz döndürdüğünden dolayı sadece ts kodları tanımlamıyoruz. bunun dışında jsx template engine ile çalışabilmek için tsx uzantılı dosyalar tanımlıyoruz.
// UI KIT Component Props ile çalışır

import { CSSProperties } from "react";
// ekrana bir elementin propsdan gelen özelliklerine göre dinamik çizilmesin, sağlarlar.
type ButtonProps = {
  text?:string, // button property anlamında kullandık
  myStyles?:CSSProperties,
  myHover?:(event:any) => void,
  myClick?:() => void // method tanımı event fırlata bilmek için yaptık 
}
export default function Button(props:ButtonProps) {

  const {text, myStyles, myClick, myHover} = props;
  const buttonClick = () => {
    if(myClick) // myClick !== undefined
        myClick(); // event fırlatılmış oluyor
      // butona tıklanınca bir eylemi başlat.    
  }

  return (<>
  {/* attribute binding yapıp stil özelleştirmesi yaptım */}
  {/* react kendi eventleri component custom eventlere bind ediyoruz. */}
  <button onMouseOver={() => {
    if(myHover) 
      myHover(text);
  }} onClick={buttonClick} style={myStyles}> 
    {text}
    {/* property binding */}
  </button>
  </>)
}


  // props ile component initial değerler ile doma basılıyor. inital değer le render oluyor
  //props ile componente dinamilk paramtereler geçip component özelleştirilebilir.// reactdaki ismi props olarak geçer.
  // dışarıdan component içerisine değer enjecte ettim. Böylelikle Button componentine dışarıdan değer gönderilebilir bir hale getirdik. Tanımladığımız tip ile text değeri deconstruct ettik.

// var c = new Person('ahmet');
// var c1 = new Person('ali')