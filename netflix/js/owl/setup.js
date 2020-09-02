$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

document.getElementById("botao1").onclick = function () {
    location.href = "https://www.youtube.com/watch?v=GNyL79as_7U"
}
document.getElementById("botao2").onclick = function () {
    location.href = "https://www.aficionados.com.br/rick-and-morty/#:~:text=Criada%20por%20Justin%20Roiland%20e,gal%C3%A1xia%2C%20e%20seu%20neto%20Morty.&text=Por%20outro%20lado%2C%20Morty%20est%C3%A1,ser%20um%20pouquinho%20mais%20gentil."
}


