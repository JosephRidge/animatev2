// gsap.to('.text',{y:50, duration:2})
// gsap.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1 });
// gsap.fromTo(".text", { y: 50 }, { y: 0 });

const tl = gsap.timeline({
  default: {
    duration: 0.75,
    ease: "power1.out"
  },
});


tl.fromTo('.cookie-container',{scale:0},{scale:1,ease: "elastic.out(1, 0.4)",duration:1.5})
tl.fromTo('.cookie',{opacity:0, x:-50, rotation:'-45deg'},{opacity:1, x:0, rotation:'0deg'},'<50%')
tl.fromTo('.text',{x:30,opacity:0},{x:0,opacity:1},'<')

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    gsap.to('.cookie-container',{opacity:0,y:100, duration:0.75, ease:'power1.out'})
})

//
tl.fromTo('.cookie', {y:0, rotation:'0deg'},{y:-20, yoyo:true, repeat:-1, rotation:'-20deg'})
tl.fromTo('.cookie_crumble', {y:0, rotation:'0deg'},{y:-20, yoyo:true, repeat:-1, rotation:'-20deg'})