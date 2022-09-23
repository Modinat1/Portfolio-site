const burger = document.getElementById('burger');
const navList = document.querySelector('.navlist');

// hamburger toggler event
burger.addEventListener('click', () =>{
    navList.classList.toggle('show');
})

// Smooth Scrolling
$('#navbar a').on('click', function (event){
    if(this.hash !=- ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
           {
            scrollTop: $(hash).offset().top - 20
           },
           800
        );
    }
});