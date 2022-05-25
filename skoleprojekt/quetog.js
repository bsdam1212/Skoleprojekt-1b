let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[
    'Aspire to inspire before we expire',
    'Die with memories, not dreams',
    'Never regret anything that made you smile',
    'Every moment is a fresh beginning',
    'Change the world by being yourself',
];

btn.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
    document.getElementById('btn').style.display = 'none'; //Gemmer forrige tekst
})