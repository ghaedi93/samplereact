import React,{Component} from 'react';
import logo1 from './Image/MakarehLogo1080x360.png';
import logo2 from './Image/MakrehLogo1080x360White.png';
import $ from "jquery";
import './App.css';
import Countdown from 'react-countdown';

let day=0;
let hour=0;
let minute=0;
let second=5;

export default class App extends Component{

  // state = {
  //     day:20,
  //     hour:10,
  //     minute:20,
  //     second:40
  // }


  componentDidMount() {
    let topLogo1 = $(".logo").offset().top;
    let topSlogan = $(".slogan").offset().top;
    let topLogo2 = $(".logo2").offset().top;
    let topStartDate = $(".startDate").offset().top;
    let topCountDown = $(".countDown").offset().top;
    let topMainContent = $(".mainContent").offset().top;
    let topSocial = $(".social").offset().top;

    // alert(topStartDate)

    $(document).scroll(function (){
      $(".logo").css("top",  $(document).scrollTop()  + topLogo1)
      $(".slogan").css("top", $(document).scrollTop()  + topSlogan)
      $(".logo2").css("top", $(document).scrollTop()  + topLogo2)
      $(".startDate").css("top", $(document).scrollTop()  + topStartDate)
      $(".countDown").css("top", $(document).scrollTop()  + topCountDown)
      $(".mainContent").css("top", $(document).scrollTop()  + topMainContent)
      $(".social").css("top", $(document).scrollTop()  + topSocial)

    })

    this.amount = setInterval(this.Count,1000)


  }


  Count = () =>{
    $(".second").text(second);
    $(".minute").text(minute);
    $(".hour").text(hour);
    $(".day").text(day);
    second--;
    if (second === -1){
      second = 59;
      minute--;
      if(minute === -1){
        minute =59;
        hour--;
        if (hour === -1){
          hour =23;
          day--;
          if (day === -1){
            clearInterval(this.amount);
            $(".countDown").hide(1000);
            $(".start").show(2000);
          }
        }

      }

    }
  }


  render(){

    return(
        <main class="wholePage">
          <section className="firstPage">
            <img className="logo" src={logo1} alt="مکاره"/>
            <p className="slogan">هر گوشه‌ایش یه جوره</p>
          </section>
          <section className="secondPage">
            <img className="logo2" src={logo2} alt="مکاره"/>
            <p className="startDate">تاریخ راه اندازی نرم افزار در</p>
            <section className="countDown">
              <div><p className="second"></p><p>ثانیه</p></div>
              <div><p className="minute"></p><p>دقیقه</p></div>
              <div><p className="hour"></p><p>ساعت</p></div>
              <div><p className="day"></p><p>روز</p></div>
            </section>
            <p className="start">نرم افزار راه اندازی شد.</p>
            {/*<Countdown date={Date.now() + 2.938e+9}>*/}
            {/*    <Completionist />*/}
            {/*</Countdown>*/}
            <article className="mainContent"><p>درباره مکاره</p><span>

مکاره اولین بازار-شبکه اجتماعی ایران تحت وب و موبایله. در این سامانه امکان بارگذاری انواع رسانه و فروش انواع کالا و خدمات بوجود آمده و نیاز همه‌ی افرادی که نیاز به توسعه بازار‌آنلاین و یا ایجاد شبکه‌ای از افراد
و دوستانشون رو دارند فراهمه.

بازار مکاره
لغت‌نامه دهخدا
بازار مکاره . [ رِ م َ رَ / رِ ] (اِ مرکب ) بازاری که در مدت چند روز در محلی برپا شود و بازرگانان از نقاط مختلف کشورهای متعدد کالاهای خود را بدانجا آورند ودر معرض نمایش و فروش گذارند. رجوع به مکاره شود.



بازار مکاره، نمایشگاه (غیر مصطلح: faire یا fayre)، که به عنوان سرگرمی نیز شناخته می‌شود، تجمع مردم برای انواع سرگرمی یا فعالیت‌های تجاری است. به‌طور طبیعی نمایشگاه موقت است با برنامه زمان‌بندی شده به اندازه یک بعد از ظهر تا چند هفته.</span></article>

            <div className="social"><div>Apple</div><div>Android</div></div>
          </section>
        </main>
    )
  }
}


// const Completionist = () => <span>You are good to go!</span>;


