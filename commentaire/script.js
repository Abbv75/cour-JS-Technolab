const commentaire = [
    {
        id:1,
        name:"Ariana Grande",
        job: "Chanteuse US",
        img: "arianaGrande.webp",
        text: "Ariana Grande-Butera connue sous le nom Ariana Grande, née le 26 juin 1993 à Boca Raton, en Floride, est une actrice, auteure-compositrice-interprète et productrice américaine."
    },
    {
        id:2,
        name:"Chris Brown",
        job: "Chanteur US",
        img: "chrisBrown.webp",
        text: "Chris Brown, de son nom complet Christopher Maurice Brown, est un chanteur, danseur-chorégraphe, acteur et réalisateur américain né le 5 mai 1989 à Tappahannock en Virginie."
    },
    {
        id:3,
        name:"Damso",
        job: "Chanteur Bl",
        img: "Damso.jpg",
        text: "William Kalubi Mwamba, né le 10 mai 1992 à Kinshasa, est un rappeur belgo-congolais. Damso débute avec sa première mixtape Salle d'attente, sortie en 2014."
    },
    {
        id:4,
        name:"Drake",
        job: "Chanteur US",
        img: "Drake.webp",
        text: "Drake, de son vrai nom Aubrey Drake Graham, né le 24 octobre 1986 à Toronto, en Ontario, est un rappeur-compositeur et acteur canadien."
    },
    {
        id:5,
        name:"Koba LaD",
        job: "Chanteur FR",
        img: "kobaLaD.jpg",
        text: "Koba LaD, de son vrai nom Marcel Junior Loutarila, est un rappeur français né le 3 avril 2000 à Saint-Denis en Seine-Saint-Denis."
    },
    {
        id:6,
        name:"MBappe",
        job: "Footballeur",
        img: "mbappe.jpg",
        text: "Kylian Mbappé, né le 20 décembre 1998 à Paris, est un footballeur international français qui évolue au poste d'attaquant au Paris Saint-Germain, en Ligue 1."
    },
    {
        id:7,
        name:"Ninho",
        job: "Chanteur Fr",
        img: "ninho.jpg",
        text: "Ninho , pseudonyme de William Nzobazola, est un rappeur, chanteur et auteur-compositeur français, né le 2 avril 1996 à Longjumeau."
    }
];

let currentIndex=0;

$('.before_btn').click( function(){ 
    if(currentIndex==0){
        currentIndex=commentaire.length - 1;
    }
    else{
        currentIndex--;
    }
    fillFromIndex();
    console.log(commentaire[currentIndex]);
});

$('.after_btn').click( function(){ 
    if(currentIndex==commentaire.length - 1){
        currentIndex=0;
    }
    else{
        currentIndex++;
    }
    fillFromIndex();
    console.log(commentaire[currentIndex]);
});

$('.random').click( function(){ 
    currentIndex= Math.floor(Math.random() * commentaire.length)
    fillFromIndex();
    console.log(commentaire[currentIndex]);
});



function fillFromIndex(){
    $('.profil_img').attr("src", "../src/image/"+commentaire[currentIndex].img);
    $('.nom').text(commentaire[currentIndex].name);
    $('.text').text(commentaire[currentIndex].text);
    $('.role span').text(commentaire[currentIndex].job);
}

fillFromIndex();