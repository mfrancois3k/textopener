 
//  gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main", // This should be the element that triggers the animation when it comes into view
        markers: true, // Displays markers in the browser for debugging
        start: "50% 50%", // Animation starts when the trigger hits the middle of the viewport
        end: "100% 50%", // Animation ends when the bottom of the trigger hits the middle of the viewport
        scrub: 2, // Smoothens the animation, scrubbing at half the scroll speed
        pin: true, // Pins the trigger element while the timeline is active
      }
    })
tl.to("#top", {top: "-50%"},'a')
.to("#bottom", { bottom: "-50%"},'a')  
.to("#top-h", {top: "80%"},'a')
.to("#bottom-h", { bottom: "-70%"},'a')  
.to(".content", {marginTop: "0%"},'a')



  