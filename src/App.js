import React,{Component} from 'react';
import logo1 from './Image/MakarehLogo1080x360.png';
import logo2 from './Image/MakrehLogo1080x360White.png';
import $ from "jquery";
import './App.css';
import Countdown from 'react-countdown';

// let day=30;
// let hour=0;
// let minute=0;
// let second=0;


let d,h,m,s;





export default class App extends Component{

    // state = {
    //     day:20,
    //     hour:10,
    //     minute:20,
    //     second:40
    // }


    componentDidMount() {
        // let topLogo1 = $(".logo").offset().top;
        // let topSlogan = $(".slogan").offset().top;
        // let topLogo2 = $(".logo2").offset().top;
        // let topStartDate = $(".startDate").offset().top;
        // let topCountDown = $(".countDown").offset().top;
        // let topMainContent = $(".mainContent").offset().top;
        // let topSocial = $(".social").offset().top;
        let today = new Date();
        let t = 1604478033924 - today.getTime();
        // alert(t);
        this.dhms(t);

        // alert($(".sloganTest").height())

        let father = parseInt($(".father").offset().top);
         $(".sloganTest").css("margin-top" , (window.innerHeight/2)-(($(".sloganTest").height())/1.4)+"px");
        let slogan = parseInt($(".sloganTest").css("margin-top"));
// alert(($(".sloganTest").height()))

        $(document).scroll(function (){
            // $(".wholePage").css("top",  $(document).scrollTop());

            $('.sloganTest').css("margin-top",  (slogan - parseInt($(document).scrollTop())) + "px");
            // alert($('.sloganTest').css("margin-top"))
            // $(".firstPage").css("top",  $(document).scrollTop())
            // $(".father").css("bottom",  "-100vh" + $(document).scrollTop())
            // $('.secondPage').css("top", "-100vh" + $(document).scrollTop())
            $('.father').css("height",  (father + $(document).scrollTop()) + "px");



            // alert($('.secondPage').css("height"));
            // alert($(document).scrollTop())

            // $(".logo").css("top",  $(document).scrollTop()  + topLogo1)
            // $(".slogan").css("top", $(document).scrollTop()  + topSlogan)
            // $(".logo2").css("top", $(document).scrollTop()  + topLogo2)
            // $(".startDate").css("top", $(document).scrollTop()  + -700)
            // $(".countDown").css("top", $(document).scrollTop()  + topCountDown)
            // $(".mainContent").css("top", $(document).scrollTop()  + topMainContent)
            // $(".social").css("top", $(document).scrollTop()  + topSocial)
            // alert(topStartDate)

        })

        this.amount = setInterval(this.Count,1000)


    }

    dhms = (t) => {
        d = Math.floor(t / (1000 * 60 * 60 * 24));
        h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        s = Math.floor((t % (1000 * 60)) / 1000);
        // return d + 'Day(s) ' + h + 'Hour(s) ' + m + 'Minute(s) ' + s + 'Second(s)'
    }

    Count = () =>{
        $(".second").text(s);
        $(".minute").text(m);
        $(".hour").text(h);
        $(".day").text(d);
        s--;
        if (s === -1) {
            s = 59;
            m--;
        }
        if(m === -1) {
            m = 59;
            h--;
        }
        if (h === -1) {
            h = 23;
            d--;
        }
        if (d <= -1){
            // alert("bye")
            clearInterval(this.amount);
            $(".startDate").fadeOut(1000)
            $(".countDown").fadeOut(1000);
            // $(".start").fadeIn(2000);
        }





    }


    render(){

        return(
            <main class="wholePage">
                <p className="landScapeState">لطفا صفحه را در حالت portrait قرار دهید.</p>
                <section className="firstPage">
                    <img className="logo" src={logo1} alt="مکاره"/>
                    {/*<p className="slogan">هر گوشه‌ایش یه جوره</p>*/}
                </section>
                <p className="sloganTest">هر گوشه‌ایش یه جوره</p>
                <div className="father">

                    <section className="secondPage">
                    <img className="logo2" src={logo2} alt="مکاره"/>
                    <div className="gap"></div>
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

                    <div className="social"><a href=""></a><a href=""></a></div>
                </section>
                </div>
            </main>
        )
    }
}


// const Completionist = () => <span>You are good to go!</span>;


