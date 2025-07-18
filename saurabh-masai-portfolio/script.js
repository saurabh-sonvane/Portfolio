//togg;e icon nvbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
 menuIcon.classList.toggle('fa-times')   
 navbar.classList.toggle('active')  
 
}

{/* <i class='bx bx-x' ></i> */}
// Scroll seaction Active icons
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle from and nabvbar when click navbar link (scrooll)
    menuIcon.classList.remove('bx')   
    navbar.classList.remove('active')  

}

// Scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200
})
ScrollReveal().reveal('.home-content, .heading',  {origin:'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',  {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img',  {origin:'left'})
ScrollReveal().reveal('.home-content p, .about-content .slider-thumb .coding1' ,  {origin:'right'})


// Typing animation
const typed = new Typed('.multiple-text', {
    strings : ['MERN Stack Web Developer', 'Traveller', 'Foddie'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var qty = 1200;

var el = document.querySelector(".odometer");

od = new Odometer({
  el: el,
  format: "(,ddd)",
  theme: "default"
});
od.update(1)
setTimeout(function () {
  odometer.innerHTML = qty++;
}, 1000);



$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


  document
    .getElementById("downloadBtn")
    .addEventListener("click", function (event) {
     
        window.location.href =
          "https://drive.google.com/file/d/1JLaSZ8LcclnsM16ZJFrhAa-F2UHvlMlk/view?usp=sharing "; 
    });