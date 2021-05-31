// forside billede slider til de forskellige programmer
const slides=document.querySelector(".slider-forside111").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0

prev.addEventListener("click",function(){
prevSlideforside2222()
updateCircleIndicator()

})

next.addEventListener("click",function(){
nextSlideforside2222()
updateCircleIndicator()


})

// Her laver vi cirkel indicatorer 
function circleIndicator(){
 for(let i=0; i< slides.length; i++){
     const div=document.createElement("div");
     div.innerHTML=i+1;
     div.setAttribute("onclick","indicateSlideforside2222(this)")

     if(i==0) {
        div.className="active";
     }

     indicator.appendChild(div);  
 }

}

circleIndicator();

function updateCircleIndicator() {
    for(let i=0; i<indicator.children.length; i++){
        // fjerner active classes fra alle indicatorer cirkler
        indicator.children[i].classList.remove("active");
    }

    indicator.children[index].classList.add("active");
}

//her for vi functionen til at trykke tilbage i slidsene
function prevSlideforside2222(){
if(index==0) {
    index=slides.length-1;
}
else {
    index--;
}

//denne kalder på funktionen
changeSlideforside2222();

}


//her for vi functionen til at trykke videre i slidsene

function nextSlideforside2222(){
if(index==slides.length-1) {
    index=0;
}
else {
    index++;
}

changeSlideforside2222();
}

// Denne function fjerne alle active classes i alle slides
function changeSlideforside2222(){
    for(let i=0; i<slides.length; i++) {
        slides[i].classList.remove("active");
    }
slides[index].classList.add("active");

}
