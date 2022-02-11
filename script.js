let quotes = [
    "Do not lose hope, nor be sad.",
    "The bravest heart is the one that stays close to Allah, even, when its in pain",
    "When you forget that you need Allah, he puts you in a situation that causes you to call upon him, and thats for your own good",
    "Never underestimate the power of dua",
    "Worldly Life is short, so turn to Allah before you return to Allah",
    "Forgive others as quickly as you expect Allah to forgive you",
    "To Allah is your return all of you and he will inform you of what you used to do",
    "Whoever feras Allah, Allah will find a way out for him and he will provide for him from sources that he could never have imagined",
    "The life of this world is merely enjoyment of delusion",
    "A busy life makes prayer harder but prayer makes a busy life easier.",
    "And whoever turns away from My remembrance",
    "If you give thanks, I will give you more",
    "Allah tests us with what we love",
    "For indeed, with hardship ease.",
    "No one can bring you true happiness except Allah.",
    "And whoever puts all his trust in Allah, then he will suffice him",
    "The more you let go, the higher you rise.",
    "The richest of the rich is the one who is not a prisoner to greed."
]
console.log(quotes.length)
const quoteContainer = document.querySelector("#quote");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    // console.log("hello")
    let number = getNumber();
    quoteContainer.innerText = quotes[number];

})
function getNumber() {
    return Math.floor(Math.random() * quotes.length);
}