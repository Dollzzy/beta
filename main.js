var md1,btnmd1,btnclosemd1,btncloselur,md1blur,btnopenblur,inpBlur;
md1 = document.querySelector(".menu-open-div-1")
btnmd1 = document.querySelector(".menu-div-1")
btnclosemd1 = document.querySelector('.close-menu-div-1')
btncloselur = document.querySelector(".close-menu-div-11")
md1blur = document.querySelector(".menu-open-div-1-blur")
btnopenblur = document.querySelector(".Bg-btn-blur")
inpBlur = document.getElementById("inpBlur")


btnmd1.addEventListener("click", ()=> {
    md1.style.display = 'block'
})
btnclosemd1.addEventListener("click", ()=> {
    md1.style.display = 'none'
})
btnopenblur.addEventListener("click", ()=> {
    md1blur.style.display = 'block'
})
btncloselur.addEventListener("click", ()=> {
    md1blur.style.display = 'none'
})

var div1 = document.querySelector(".div-1")
var btn = document.getElementById("save-btn-blur")

