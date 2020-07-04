const $burgur = document.querySelector(".burgur");
const $navlink = document.querySelector(".nav-links");
const $navlinksanim = document.querySelectorAll(".nav-links li");

$burgur.onclick = () => {
    $navlink.classList.toggle("navlinks-clicked");
    $burgur.classList.toggle("burgur-clicked");
    $navlinksanim.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 5 + 0.5}s`
        }
    });
};