//  onmouseenter and leave
const navLinks = document.querySelectorAll(".linked");
const emp = ""
const colObj = {
         opCity: "0.6",
         cLor: "#FF0090"
}
    for (let n in navLinks) {
        navLinks[n].onmouseenter = (function() {
            this.style.color = colObj["cLor"]
            this.style.opacity = colObj["opCity"]

        })
        navLinks[n].onmouseleave = (function() {
            this.style.opacity = emp
            this.style.color = emp
        })

    }

















// show dropdown 
    const clicNav = navLinks[0]
    const clicNavTwo = navLinks[1]
    let link_first =  document.querySelector(".link_first")
  let link_second =  document.querySelector(".link_second");
   link_second.style.display = "none"
    link_first.style.display = "none"
   
   
    clicNav.onclick = (function (event) {
        if(link_first.style.display === "none") {
            link_first.style.display = "block"
                }    
        else {
            link_first.style.display = "none"

        }



        if(link_second.style.display === "none" ) {
                link_second.style.display = "none"
           }
           else{
                link_second.style.display = "none"
   
           }
 event.preventDefault()

    })

     

    clicNavTwo.onclick = (function(event) {
        // document.querySelector(".link_second").
        // const  firstLink = document.querySelector("link_first");
        if( link_second.style.display === "none" ) {
            link_second.style.display = "block"
        }

        else{
            link_second.style.display = "none"
        }


      
      
        if(link_first.style.display === "block") {
            link_first.style.display = "none"
                }    
        else {
            link_first.style.display = "none"

        }
 event.preventDefault()
    })

//    links that hide drpdown 
// const dropUl =    document.querySelectorAll("#dropUl"); 
const closeDrop = document.querySelectorAll(".closeDrop");
// for (let u in dropUl) {
      for (let d = 0;d < closeDrop.length; d++) {
        closeDrop[d].onclick = () => {
            const dropFisrtBox = document.getElementById("dropFisrtBox");
            dropFisrtBox.parentElement.style.display = "none"
        }
      }


const closeDropdown = document.querySelectorAll(".closeDropdown");
    for ( let cL in closeDropdown) {
          closeDropdown[cL].onclick = () => {
            const dropSecondBox = document.getElementById("dropSecondBox");
            dropSecondBox.parentElement.style.display = "none"
          } 
    }

















    // coinTable
    ( function () { 
         const coinTable = document.querySelectorAll(".coinTable");
  for (let coin in coinTable) {
    coinTable[coin].onmouseenter = function() {
        this.parentNode.style.background = " #FF003F"
    }
    coinTable[coin].onmouseleave = function() {
        this.parentNode.style.background = ""
    }

  }


})()









//  coin_security
 const obSecurityCoinText = [ "How Do We Secure The Crypto In Your Wallet", 
     `We rely on cryptograpyhy to secure all our data.  with Hashing-integrated  methods we generate the best form
      of data storage and security, hence fraudulent try's against our users accounts are blocked and there data and crypto asset secured `,
     `secondly, with cryptroeconomics also, we render an equivalent security 
     option too  to optimize our data security.`,
     "&gt;"
    ]


// h1 
const coin_security = document.getElementById("coin_security");
  const coin_h1 = document.createElement("H1");
    coin_hText = document.createTextNode = obSecurityCoinText[0]
    coin_h1.innerHTML = coin_hText
     coin_security.appendChild(coin_h1)


// p one 
const coin_pFirst = document.createElement("p");
coin_pFirst.innerHTML = obSecurityCoinText[1]
coin_security.appendChild(coin_pFirst)

// p two 
const coin_pSecond = document.createElement("p");
 coin_pSecond.innerHTML = obSecurityCoinText[2]
 coin_security.appendChild(coin_pSecond)


// a ele 
const coin_a = document.createElement("a");
 coin_a.innerHTML =`<span> ${obSecurityCoinText[3]} </span>` 
    // coin_a.href = ""
 coin_security.appendChild(coin_a)













 let dem = document.getElementById("demo")
 let pro = document.getElementById("pro")  
     
    demo.style.maxHeight = "0px"
     demo.style.display = "none"

     pro.style.maxHeight = "400px"
const exp_no_exp_btn = document.getElementsByClassName("exp_no_exp_btn");
       
// btn 1
exp_no_exp_btn[1].id = "de"
   exp_no_exp_btn[0].onclick = function () {
    if(this.nextElementSibling.style.maxHeight === "0px" && exp_no_exp_btn[1].nextElementSibling.style.maxHeight === "400px"  ) {
       this.nextElementSibling.style.maxHeight = "400px"
        this.nextElementSibling.style.display = "block"
    exp_no_exp_btn[1].nextElementSibling.style.maxHeight = "0px"
    exp_no_exp_btn[1].nextElementSibling.style.display = "none"
    this.id = "de"
     exp_no_exp_btn[1].id = ""
    }

   }  


//  btn 2 
   exp_no_exp_btn[1].onclick = function () {
    if(this.nextElementSibling.style.maxHeight === "0px" && exp_no_exp_btn[0].nextElementSibling.style.maxHeight === "400px"  ) {
    this.nextElementSibling.style.maxHeight = "400px"
    this.nextElementSibling.style.display = "block"
    exp_no_exp_btn[0].nextElementSibling.style.maxHeight = "0px"
    exp_no_exp_btn[0].nextElementSibling.style.display = "none"
    this.id = "de"
    exp_no_exp_btn[0].id = ""
    }
   }  






//    managersJs managersJs 
 const managersJs = document.querySelectorAll(".managersJs")
//  console.log(managersJs);
 for (let manager = 0; manager < managersJs.length; manager++) {
    managersJs[manager].style.setProperty("transition", "ease-in-out 0.5s")
      managersJs[manager].onmouseenter = () => {
        managersJs[manager].style.transform = "scale(0.9)"
      }
      managersJs[manager].onmouseleave = () => {
        managersJs[manager].style.transform = "scale(1)"
      }
 }











   

//    loader 
    const mainLoad = document.getElementsByTagName("p")
    const mainLoadWord = mainLoad.namedItem("mainLoad")
const loaDer = document.getElementById("loader");
const loaderParent = document.getElementById("loaderParent")
  const bD = document.body;
  bD.style.position = "fixed"
function padLoad() {
    loaDer.innerHTML += "o"   
    if (loaDer.innerHTML.length === 9 ) {
clearInterval(clInterval)  
    mainLoadWord.classList.add("Full_loaded")
    loaDer.style.setProperty("display", "none")

} 
}
 let clInterval = setInterval(padLoad, 80)

 //  loadr parent box 
 function disapper() {
    loaderParent.classList.add("fade_away")
 bD.style.position = ""
 }
setTimeout(disapper, 2000)


//   hero h1 js 
loaderParent.addEventListener("animationend", () => {
    let hero_se = document.querySelector(".hero_se");
    hero_se.classList.toggle("hero_animation")

    
})




















//  ethereum after js && top h1 
const ethAfter = document.getElementById("ethAfter")

// top h 
 const top_h = document.getElementById("top_h");


window.addEventListener("scroll", () => {
    if(window.scrollY >= 1 ) {
    ethAfter.style.setProperty("--left", "calc(100% - 80px)")
    top_h.style.setProperty("transform", "scale(0.9)")
}
    else {
        ethAfter.style.setProperty("--left", "calc(100% - 40px)")
    top_h.style.setProperty("transform", "scale(1)")
                    
    }
 })












//  crypto_e_t 
const crypto_e_t = document.getElementById("crypto_e_t")
crypto_e_t.style.opacity = "0"
const showCryptoAtEase = (entries) => { 
      if(entries[0].isIntersecting) {
    entries[0].target.parentElement.classList.add("crytop_et_observer")     
    entries[0].target.classList.add("crytop_et_observer")
        } 
    }
    
const observer = new IntersectionObserver(showCryptoAtEase, {
    threshold: 0.8
})
observer.observe(crypto_e_t)





// coin_security 
 const showCoinSecurity = (entries ) => {
    if(entries[0].isIntersecting) {
        entries[0].target.children[1].classList.add("coinSecurityAnimation")
        entries[0].target.children[2].classList.add("coinSecurityAnimation")
        entries[0].target.children[3].classList.add("coinSecurityBtnAnimation")
    }
 }
const  coinSecurityObserver = new IntersectionObserver(showCoinSecurity, {threshold: 0.8})
coinSecurityObserver.observe(coin_security)





// coin secuity btn 
 const showCoinSecurityBtn = (entries) => {
        if (entries[0].isIntersecting) {
            entries[0].target.children[0].classList.add("coinSecurityBtnAnimation")
        }
 }
const coinSecurityBtnObserver = new IntersectionObserver(showCoinSecurityBtn,{threshold: 0.2 })
coinSecurityBtnObserver.observe(coin_security)














// side nav js
const sideSpan = document.querySelectorAll(".sideSpan")
const sideNav = document.getElementById("sideNav")

document.getElementById("sideNavBtn").onclick = () => {
 sideNav.classList.toggle("hidden_Nav")
    const sideN = document.querySelectorAll(".sideSpan")

    sideN.forEach(( side, index) => {
     side.classList.toggle("hidden_nav_a");
     side.style.animationDelay = 0.4 + index / 10 + "s"
   })
    // let s = Array.from(sideSpan[sideA].innerHTML).join("")
}




// sideSpan for side nav
for (let sideSpanBtn in sideSpan) {
    sideSpan[sideSpanBtn].onclick = () => {
        document.getElementById("sideNavBtn").click()
    }    
}













// the_w_w_manage js 
const theWayWeManage = document.getElementById("the_w_w_manage");
   

const tWWM = function (entries) {

    const tWWMChildren = entries[0].target.children;
  let tWWMChildrenArr =    Array.from(tWWMChildren)
    if (entries[0].isIntersecting) {
        tWWMChildrenArr.forEach((showNow,index) => {
            showNow.classList.add("hidden_the_way_we_manage")
            showNow.style.animationDelay =  0.4 + index / 10 + "s";
        })
        // console.log(tWWMChildren);
    // entries[0].target.children[0].classList.add(" coinSecurityBtnAnimation ")
}
}

const theWayWeManageObserver = new IntersectionObserver(tWWM,{threshold: 0.4})

theWayWeManageObserver.observe(theWayWeManage)


















// experience_or_no_experience_animation
  const eperienceOrNoExperience = document.getElementById("experience_or_no_experience_animation");



 const eONE = function (entries) {
    if (entries[0].isIntersecting) { 
    entries[0].target.classList.toggle("experience_show", true);
    }
 }
const e_O_N_E_Observer = new IntersectionObserver(eONE,{threshold: 0.5})

    e_O_N_E_Observer.observe(eperienceOrNoExperience)






    // exp_dropdown
 const experienceO_N_E_Dropdown = document.getElementById("exp_dropdown");

 const exp_O_N_E_Drop = function (entries) {
    // console.log(entries[0]);
    if (entries[0].isIntersecting) {
    entries[0].target.classList.toggle("experience_show", true)
}
 }
const experienceO_N_E_DropdownObserver = new IntersectionObserver(exp_O_N_E_Drop, {threshold: 0.5})
experienceO_N_E_DropdownObserver.observe(experienceO_N_E_Dropdown)










// downloadApp 
const downloadApp = document.getElementById("downloadApp") ;
const downloadAppChildren = downloadApp.children;
const downloadAppArr = Array.from(downloadAppChildren)

const  downloadAppCall = (entries) => {
    // console.log(entries[0]);
    if (entries[0].isIntersecting) {
        // entries[0].target.
        downloadAppArr.forEach((showChild,index) => {
       showChild.classList.toggle("hidden_the_way_we_manage", true)
       showChild.style.animationDelay = 0.5 + index / 10 + "s";
        })
    }
}
const downloadAppObserver = new IntersectionObserver(downloadAppCall, {threshold: 0.5} )
//  console.log(downloadAppArr);
downloadAppObserver.observe(downloadApp)











//  const image_display_cont = document.getElementsByClassName("image_display_cont");
//  const  swingBox = document.getElementById(" swingBox")
//  let win = window.innerHeight / 1000 + "%" 
//  console.log(win);
//  window.onscroll = function () {
    
//  if ( swingBox.offsetHeight >=  "200px" || swingBox.offsetHeight >= "150px"   ) {
//     swingBox.style.backgroundColor = "red"
//  } else  {
//     swingBox.innerHTML = swingBox.offsetHeight
//  }
//  }


//  console.log(image_display_cont);

// console.log(closeDropdown[0]);





// const wr = [" re"]
//   let s =wr[0].toString().toUpperCase().repeat(6)
//   wr.repeat(6)
//  for (let f in s )  {
    //  toUpperCase();
//  }
//   console.log(
//   wr.repeat(6)
//   s
//   );