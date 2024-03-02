// function gradient_out(e) {
//     let line 
//     if (e.target.closest('.a1')) {
//         line = document.querySelector('.line1')
//     }
//     if (e.target.closest('.a2')) {
//         line = document.querySelector('.line2')
//     }
//     if (e.target.closest('.a3')) {
//         line = document.querySelector('.line3')
//     }
//     if (line) {
//         line.style.opacity = "0"
//     }
// }

// function gradient_over(e) {
//     let line 
//     if (e.target.closest('.a1')) {
//         line = document.querySelector('.line1')
//     }
//     if (e.target.closest('.a2')) {
//         line = document.querySelector('.line2')
//     }
//     if (e.target.closest('.a3')) {
//         line = document.querySelector('.line3')
//     }
//     if (line) {
//         line.style.opacity = "1"
//     }
// }


$(document).ready(function(){
  $(".container").bxSlider({
      pager: false,
  });
})

// let input = document.querySelector('input');

// input.addEventListener('change', function() {
//   if (this.checked) {
//     anime({
//       targets: ".burger",
//       translateX: 250, // пример анимации - смещение по оси X
//       duration: 1000,
//       easing: 'easeInOutQuad'
//     })
//   }
// })



let div = document.querySelectorAll('.line_container')
div.forEach(element => {
  element.addEventListener("mouseout", gradient_out)
  element.addEventListener("mouseover", gradient_over)
});