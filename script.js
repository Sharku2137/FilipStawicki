let i=0;
let j=0;
function shuffleSlides(){
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    slides[i].style.display="none";
    slides[j].style.display="block";
    dots[i].style.backgroundColor="#bbb";
    dots[j].style.backgroundColor="#717171";
    i=j;
    j++;
    if(j==7){
        j=0;
    }
    setTimeout(shuffleSlides, 2000);
}
shuffleSlides();