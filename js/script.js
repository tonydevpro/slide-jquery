let slideIndex = 0;
let slideAlterar = 100;
const totalSlides = 10; // Número total de slides

$('.prev').click(function(){
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Volta para o último slide
        }
    
    $('.slides').css('transform', `translateX(${slideIndex * -slideAlterar}%)`)
    
    
    
})

$('.next').click(function(){
    slideIndex++; // Incrementa o índice para mover à esquerda
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Volta para o primeiro slide
    }
    
    $('.slides').css('transform', `translateX(${slideIndex * -slideAlterar}%)`)
    

})