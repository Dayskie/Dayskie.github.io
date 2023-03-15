let request = new XMLHttpRequest();
let rndVerseNumQ = Math.floor(Math.random() * (6236 - 1) + 1);

request.open("GET", 'https://api.alquran.cloud/v1/ayah/' + rndVerseNumQ + '/en.asad');
request.send();
request.onload = () =>{
    let jObj = JSON.parse(request.response);
    document.getElementById("verseQ").innerHTML = `< ` + jObj.data.text  + ` >`;
    document.getElementById("verseQInfo").innerHTML = "Surah Number " + jObj.data.surah.number + ", " + jObj.data.surah.name + " (" + jObj.data.surah.englishNameTranslation + ")";
}

let requestBible = new XMLHttpRequest();
function BibleSearch(){
    let names = [
        "John",
        "Roman",
        "Mark",
        "Luke",
        "Matt"
    ]
    let randomChapNumB = Math.floor(Math.random() * (21 - 1) + 1); 
    let randomVerseB = Math.floor(Math.random() * (42 - 1) + 1);
    let result = Math.floor(Math.random() * names.length)


    fetch("https://bible-api.com/" + names[result] + " " + randomChapNumB + ":" + randomVerseB)
        .then((bibleResponse) => {
           if(!bibleResponse.ok) {
            throw new Error("unable to get bible verse!")
            //aka do the fetch again somehow
           }
           return bibleResponse.json()
        }) 
        .then((data) => document.getElementById("verseB").innerHTML = `< ` + data.verses[0].text  + ` >`)
    document.getElementById("verseBInfo").innerHTML = names[result] + " " + randomChapNumB + ":" + randomVerseB


    // requestBible.open("GET", "https://bible-api.com/" + names[result] + " " + randomChapNumB + ":" + randomVerseB);
    // requestBible.send();
    // console.log(requestBible.response)
    // requestBible.onload = () =>{
    //     if(requestBible.status == 404) {BibleSearch()}
    //     console.log("Bible API status: " + requestBible.status)
    //     let jObj = JSON.parse(requestBible.response);
    //     document.getElementById("verseB").innerHTML = `< ` + jObj.verses[0].text  + ` >`;
    //     document.getElementById("verseBInfo").innerHTML = names[result] + " " + randomChapNumB + ":" + randomVerseB;
    // }
}
BibleSearch()

let keywords = [
    'waifu',
    'neko',
    'shinobu',
    'megumin',
    'cuddle',
    'hug',
    'awoo',
    'kiss',
    'lick',
    'pat',
    'smug',
    'bonk',
    'yeet',
    'blush',
    'smile',
    'wave',
    'highfive',
    'handhold',
    'nom',
    'bite',
    'glomp',
    'slap'
]
let resultAnime = Math.floor(Math.random() * keywords.length)
let anime = new XMLHttpRequest();
anime.open("GET", "https://api.waifu.pics/sfw/" + keywords[resultAnime]);
anime.send();
anime.onload = () =>{
    let jObj = JSON.parse(anime.response);
    document.getElementById("img").src = jObj.url
}