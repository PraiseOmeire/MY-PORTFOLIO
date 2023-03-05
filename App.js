

/////////////////////////////////////////
//make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



    // ///close mobile navigation
    // if (link.classList.contains("nav-link"))
    //   headerEl.classList.toggle("nav-open");



////scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     //scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

   // scroll to other links
    // if (href === "#" || href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   console.log(sectionEl);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // if(href ==="https://forkify-app-praise.netlify.app/"){
    //   window.location.assign("https://forkify-app-praise.netlify.app/");
    // }


    // if(href ==="https://mapty-app-po.netlify.app/"){
    //   window.location.assign("https://mapty-app-po.netlify.app/");
    // }

    // if(href ==="https://omnifoods-praise.netlify.app/"){
    //   window.location.assign("https://omnifoods-praise.netlify.app/");
    // }

    // if(href ==="https://my-expense-tracking-app.netlify.app/"){
    //   window.location.assign("https://my-expense-tracking-app.netlify.app/");
    // }

    // if(href ==="https://dev-healthy-switcher.netlify.app/"){
    //   window.location.assign("https://dev-healthy-switcher.netlify.app/");
    // }






/////////////////////////////////////////
//sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
