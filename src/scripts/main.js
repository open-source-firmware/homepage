gsap.registerPlugin(ScrollTrigger);

// Add js class when js is available
// document.body.classList.add("js-active");

ScrollTrigger.saveStyles(".logo, .triangle");
ScrollTrigger.matchMedia({
  // Media-Query md - lg
  "(min-width: 832px) and (max-width: 1039px)": function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: 320,
        scrub: true,
      },
    });

    tl.fromTo(
      ".logo",
      {
        height: "20rem",
      },
      {
        height: "7.625rem",
      }
    ).fromTo(
      ".triangle",
      {
        borderTopWidth: "120vw",
        borderRightWidth: "120vw",
      },
      {
        borderTopWidth: "70vw",
        borderRightWidth: "70vw",
      },
      "<"
    );
  },

  // Media-Query lg - xl
  "(min-width: 1040px) and (max-width: 1919px)": function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: 420,
        scrub: true,
      },
    });

    tl.fromTo(
      ".logo",
      {
        height: "26rem",
      },
      {
        height: "7.625rem",
      }
    ).fromTo(
      ".triangle",
      {
        borderTopWidth: "120vw",
        borderRightWidth: "120vw",
      },
      {
        borderTopWidth: "50vw",
        borderRightWidth: "50vw",
      },
      "<"
    );
  },

  // Media-Query > xl
  "(min-width: 1920px)": function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: 420,
        scrub: true,
      },
    });

    tl.fromTo(
      ".logo",
      {
        x: "10rem",
        height: "26rem",
      },
      {
        x: 0,
        height: "12.625rem",
      }
    ).fromTo(
      ".triangle",
      {
        borderTopWidth: "110vw",
        borderRightWidth: "110vw",
      },
      {
        borderTopWidth: "50vw",
        borderRightWidth: "50vw",
      },
      "<"
    );
  },
});
