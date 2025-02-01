/* Using Locomotive Js for smooth Scroling */
// const scroll = new LocomotiveScroll({
// el: document.querySelector('.wrapper'),
// smooth: false
/* not using Loco-js cause it is creating issues 
with gsap (only with cursor) tried all methods :) 
to make it work but it didnt */
// });




/* Animated Cursor */
let WrapperBody = document.querySelector(".wrapper")
let cursor = document.querySelector(".cursor")

WrapperBody.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})

WrapperBody.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 0,
        opacity: 0
    })
})

WrapperBody.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    })
})






/* Navbar for mobile view */
let menuBtn = document.querySelector(".bi")
let closeBtn = document.querySelector(".navph-r button")
let phoneNav = document.querySelector(".nav-ph")

menuBtn.addEventListener("click", () => {
    phoneNav.style.top = "0%"
});

closeBtn.addEventListener("click", () => {
    phoneNav.style.top = "-100%"
});




/* Navbar goes disappear after Section selected */
let SecClick = document.querySelectorAll(".navph-l h3 a");
SecClick.forEach((link) => {
    link.addEventListener("click", () => {
        phoneNav.style.top = "-100%";
    });
});




/* Text animation while screen loads */
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const target = document.querySelector('.ab-2');
observer.observe(target);




/* Collection of different cars */
let arrowL = document.querySelector(".bi-chevron-left")
let arrowR = document.querySelector(".bi-chevron-right")
let ColImg = document.querySelector(".cl4-up img")
let ColCName = document.querySelector(".cl4-dn h3")
let ColCPrice = document.querySelector(".cl4-dn button")
let ColCAbout = document.querySelector(".cl4-dn p")

arrowR.addEventListener("click", () => {
    switch (ColCName.innerText) {
        case "McLaren MCL38":
            ColImg.setAttribute("src", "assets/inv/lamborghini.png");
            ColCName.innerText = "Lamborghini Aventador SVJ";
            ColCPrice.innerText = "$550,542";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">T</i>he Lamborghini Aventador SVJ boasts a 6.5-liter V12 with 759 horsepower. Its aerodynamic design ensures exceptional performance. A perfect blend of power and precision ❞</p>`;
            break;
        case "Lamborghini Aventador SVJ":
            ColImg.setAttribute("src", "assets/inv/Must.png");
            ColCName.innerText = "Mustang Shelby GT500";
            ColCPrice.innerText = "$76,820";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">A</i>n icon redefined. The Mustang Shelby GT500 blends classic muscle with modern power and innovation. Experience raw performance with a futuristic edge ❞</p>`;
            break;
        case "Mustang Shelby GT500":
            ColImg.setAttribute("src", "assets/inv/Bentley.png");
            ColCName.innerText = "Bentley EXP Speed 8";
            ColCPrice.innerText = "$300,000";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">B</i>entley EXP Speed 8 is a race-focused luxury car, powered by a 4.0L V8 engine, combining performance, precision, and striking design ❞</p>`;
            break;
        case "Bentley EXP Speed 8":
            ColImg.setAttribute("src", "assets/inv/Dodge.png");
            ColCName.innerText = "Dodge Viper ACR";
            ColCPrice.innerText = "$247,164";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">D</i>odge Viper ACR is a track-focused beast with an 8.4L V10 engine, delivering extreme performance, aerodynamic precision, and raw power ❞</p>`;
            break;
        case "Dodge Viper ACR":
            ColImg.setAttribute("src", "assets/inv/Bugatti.png");
            ColCName.innerText = "Bugatti Divo";
            ColCPrice.innerText = "$5,800,000";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">B</i>ugatti Divo is a hypercar with a quad-turbo W-16 engine, delivering 1,479 horsepower, combining luxury, performance, and aerodynamics ❞</p>`;
            break;
        case "Bugatti Divo":
            ColImg.setAttribute("src", "assets/inv/McLaren.png");
            ColCName.innerText = "McLaren MCL38";
            ColCPrice.innerText = "$1800000";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">T</i>he McLaren MCL38, designed by Rob Marshall, competed in the 2024 Formula One World Championship. Driven by Lando Norris and Oscar Piastri, both secured their first Grand Prix victories with this car ❞</p>`;
            break;
    }
});

arrowL.addEventListener("click", () => {
    switch (ColCName.innerText) {
        case "McLaren MCL38":
            ColImg.setAttribute("src", "assets/inv/lamborghini.png");
            ColCName.innerText = "Lamborghini Aventador SVJ";
            ColCPrice.innerText = "$550,542";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">L</i>amborghini Aventador SVJ boasts a 6.5-liter V12 with 759 horsepower. Its aerodynamic design ensures exceptional performance. A perfect blend of power and precision ❞</p>`;
            break;
        case "Lamborghini Aventador SVJ":
            ColImg.setAttribute("src", "assets/inv/Must.png");
            ColCName.innerText = "Mustang Shelby GT500";
            ColCPrice.innerText = "$76,820";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">A</i>n icon redefined. The Mustang Shelby GT500 blends classic muscle with modern power and innovation. Experience raw performance with a futuristic edge ❞</p>`;
            break;
        case "Mustang Shelby GT500":
            ColImg.setAttribute("src", "assets/inv/Bentley.png");
            ColCName.innerText = "Bentley EXP Speed 8";
            ColCPrice.innerText = "$300,000";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">B</i>entley EXP Speed 8 is a race-focused luxury car, powered by a 4.0L V8 engine, combining performance, precision, and striking design ❞</p>`;
            break;
        case "Bentley EXP Speed 8":
            ColImg.setAttribute("src", "assets/inv/Dodge.png");
            ColCName.innerText = "Dodge Viper ACR";
            ColCPrice.innerText = "$247,164";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">D</i>odge Viper ACR is a track-focused beast with an 8.4L V10 engine, delivering extreme performance, aerodynamic precision, and raw power ❞</p>`;
            break;
        case "Dodge Viper ACR":
            ColImg.setAttribute("src", "assets/inv/Bugatti.png");
            ColCName.innerText = "Bugatti Divo";
            ColCPrice.innerText = "$5,800,000";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">B</i>ugatti Divo is a hypercar with a quad-turbo W-16 engine, delivering 1,479 horsepower, combining luxury, performance, and aerodynamics ❞</p>`;
            break;
        case "Bugatti Divo":
            ColImg.setAttribute("src", "assets/inv/McLaren.png");
            ColCName.innerText = "McLaren MCL38";
            ColCPrice.innerText = "$1800000";
            ColCAbout.innerHTML = `<p>❝ <i style="font-family: Ogg;">T</i>he McLaren MCL38, designed by Rob Marshall, competed in the 2024 Formula One World Championship. Driven by Lando Norris and Oscar Piastri, both secured their first Grand Prix victories with this car ❞</p>`;
            break;
    }
});


/* Loader */
let loader = gsap.timeline()
loader.from(".loader h2", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

loader.to(".loader h2", {
    opacity: 0,
    x: -20,
    duration: 1,
    stagger: 0.1
})

loader.to(".loader", {
    opacity: 0,
    display: "none",
    duration: 1
})




/* Collection Video - Text hover effect */
let e2video = document.querySelector(".e2-v")
let e2text = document.querySelector(".e2-t")
let e2texti = document.querySelector(".e2-t h1 i")

e2text.addEventListener("mouseover", () => {
    e2video.style.opacity = "1"
    e2text.style.top = "52vw"
    e2texti.classList.add("e2-t-h-i");
})



/* Collection expertise hover effect */
let e41buttons = document.querySelectorAll(".e4-1 button");
let e41rtexts = document.querySelectorAll(".e41-r");
let e42buttons = document.querySelectorAll(".e4-2 button");
let e42ltexts = document.querySelectorAll(".e42-l");

e41buttons.forEach((button, index) => {
    button.addEventListener("mouseover", () => {
        e41rtexts[index].style.opacity = "1";
    });

    button.addEventListener("mouseleave", () => {
        e41rtexts[index].style.opacity = "0";
    });
});

e42buttons.forEach((button, index) => {
    button.addEventListener("mouseover", () => {
        e42ltexts[index].style.opacity = "1";
    });

    button.addEventListener("mouseleave", () => {
        e42ltexts[index].style.opacity = "0";
    });
});

/* This silly version of js ends here - am a NOOB ik */
/* The whole CODE & UI is designed by SHIVA aka @curioushiva */
