// Arrays, Objects

let musicas = [
    { titulo: 'Malandramente', artista: 'Malandro', src:'musics/Look Both Ways - Nathan Moore.mp3', img:'images/piano.jpg' },
    { titulo: 'Rebolation', artista: 'Reboladores', src:'musics/Read All Over - Nathan Moore.mp3', img:'images/rock.jpg' },
    { titulo: 'Cantarolando', artista: 'Cantores', src:'musics/The Moon Drops - Nathan Moore.mp3', img:'images/samba.jpg' }
];

// Lets

let indexMusica = 0;
let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


renderizarMusica(indexMusica);

// Events

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica <0) {
        indexMusica = 2;
    };
    renderizarMusica(indexMusica);
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica >2) {
        indexMusica = 0;
    };
    renderizarMusica(indexMusica);
})

// Functions

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.textContent = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
    interval = setInterval(()=>{

        bars.forEach(bar =>{
                  let size = Math.random();
                  let hue = Math.floor(Math.random()*360);
                  bar.style.transform = `scaleY(${size})`;
                  bar.style.background = `hsl(${hue}, 90%, 60%)`;
                });
    
            }, 150);   
}


function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
    
    if(interval){
        clearInterval(interval);
        interval = null;
        bars.forEach(bar =>{
                  bar.style.background = `white`;
                });   
    return interval
}}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/musica.duration)*100)+'%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    };

    return campoMinutos+':'+campoSegundos;
}

// soundbar

const bars = document.querySelectorAll(".audiobar");
const audioContainer = document.querySelector(".audio--container");
let interval = null;

bars.forEach(bar =>{
    let size = Math.random();
    bar.style.transform = `scaleY(${size})`;
  })

  // volume

document.querySelector('.sound').addEventListener('click', tocarSom);
document.querySelector('.mute').addEventListener('click', pararSom);
document.querySelector('.menos').addEventListener('click', maisSom);
document.querySelector('.mais').addEventListener('click', menosSom);

function tocarSom(){
    musica.volume = 1.0;
    document.querySelector('img .mute').style.display = 'none';
    document.querySelector('img .sound').style.display = 'block'; 
}

function pararSom(){
    if (musica.volume !== 0.0) {musica.setVolume = 0.0};
    document.querySelector('img .mute').style.display = 'block';
    document.querySelector('img .sound').style.display = 'none'; 
}

function maisSom(){ 

}

function menosSom(){
    
}