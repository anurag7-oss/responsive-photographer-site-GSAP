const tl=gsap.timeline();
tl.from('#nav h3',{
    y:-50,
    opacity:0,
    duration:0.7,
    stagger:0.4   
})
tl.add("startContent");
tl.from("#content h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.5
})

tl.from("#footer h3",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.4
},'startContent')
tl.from("img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:0.3,
    stagger:0.5
})

