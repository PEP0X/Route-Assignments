// DOM
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .auth-name"),
quoteBtn = document.querySelector(".btn"),
copyBtn = document.querySelector(".copy");

function randomQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    })
}

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);