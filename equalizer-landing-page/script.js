console.log("it works!")

var mainContent = document.querySelector('main'); /* getter */
var prettyContent = document.querySelector('.pretty-content'); /* getter2 */
var prettyContentArt = document.querySelector('#art2');
var phone = document.querySelector('#phone');
var highlight = document.querySelector('.highlight');
var h1size = document.querySelector(".main-text h1");
var pitchSize = document.querySelector(".pitch")
var art = document.querySelector("#art")
var eqH1Marg = document.querySelector("#first-logo")
var h2size = document.querySelector('h2')
var highlightPitch = document.querySelector(".highlight p")
var priceDiv = document.querySelector(".price")
console.log(priceDiv)


function scaleEverything() {
    wW = window.innerWidth
    console.log('resize stuff')
    if (wW >= 1440) {
        mainContent.style["padding-left"] = "165px"
        mainContent.style["padding-right"] = "165px"
        prettyContent.style["width"] = "1110px"
        prettyContent.style["margin-bottom"] = "202px"
        prettyContentArt.style["left"] = "336px"
        phone.style["width"] = "280px"
        phone.style["left"] = "118px"
        phone.style["bottom"] = "188px"
        highlight.style["width"] = "446px"
        highlight.style["left"] = "569px"
        highlight.style["top"] = "90px"
        highlight.style["padding-left"] = "54px"
        highlight.style["padding-right"] = "59px"
        h1size.style["font-size"] = "88px"
        h1size.style["line-height"] = "88px"
        h1size.style["margin-bottom"] = "42px"
        pitchSize.style["font-size"] = "20px"
        pitchSize.style["line-height"] = "34px"
        pitchSize.style["margin-bottom"] = "321px"
        eqH1Marg.style["margin-bottom"] = "125px"
    } else if (wW <= 375) {
        mainContent.style["padding-left"] = "0px"
        mainContent.style["padding-right"] = "0px"
        prettyContent.style["width"] = "375px"
        prettyContent.style["margin-bottom"] = "377px"
        prettyContentArt.style["left"] = "48px"
        phone.style["width"] = "208.97px"
        phone.style["left"] = "80.67px"
        phone.style["bottom"] = "281px"
        highlight.style["width"] = "375px"
        highlight.style["left"] = "0px"
        highlight.style["top"] = "367px"
        highlight.style["padding-left"] = "36px"
        highlight.style["padding-right"] = "37px"
        h1size.style["font-size"] = "40px"
        h1size.style["line-height"] = "48px"
        h1size.style["margin-bottom"] = "20px"
        pitchSize.style["font-size"] = "16px"
        pitchSize.style["line-height"] = "26px"
        pitchSize.style["margin-bottom"] = "179px"
        eqH1Marg.style["margin-bottom"] = "64px"
    } else {
        mainContent.style["padding-left"] = (.00009802240073*wW**2 - .02298107986*wW + 5.16649515).toString() + 'px' /* setter */
        mainContent.style["padding-right"] = (.00009802240073*wW**2 - .02298107986*wW + 5.16649515).toString() + 'px' /* setter */
        /*prettyContent.style["width"] = (1.032217158*wW - 0.0001884717977*wW**2 + 14.42241234).toString() + 'px'*/
        prettyContent.style["width"] = "100%";
        console.log(0.7839629059*wW - 0.0002829423530*wW**2 - 206.1973213)
        prettyContent.style["margin-bottom"] = (0.0004862721708*wW**2.- 1.046903239*wW + 701.2066905).toString()+"px"
        prettyContentArt.style["left"] = (0.7839629059*wW - 0.0002829423530*wW**2 - 206.1973213).toString() + "px"
        phone.style["width"] = (0.3074311860*wW - 0.0001326371076*wW**2 + 112.3353985).toString() + "px"
        phone.style["left"] = (0.0001190676715*wW**2 - 0.1810561806*wW + 131.8221764).toString() + "px"
        phone.style["bottom"] = (0.0002676363525*wW**2 - 0.5730839234*wW + 458.2701092).toString() + "px"
        highlight.style["width"] = (0.0002355204168*wW**2 - 0.3608028899*wW + 477.1810251).toString() + "px"
        highlight.style["left"] = (0.7337877776*wW - 259.7120893 - 0.0001099258827*wW**2).toString() + "px"
        highlight.style["top"] = (0.0004308399165*wW**2 - 1.042068345*wW + 697.1887662).toString() + "px"
        highlight.style["padding-left"] = (0.05372252600*wW + 18.70692859 - 0.00002028711710*wW**2).toString() + "px"
        highlight.style["padding-right"] = (0.04046169511*wW + 23.36129756 - 0.00001091152513*wW**2).toString() + "px"
        h1size.style["font-size"] = (0.08828006205*wW + 10.24283103 - 0.00002380696392*wW**2).toString()+ "px"
        h1size.style["line-height"] = (.04607671474*wW + 31.38120325 - 0.000004693129088*wW**2).toString() + "px"
        h1size.style["margin-bottom"] = (0.00002227103076*wW**2 - 0.06107919783*wW + 61.77283549).toString() + "px"
        pitchSize.style["font-size"] = (0.007356671838*wW + 13.52023592 - 0.000001983913660*wW**2).toString() + "px"
        pitchSize.style["line-height"] = (0.000003605176436*wW**2 + 0.0009683418578*wW + 25.12989387).toString() + "px"
        pitchSize.style["margin-bottom"] = (0.2474168484*wW + 95.05779716 - 0.00006285593118*wW**2).toString() + "px"
        eqH1Marg.style["margin-bottom"] = (0.1156254960*wW + 25.16124226 - 0.00003214793426*wW**2).toString() + "px"

    }
    console.log('resize stuff2')
    console.log(wW)
}

function scaleFromMidUpOnly() {
    wW = window.innerWidth
    
    if (wW >= 1440) {
        prettyContentArt.style["width"] = "312px"
        art.style["width"] = "312px"
        art.style["display"] = "block"
        h2size.style["font-size"] = "40px"
        h2size.style["line-height"] = "52px"
        h2size.style["margin-bottom"] = "22px"
        highlight.style["padding-top"] = "58px"
        highlightPitch.style["line-height"] = "34px"
        highlightPitch.style["font-size"] = "20px"
        highlightPitch.style["margin-bottom"] = "38px"
        priceDiv.style["margin-bottom"] = "46px"
    } else if (wW > 768) {
        prettyContentArt.style["width"] = (0.047619047619047616*wW + 243.42857142857144).toString() + "px"
        art.style["width"] = (0.06746041666666665*wW + 214.85700000000003).toString() + "px"
        art.style["display"] = "block"
        h2size.style["font-size"] = (0.011904761904761904*wW + 22.857142857142858).toString() + "px"
        h2size.style["line-height"] = (0.017857142857142856*wW + 26.285714285714285).toString() + "px"
        h2size.style["margin-bottom"] = (0.01488095238095238*wW + 0.571428571428573).toString() + "px"
        highlight.style["padding-top"] = (0.01488095238095238*wW  + 36.57142857142857).toString() + "px"
        highlightPitch.style["line-height"] = (0.008928571428571428*wW + 21.142857142857142).toString()+"px"
        highlightPitch.style["font-size"] = (0.002976190476190476*wW+15.714285714285715).toString()+"px"
        highlightPitch.style["margin-bottom"] = (0.002976190476190476*wW + 33.714285714285715).toString()+"px"
        priceDiv.style["margin-bottom"] = (0.020833333333333332*wW+16).toString()+"px"
    } else {
        prettyContentArt.style["width"] = "280px"
        art.style["display"] = "none"
        h2size.style["font-size"] = "32px"
        h2size.style["line-height"] = "40px"
        h2size.style["margin-bottom"] = "12px"
        highlight.style["padding-top"] = "48px"
        highlightPitch.style["line-height"] = "28px"
        highlightPitch.style["font-size"] = "18px"
        highlightPitch.style["margin-bottom"] = "36px"
        priceDiv.style["margin-bottom"] = "32px"
    }
    
}

/*
function scaleFromMidDownOnly() {{
    wW = window.innerWidth
    
    if (wW > 768) {
        phone.style["width"] = "312px"
    } else if (wW <= 375) {
        phone.style["width"] = (0.047619047619047616*wW + 243.42857142857144).toString() + "px"
    } else {
        phone.style["width"] = "280px"
    }
    
}
*/

scaleEverything();
scaleFromMidUpOnly();
window.addEventListener("resize", scaleEverything);
window.addEventListener("resize", scaleFromMidUpOnly);
