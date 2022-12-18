// Get buttons by class name change-cat and change-dog
const changeCatBtn = document.getElementById('change-cat');
const changeDogBtn = document.getElementById('change-dog');

const catImg = document.getElementById('cat-img');
const dogImg = document.getElementById('dog-img');

const catUrl = "http://aws.random.cat/meow";
const dogUrl = "https://dog.ceo/api/breeds/image/random";

async function fetchHandler(url, img) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        img.src = (url.search(/dog/) !== -1) ? data.message : data.file;
    } catch (error) {
        console.log(error);
    }
}

changeCatBtn.addEventListener('click', () => {
    let isLoaded = catImg.complete;

    if (isLoaded) {
        fetchHandler(catUrl, catImg);
    }
});

changeDogBtn.addEventListener('click', () => {
    let isLoaded = dogImg.complete;

    if (isLoaded) {
        fetchHandler(dogUrl, dogImg);
    }
});