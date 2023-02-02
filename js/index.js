let topbar =  document.querySelector('.topbar-icon');
let topimg = document.querySelector('.topbar-icon img')
let botbar =  document.querySelector('.botbar-icon');
let smial_ul  = document.querySelector('.smial_ul')
topbar.addEventListener('click',()=>{
 
    botbar.classList.toggle('show');
    smial_ul.classList.toggle('show')
    topimg.classList.toggle('hidden')
})
 let swipers =  document.querySelector('.swiper-container ')
 let header =  document.querySelector('.header')

// window.onload = function(){
//     let h = swipers.offsetHeight
//     header.style.height = h + 'px'
//     console.log(header.style.Height)
// }
// window.onload = function(){
//  let h = swipers.offsetHeight;

//  data.style.paddingTop = h - 99 + 'px' 
 

// }
let navbar = document.querySelectorAll('.nav_bar .nav_ul li a')
document.addEventListener('scroll',function(){
    let scrollTop = (document.scrollingElement.scrollTop)
 console.log(scrollTop)
    if(scrollTop > 700){
        console.log('123',navbar)
        for(let i =0;i<navbar.length;i++){
            navbar[i].style.color = '#ccc'
        }
           
    }else{
        for(let i =0;i<navbar.length;i++){
            navbar[i].style.color = 'white'
        }
      
    }
   
})