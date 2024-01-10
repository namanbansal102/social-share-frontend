let allPolls=document.querySelector('.all-polls')
var audio = new Audio('/static/sound.mp3');
audio.play();
// console.log("Polling js is Running");
let okay=document.querySelector('.okay')
let popcontainer=document.querySelector('.pop-container')
let allconty=document.querySelector('.allconty')
let thanksorerror=document.querySelector('.thanksorerror')
let facebook=document.querySelector('.facebook')
let instagram=document.querySelector('.instagram')
let twitter=document.querySelector('.twitter')
// let confetti=document.querySelector('.confetti')
setImg=0;

pollArray=[{
    'name':"Fukra Insan",
    'imgUrl':"https://yt3.googleusercontent.com/ytc/APkrFKbcLA9WyrcIfCfh_tQ0H5-Td4y7u170BnxNaBcdKg=s900-c-k-c0x00ffffff-no-rj",
    'poll':50
},
{
    'name':"Mr.Indian Hacker",
    'imgUrl':"https://yt3.googleusercontent.com/ytc/APkrFKat0Zit1qboqrFUG02XoL2lfJ_ZaOiPkVjGM203Kw=s900-c-k-c0x00ffffff-no-rj",
    'poll':70
},{
    'name':"Emiway Batani",
    'imgUrl':"https://yt3.googleusercontent.com/6hEJNnHUO6-xaZ1XpRbwg4edSnJ7mH7IP2p3xoXz7rAxfznMcvxHkbulfSaG0BKZaCKEPKiUkQ=s900-c-k-c0x00ffffff-no-rj",
    'poll':80
},{
    'name':"Kesari Music World",
    'imgUrl':"https://yt3.googleusercontent.com/sUD0R37GDBalSDTmt0rvU-8u0xK5QhPsksGwJI6LpqEevakpvDmcQW250z7FYmyFQNiImCJy5Q=s900-c-k-c0x00ffffff-no-rj",
    'poll':40
},{
    'name':"Sahil Joshi Vlogs",
    'imgUrl':"https://yt3.googleusercontent.com/ytc/APkrFKbaA9D4A5yWvkNq8HmqffiZHNwEn-ZENfAccmP7=s900-c-k-c0x00ffffff-no-rj",
    'poll':46
},{
    'name':"Wanderes Hub",
    'imgUrl':"https://play-lh.googleusercontent.com/9t5ZMMHKdpOiW22w07yBf0ovRxC1ECJKsFvHvAVhrrbxAiTIXyy0aT1oz-YsBm0lSFs",
    'poll':80
},{
    'name':"Tech Burner",
    'imgUrl':"https://yt3.googleusercontent.com/e7f5GQYfWs0b6JLOvp6tOGO9IvCJbfjUREN7cqbeS8VR0Mc-fJ0jzMV3aNNxHbCFz6RV1kAwxQ=s900-c-k-c0x00ffffff-no-rj",
    'poll':90
},{
    'name':"Jayant Chahar",
    'imgUrl':"https://cdnb.artstation.com/p/assets/images/images/028/641/947/large/jayant-chahar-picsart-05-02-07-45-48.jpg?1595064127",
    'poll':96
},{
    'name':"Mr.Faisu",
    'imgUrl':"https://yt3.googleusercontent.com/roHUwk936gxumfPZ7dK0vIRxjWlGPVK3HFjxz4mvWEwHxRi0ROd_sUXlxitAFyttSZMHRBL_NQ=s900-c-k-c0x00ffffff-no-rj",
    'poll':43
}]
// colors=['#f9ca24','#eb4d4b','#686de0','#be2edd','#badc58','#ff6b81','#e15f41','#26de81','#ffa860']
// pollArray.forEach(element => {
//     localStorage.setItem(element['name'],JSON.stringify(element))
// });
function fetchItems(){
    dict=[]
    for(let i=0;i<localStorage.length;i++){
        listed=JSON.parse(localStorage.getItem(localStorage.key(i)));
        k={'name':listed['name'],'imgUrl':listed['imgUrl'],'poll':listed['poll']}
        dict.push(k);
    }
    return dict;
}
getData=fetchItems()

getData.forEach(element => {
    if (element['name']!=undefined) { 
        callPoll(element)
        let pollImg=document.querySelectorAll('.poll-img')
        pollImg.forEach(elementImg => {
            elementImg.addEventListener('click',()=>{
                console.log("Image is Clicked");
                audio.play()
                getName=(elementImg.alt.split("-")).join(" ")
                console.log(getName);
                foundedElement=JSON.parse(localStorage.getItem(getName))
                console.log(foundedElement);
                if(foundedElement['poll']<=110){
                    console.log();
                    
                    foundedElement['poll']+=5
                    console.log("After That Founded Element Becomes",foundedElement);
                    localStorage.setItem(getName,JSON.stringify(foundedElement))
                    // callPoll(foundedElement)
                    thanksorerror.innerText="Thanks For Polling"
                    setTimeout(() => {
                        popcontainer.style.visibility='visible'
                        allconty.style.opacity='0.08'
                        
                    }, 600);
                    
                    
                }
                else{
                    thanksorerror.innerText="OOPS! Poll Full"
                    setTimeout(() => {
                        popcontainer.style.visibility='visible'
                        allconty.style.opacity='0.08'
                    }, 600);   
                }});
        
})  
    }
})
async function increaseHeightOfPoll(elementPoll) {
    let i = 1;

    const increaseHeight = () => {
        if(i==5){
            return;
        }
        elementPoll.style.height = `${elementPoll.id*i}px`;
        i += 1;
       setTimeout(increaseHeight, 200);
    };

    // Initial call to start the interval
    increaseHeight();
}
function callPoll(element){
    allPolls.innerHTML+=`<div class="poll">
        <div id=${element['poll']} class="poll-div"> <img class="poll-img"
        src=${element['imgUrl']}
        alt=${(element['name'].split(" ")).join("-")}>
        <center>
        <div class="h3">${element['name']}<br>${element['poll']}%</div>
        </center>
        </div>
        </div>`
        let polldiv=document.querySelectorAll('.poll-div')
        polldiv.forEach(elementPoll => {
            console.log(elementPoll);
                increaseHeightOfPoll(elementPoll)
        });
}
function runscreenCapture(){
    
}
facebook.addEventListener('click',()=>{
    console.log("icon Buttton Clicked");
    c=document.body
    popcontainer.style.visibility='hidden'
    allconty.style.opacity='1'
    html2canvas(allconty, {
        allowTaint: true,
        useCORS: true,
      })
      .then(function (canvas) {
        // It will return a canvas element
        let image = canvas.toDataURL("image/png", 1);
        console.log(image);
      })
      .catch((e) => {
        // Handle errors
        console.log(e);
      });

})
instagram.addEventListener('click',()=>{
    console.log("icon Buttton Clicked");
    c=document.body
    popcontainer.style.visibility='hidden'
    allconty.style.opacity='1'
    html2canvas(allconty, {
        allowTaint: true,
        useCORS: true,
      })
      .then(function (canvas) {
        // It will return a canvas element
        let image = canvas.toDataURL("image/png", 1);
        console.log(image);
        window.location.href=image
      })
      .catch((e) => {
        // Handle errors
        console.log(e);
      });
})
twitter.addEventListener('click',()=>{
    console.log("icon Buttton Clicked");
    c=document.body
    popcontainer.style.visibility='hidden'
    allconty.style.opacity='1'
    html2canvas(allconty, {
        allowTaint: true,
        useCORS: true,
      })
      .then(function (canvas) {
        // It will return a canvas element
        let image = canvas.toDataURL("image/png", 1);
        console.log("The Type of Image is",typeof image);
        console.log(image);
        window.location.href='https://twitter.com/intent/tweet?text=https://ik.imagekit.io/0so2jppdn/Screenshot%202023-12-07%20124224.png?updatedAt=1701933164245'
        newImg=image.substring(24,image.length-1)
        getLength=Math.floor((newImg.length/3))

        fetch('http://localhost/generateUrl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({newImg:newImg})  // must match 'Content-Type' header
        }).then(response=>response.json()).then(jsono=>console.log(jsono))
            
        console.log(newImg);
      })
      .catch((e) => {
        // Handle errors
        console.log(e);
      });
})
okay.addEventListener('click',()=>{
    popcontainer.style.visibility='hidden'
    allconty.style.opacity='1'
    window.location.reload()
})

console.log(fetchItems());