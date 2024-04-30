function breakTheText(){
    var h1 =document.querySelector("h1");
    var h1Text =h1.textContent

    var splittedText = h1Text.split("")
    var clutter="";
    splittedText.forEach((ele)=>{
        clutter +=`<span>${ele}</span>`
    })

    h1.innerHTML =clutter;
}

breakTheText();

gsap.from("h1 span",{
    y:50,
    duration:0.8,
    opacity:0,
    delay:0.5,
    // stagger:0.9
    stagger:-0.5
})