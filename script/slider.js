const image = document.querySelector(".inner-container img");
const leftBtn = document.querySelector(".fa-chevron-left");
const rightBtn = document.querySelector(".fa-chevron-right");
const h2 = document.querySelector(".slider .container h2");
const p = document.querySelector(".slider .container p")

const models = [
    {
        name: "Promise Oke",
        text: "To become a model, you will need to research the type of modeling you'd like to do, understand the strengths and beauty of your own body, practice posing in front of the camera, take photos to put together a model portfolio, and send applications and go to casting calls.",
        url: ".\\images\\model1.jpg"
    },
    {
        name: "Vera Micheal",
        text: "The first thing every aspiring model needs to know is what their best features are and how to flaunt them. Inspect your face, free of makeup and with your hair pulled back. Gone are the days when the industry demanded strict symmetry and Eurocentric features. The concept around beauty and the process of finding the perfect model has changed significantly in the industry. What is interesting about your face? Do you have full lips? Sleepy eyes? A gap in your teeth? Any of these can be advantageous when it comes to being remembered by casting agents.",
        url: ".\\images\\model2.jpg"
    },
    {
        name: "Kenny Ransom",
        text: "While modeling often gets glamorized in the media, when we actually sit down and take a look at what it means to be a model and all that goes into building a modeling career, it becomes clear that the meaning of modeling is quite complex and in-depth. Let’s review.",
        url: ".\\images\\model3.jpg"
    }
]

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);

let index = 0;

function prev(){
    if(index <= 0){
        index = 2;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }else{
        index = index - 1;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }
    
}

function next(){
    if(index > 2){
        index = 0;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }else{
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
        index = index + 1;
    }
    
}