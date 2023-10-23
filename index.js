console.log("Js is Running");
let darkMode=document.querySelector('#dark-mode')
let centerPortion=document.querySelector('.center-portion')
let quote=document.querySelector('.quote')
let footer=document.querySelector('.website-foot')
let myicon=document.querySelectorAll('.myicon')
let searchtxt=document.querySelector('.searchtxt')
let searchbtn=document.querySelector('.searchbtn')
let takeInput=document.querySelector('.take-input')
mode=0
async function printJSON() {
    const response = await fetch("data.json");
    const json = await response.json();
    return json
}

searchbtn.addEventListener('click',async ()=>{
    console.log("Search Button is Clicked");
    
    mydata=await printJSON()
    console.log(mydata);
    console.log(mydata[0]['Actor Name']);
    
    gettextvalue=searchtxt.value;
    mydata.forEach(element => {
        if(element['Actor Name']==gettextvalue){
            console.log("Value Found");
            takeInput.innerHTML +=`  <div class="combine-lst">
    <span style="font-weight: bold; padding-left: 5px; letter-spacing: 3px;">Trending Results</span>
    <div class="lst">
        <img  src=${element['Image URL']} alt="">
        ${element['Actor Name']}
        <button>Info</button>
    </div>   
    </div>`;
        }
    else{
        console.log("Value Not Founded");
    }
        
    });
    

})

darkMode.addEventListener('click',()=>{
    if (mode==0){
        centerPortion.style.backgroundColor='black'
        quote.style.color='white'
        quote.style.borderColor='white'
        mode=1  
    }

    else{
        centerPortion.style.backgroundColor='white'
        quote.style.color='black'
        quote.style.borderColor='black'
        mode=0
    }})
myicon.forEach(element => {
    element.addEventListener('click',()=>{
        alert("Redirecting...")
    }) });