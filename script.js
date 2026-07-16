// Floating Hearts

const heartContainer = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100+"vw";

heart.style.fontSize = (20 + Math.random()*30)+"px";

heart.style.animationDuration = (4 + Math.random()*6)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,300);


// Surprise Button

const btn = document.getElementById("surpriseBtn");

btn.addEventListener("click",()=>{

alert("❤️ Happy Birthday Mero Mutuko Tukra ❤️\n\nThis is only the beginning of your surprise...");

});
const images = document.querySelectorAll(".photos img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

images.forEach(img => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
});
});

closeLightbox.addEventListener("click", () => {
lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
if (e.target === lightbox) {
lightbox.style.display = "none";
}
});
const stars = document.getElementById("stars");

for(let i=0;i<150;i++){

const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random()*100+"vw";
star.style.top = Math.random()*100+"vh";

star.style.animationDelay = Math.random()*2+"s";

stars.appendChild(star);

}
const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("click", () => {

document.body.style.transition = "1s";
document.body.style.background =
"linear-gradient(135deg,#ff4fa3,#ff80bf,#ffd6ec)";

alert("🎉 Happy Birthday Mero Mutuko Tukra ❤️\n\nI hope today brings you as much happiness as you've brought into my life.\n\nI Love You ❤️");

});
const petals = document.getElementById("petals");

function createPetal(){

const petal = document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌸";

petal.style.left = Math.random()*100+"vw";
petal.style.animationDuration = (6 + Math.random()*6)+"s";
petal.style.fontSize = (18 + Math.random()*20)+"px";

petals.appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

setInterval(createPetal,400);











