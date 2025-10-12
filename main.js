// Navbar toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const closeNav = document.getElementById('closeNav');

closeNav.addEventListener('click', () => {
    nav.classList.remove('show');
});

navToggle.addEventListener('click', () => { nav.classList.toggle('show'); });

// Parallax
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let mountains7 = document.getElementById('mountains7');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Rashwan = document.querySelector('.Rashwan');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    mountains7.style.top = value * 1.1 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    Rashwan.style.fontSize = value + 'px';
    if (scrollY >= 84) {
        Rashwan.style.fontSize = 84 + 'px';
        Rashwan.style.position = 'fixed';
        if (scrollY >= 260) Rashwan.style.display = 'none';
        else Rashwan.style.display = 'block';
    }
    if (scrollY >= 97) document.querySelector('.home').style.background = 'linear-gradient(#376281,#10001f)';
    else document.querySelector('.home').style.background = 'linear-gradient(#200016,#10001f)';
}


const closeBtn = document.getElementById('closeBtn');
const avatar = document.getElementById('avatar');
const info = document.getElementById('info');

avatar.addEventListener('click', () => {
    info.classList.toggle('show');
});

// إغلاق عند الضغط على ×
closeBtn.addEventListener('click', () => {
    info.classList.remove('show');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // يعطي فرصة للـ scroll قبل الوصول للقمة
        const sectionId = section.getAttribute('id');

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === '#' + sectionId){
                    link.classList.add('active');
                }
            });
        }
    });
});



