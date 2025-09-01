let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let mountains7 = document.getElementById('mountains7');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Rashwan = document.querySelector('.Rashwan');



window.onscroll = function(){
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
    if(scrollY >= 84){
        Rashwan.style.fontSize = 84 + 'px';
        Rashwan.style.position = 'fixed';
        if (scrollY >= 260) {
            Rashwan.style.display = 'none'; 
        }else{
            Rashwan.style.display = 'block  ';
        }
    }
        if (scrollY >= 97) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }

}
window.onload = function(){
    window.onscroll();
}
