// Função para escolher um número aleatório entre 0 e o tamanho de um array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Função para randomizar os campeões
function randomizarCampeoes() {
    // Selecionar as imagens dos campeões para cada lane
    var toplaners = [
        "top/1.jpg",
        "top/2.jpg",
        "top/3.jpg",
        "top/4.jpg", 
        "top/5.jpg",
        "top/6.jpg",
        "top/7.jpg",
        "top/8.jpg",
        "top/9.jpg", 
        "top/10.jpg", 
        "top/11.jpg", 
        "top/12.jpg", 
        "top/13.jpg", 
        "top/14.jpg", 
        "top/15.jpg", 
        "top/16.jpg", 
        "top/17.jpg", 
        "top/18.jpg", 
        "top/19.jpg", 
        "top/20.jpg", 
        "top/21.jpg",
        "top/22.jpg",
        "top/23.jpg", 
        "top/24.jpg", 
        "top/25.jpg", 
        "top/26.jpg", 
        "top/27.jpg", 
        "top/28.jpg", 
        "top/29.jpg", 
        "top/30.jpg", 
        "top/31.jpg", 
        "top/32.jpg", 
        "top/33.jpg", 
        "top/34.jpg", 
        "top/35.jpg", 
        "top/36.jpg", 
        "top/37.jpg", 
        "top/38.jpg", 
        "top/39.jpg", 
        "top/40.jpg", 
        "top/41.jpg", 
        "top/42.jpg", 
        // Adicione os caminhos das outras imagens de toplaners aqui
    ];

    var midlaners = [
        "mid/85.jpg", 
        "mid/86.jpg", 
        "mid/87.jpg",
        "mid/88.jpg",
        "mid/89.jpg",
        "mid/90.jpg", 
        "mid/91.jpg", 
        "mid/92.jpg", 
        "mid/93.jpg", 
        "mid/94.jpg", 
        "mid/95.jpg", 
        "mid/96.jpg", 
        "mid/97.jpg", 
        "mid/98.jpg", 
        "mid/99.jpg", 
        "mid/100.jpg", 
        "mid/101.jpg", 
        "mid/102.jpg", 
        "mid/103.jpg", 
        "mid/104.jpg", 
        "mid/105.jpg", 
        "mid/106.jpg", 
        "mid/107.jpg", 
        "mid/108.jpg", 
        "mid/109.jpg", 
        "mid/110.jpg", 
        "mid/111.jpg", 
        "mid/112.jpg", 
        "mid/113.jpg", 
        "mid/114.jpg", 
        "mid/115.jpg", 
        "mid/116.jpg", 
        "mid/117.jpg", 
        "mid/118.jpg",
        "mid/119.jpg", 
        "mid/120.jpg", 
        "mid/121.jpg", 
        "mid/122.jpg", 
        "mid/123.jpg", 
        "mid/124.jpg", 
        "mid/125.jpg",
        "mid/126.jpg",
        // Adicione os caminhos das outras imagens de midlaners aqui
    ];

    var junglers = [
        "jg/43.jpg",
        "jg/44.jpg",
        "jg/45.jpg",
        "jg/46.jpg",
        "jg/47.jpg",
        "jg/48.jpg",
        "jg/49.jpg",
        "jg/50.webp",
        "jg/51.jpg",
        "jg/52.jpg",
        "jg/53.jpg",
        "jg/54.jpg",
        "jg/55.jpg",
        "jg/56.jpg",
        "jg/57.jpg",
        "jg/58.jpg",
        "jg/59.jpg",
        "jg/60.jpg",
        "jg/61.jpg",
        "jg/62.jpg",
        "jg/63.jpg",
        "jg/64.jpg",
        "jg/65.jpg",
        "jg/66.jpg",
        "jg/67.jpg",
        "jg/68.jpg",
        "jg/69.jpg",
        "jg/70.jpg",
        "jg/71.jpg",
        "jg/72.jpg",
        "jg/73.jpg",
        "jg/74.jpg",
        "jg/75.jpg",
        "jg/76.jpg",
        "jg/77.jpg",
        "jg/78.jpg",
        "jg/79.jpg",
        "jg/80.jpg",
        "jg/81.jpg",
        "jg/82.jpg",
        "jg/83.jpg",
        // Adicione os caminhos das outras imagens de junglers aqui
    ];

    var adcarrys = [
        "adc/160.jpg",
        "adc/161.jpg",
        "adc/162.jpg",
        "adc/163.jpg",
        "adc/164.jpg",
        "adc/165.jpg",
        "adc/166.jpg",
        "adc/167.jpg",
        "adc/168.jpg",
        "adc/169.jpg",
        "adc/170.jpg",
        "adc/171.jpg",
        "adc/172.jpg",
        "adc/173.jpg",
        "adc/174.jpg",
        "adc/175.jpg",
        "adc/176.jpg",
        "adc/177.jpg",
        "adc/178.jpg",
        "adc/179.jpg",
        "adc/180.jpg",
        // Adicione os caminhos das outras imagens de adcarrys aqui
    ];

    var supports = [
        "sup/127.jpg",
        "sup/128.jpg",
        "sup/129.jpg",
        "sup/130.jpg",
        "sup/131.jpg",
        "sup/132.jpg",
        "sup/133.jpg",
        "sup/134.jpg",
        "sup/135.jpg",
        "sup/136.jpg",
        "sup/137.jpg",
        "sup/138.jpg",
        "sup/139.jpg",
        "sup/140.jpg",
        "sup/141.jpg",
        "sup/142.jpg",
        "sup/143.jpg",
        "sup/144.jpg",
        "sup/145.jpg",
        "sup/146.jpg",
        "sup/147.jpg",
        "sup/148.jpg",
        "sup/149.jpg",
        "sup/150.jpg",
        "sup/151.jpg",
        "sup/152.jpg",
        "sup/153.jpg",
        "sup/154.jpg",
        "sup/155.jpg",
        "sup/156.jpg",
        "sup/157.jpg",
        "sup/158.jpg",
        "sup/159.jpg",
        // Adicione os caminhos das outras imagens de supports aqui
    ];

    // Selecionar imagens aleatórias para cada lane
    var randomTopChamp = toplaners[getRandomIndex(toplaners)];
    var randomMidChamp = midlaners[getRandomIndex(midlaners)];
    var randomJungleChamp = junglers[getRandomIndex(junglers)];
    var randomAdcChamp = adcarrys[getRandomIndex(adcarrys)];
    var randomSupportChamp = supports[getRandomIndex(supports)];

    // Obter os elementos de imagem correspondentes a cada lane
    var toplanerImg = document.querySelector("#toplaners .imagemR");
    var midlanerImg = document.querySelector("#midlaners .imagemR");
    var junglerImg = document.querySelector("#junglers .imagemR");
    var adcarryImg = document.querySelector("#adcarrys .imagemR");
    var supportImg = document.querySelector("#suports .imagemR");

    // Definir os caminhos das imagens aleatórias para cada lane
    toplanerImg.style.backgroundImage = `url(${randomTopChamp})`;
    midlanerImg.style.backgroundImage = `url(${randomMidChamp})`;
    junglerImg.style.backgroundImage = `url(${randomJungleChamp})`;
    adcarryImg.style.backgroundImage = `url(${randomAdcChamp})`;
    supportImg.style.backgroundImage = `url(${randomSupportChamp})`;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomizartop() {
    var toplaners = [
        "top/1.jpg",
        "top/2.jpg",
        "top/3.jpg",
        "top/4.jpg", 
        "top/5.jpg",
        "top/6.jpg",
        "top/7.jpg",
        "top/8.jpg",
        "top/9.jpg", 
        "top/10.jpg", 
        "top/11.jpg", 
        "top/12.jpg", 
        "top/13.jpg", 
        "top/14.jpg", 
        "top/15.jpg", 
        "top/16.jpg", 
        "top/17.jpg", 
        "top/18.jpg", 
        "top/19.jpg", 
        "top/20.jpg", 
        "top/21.jpg",
        "top/22.jpg",
        "top/23.jpg", 
        "top/24.jpg", 
        "top/25.jpg", 
        "top/26.jpg", 
        "top/27.jpg", 
        "top/28.jpg", 
        "top/29.jpg", 
        "top/30.jpg", 
        "top/31.jpg", 
        "top/32.jpg", 
        "top/33.jpg", 
        "top/34.jpg", 
        "top/35.jpg", 
        "top/36.jpg", 
        "top/37.jpg", 
        "top/38.jpg", 
        "top/39.jpg", 
        "top/40.jpg", 
        "top/41.jpg", 
        "top/42.jpg", 
     
    ];
     var randomTopChamp = toplaners[getRandomIndex(toplaners)];
     
  
     var toplanerImg = document.querySelector("#toplaners .imagemR");
 
     toplanerImg.style.backgroundImage = `url(${randomTopChamp})`;
    }
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    
    function randomizarjg() {
        var junglers = [
            "jg/43.jpg",
            "jg/44.jpg",
            "jg/45.jpg",
            "jg/46.jpg",
            "jg/47.jpg",
            "jg/48.jpg",
            "jg/49.jpg",
            "jg/50.webp",
            "jg/51.jpg",
            "jg/52.jpg",
            "jg/53.jpg",
            "jg/54.jpg",
            "jg/55.jpg",
            "jg/56.jpg",
            "jg/57.jpg",
            "jg/58.jpg",
            "jg/59.jpg",
            "jg/60.jpg",
            "jg/61.jpg",
            "jg/62.jpg",
            "jg/63.jpg",
            "jg/64.jpg",
            "jg/65.jpg",
            "jg/66.jpg",
            "jg/67.jpg",
            "jg/68.jpg",
            "jg/69.jpg",
            "jg/70.jpg",
            "jg/71.jpg",
            "jg/72.jpg",
            "jg/73.jpg",
            "jg/74.jpg",
            "jg/75.jpg",
            "jg/76.jpg",
            "jg/77.jpg",
            "jg/78.jpg",
            "jg/79.jpg",
            "jg/80.jpg",
            "jg/81.jpg",
            "jg/82.jpg",
            "jg/83.jpg",
        ];
        var randomJungleChamp = junglers[getRandomIndex(junglers)];
        var junglerImg = document.querySelector("#junglers .imagemR");
        junglerImg.style.backgroundImage = `url(${randomJungleChamp})`;
    }
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    
    function randomizarmid() {
        var midlaners = [
            "mid/85.jpg", 
            "mid/86.jpg", 
            "mid/87.jpg",
            "mid/88.jpg",
            "mid/89.jpg",
            "mid/90.jpg", 
            "mid/91.jpg", 
            "mid/92.jpg", 
            "mid/93.jpg", 
            "mid/94.jpg", 
            "mid/95.jpg", 
            "mid/96.jpg", 
            "mid/97.jpg", 
            "mid/98.jpg", 
            "mid/99.jpg", 
            "mid/100.jpg", 
            "mid/101.jpg", 
            "mid/102.jpg", 
            "mid/103.jpg", 
            "mid/104.jpg", 
            "mid/105.jpg", 
            "mid/106.jpg", 
            "mid/107.jpg", 
            "mid/108.jpg", 
            "mid/109.jpg", 
            "mid/110.jpg", 
            "mid/111.jpg", 
            "mid/112.jpg", 
            "mid/113.jpg", 
            "mid/114.jpg", 
            "mid/115.jpg", 
            "mid/116.jpg", 
            "mid/117.jpg", 
            "mid/118.jpg",
            "mid/119.jpg", 
            "mid/120.jpg", 
            "mid/121.jpg", 
            "mid/122.jpg", 
            "mid/123.jpg", 
            "mid/124.jpg", 
            "mid/125.jpg",
            "mid/126.jpg",
        ];
        var randomMidChamp = midlaners[getRandomIndex(midlaners)];
        var midlanerImg = document.querySelector("#midlaners .imagemR");
        midlanerImg.style.backgroundImage = `url(${randomMidChamp})`;
    }
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    
    function randomizarsup() {
        var supports = [
            "sup/127.jpg",
            "sup/128.jpg",
            "sup/129.jpg",
            "sup/130.jpg",
            "sup/131.jpg",
            "sup/132.jpg",
            "sup/133.jpg",
            "sup/134.jpg",
            "sup/135.jpg",
            "sup/136.jpg",
            "sup/137.jpg",
            "sup/138.jpg",
            "sup/139.jpg",
            "sup/140.jpg",
            "sup/141.jpg",
            "sup/142.jpg",
            "sup/143.jpg",
            "sup/144.jpg",
            "sup/145.jpg",
            "sup/146.jpg",
            "sup/147.jpg",
            "sup/148.jpg",
            "sup/149.jpg",
            "sup/150.jpg",
            "sup/151.jpg",
            "sup/152.jpg",
            "sup/153.jpg",
            "sup/154.jpg",
            "sup/155.jpg",
            "sup/156.jpg",
            "sup/157.jpg",
            "sup/158.jpg",
            "sup/159.jpg",
        ];
        var randomSupportChamp = supports[getRandomIndex(supports)];
        var supportImg = document.querySelector("#suports .imagemR");
        supportImg.style.backgroundImage = `url(${randomSupportChamp})`;
    }

        function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
        }
        
        function randomizaradc() {
    var adcarrys = [
        "adc/160.jpg",
        "adc/161.jpg",
        "adc/162.jpg",
        "adc/163.jpg",
        "adc/164.jpg",
        "adc/165.jpg",
        "adc/166.jpg",
        "adc/167.jpg",
        "adc/168.jpg",
        "adc/169.jpg",
        "adc/170.jpg",
        "adc/171.jpg",
        "adc/172.jpg",
        "adc/173.jpg",
        "adc/174.jpg",
        "adc/175.jpg",
        "adc/176.jpg",
        "adc/177.jpg",
        "adc/178.jpg",
        "adc/179.jpg",
        "adc/180.jpg",
        // Adicione os caminhos das outras imagens de adcarrys aqui
    ];
    var randomAdcChamp = adcarrys[getRandomIndex(adcarrys)];
    var adcarryImg = document.querySelector("#adcarrys .imagemR");
    adcarryImg.style.backgroundImage = `url(${randomAdcChamp})`;
}