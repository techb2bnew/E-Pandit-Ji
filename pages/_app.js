import "@/styles/globals.css";
import localFont from "next/font/local";
import { ABeeZee } from "next/font/google";
import './../styles/globals.css'
import FooterMobileBar from "@/components/Uiux/FooterMobileBar";
const myFont = localFont({
    src: [{
        path: "../public/fonts/BalooBhai-Regular.ttf",
        weight: "400",
        style: "normal",
    }, ],
    variable: "--font-primary",
});
const abeezee = ABeeZee({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-abeezee",
});
export default function App({ Component, pageProps }) {
    return ( <
        div className = { `${myFont.variable} ${abeezee.variable}` } >
        <
        Component {...pageProps }
        />  <
        div className = "w-full bottom-0 z-10 fixed" >
        <
        FooterMobileBar / >
        <
        /div> < /
        div >
    );
}