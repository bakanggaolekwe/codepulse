// menu ul
gsap.from(".my-links",{duration:1, y:"-110%",ease:"bounce.inOut"});

//menu li
gsap.from(".link",{duration:1, opacity:0,delay:1, stagger:0.5});


// services icon
gsap.from("#icon",{duration:6, rotation:360,repeat:3});

//blue logo
gsap.from("#blue",{duration:3,opacity:0, scale:0.3, ease:"bounce.inOut",repeat:5,delay:1});
// white logo
gsap.from("#logo",{duration:3,opacity:0, scale:0.3, ease:"bounce",rotation:360, delay:1,repeat:6});

// footer animation

gsap.from(".footer-item",{duration:1, opacity:0,delay:5, stagger:0.5});

// social media and contacts link
gsap.from("#social-link",{duration:1, opacity:0,delay:6, stagger:0.5,repeat:3});

// section headers
gsap.from("#heading-item",{duration:1, opacity:0,delay:4, stagger:0.5,repeat:6});
