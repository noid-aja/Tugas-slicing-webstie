const btnbg = document.getElementById("btnbg");
const bgList =[
    "assets/bg1.jpeg",
    "assets/bg2.jpg",
    "assets/bg3.jpg",
    "assets/bg4.jpg",
    "assets/bg5.png",
    "assets/bg6.jpg",
]

let bgskrg = 0;

btnbg.addEventListener("click", () => {
    bgskrg = (bgskrg + 1) % bgList.length;
    document.documentElement.style.setProperty("--bg-image", `url(${bgList[bgskrg]})`);
})

const navbar = document.getElementById("navbar");
const slides = document.querySelectorAll("#Home, #projek");

window.addEventListener("scroll", () => {
    let slideNow = 0;

    slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            slideNow = index;
        }
    });

    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach((link, index) => {
        if (index === slideNow) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", () => {
    window.location.href = "mailto:dionkaban74@gmail.com?subject=P";
});


