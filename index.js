console.log("Js is Running");
let darkMode=document.querySelector('#dark-mode')
let centerPortion=document.querySelector('.center-portion')
let quote=document.querySelector('.quote')
let footer=document.querySelector('.website-foot')
let myicon=document.querySelectorAll('.myicon')
let searchtxt=document.querySelector('.searchtxt')
let searchbtn=document.querySelector('.searchbtn')
let takeInput=document.querySelector('.take-input')
let getcont=document.querySelector('.getcont')
let container=document.querySelector('.container')
mode=0
async function printJSON() {
    const response = await fetch("data.json");
    const json = await response.json();
    return json;
}

searchbtn.addEventListener('click',async ()=>{
    console.log("Search Button is Clicked");
    
    getcont.style.visibility='visible'
    container.classList.add("transparent-bg")
    mydata=await printJSON()
    setTimeout(() => {
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
    }, 500);
    setTimeout(() => {
        
        getcont.style.visibility='hidden'
        container.classList.remove("transparent-bg")
    }, 500);
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
        text=searchtxt.value
        if (!text){          

        }
        else{           
            elem=element
            console.log("Element is Clicked");
            console.log(elem.alt);
            
            if(elem.alt=='whatsapp'){
                window.open(`https://api.whatsapp.com/send/?text=Share ${text}&type=custom_url&app_absent=0`,'_blank')
                console.log(window.location.href);
            }
            else if (elem.alt=='linkedin')
            {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${text}`,'_blank')
                console.log(window.location.href);

            }
            else if (elem.alt=='pintrest')
            {
                window.open(`https://in.pinterest.com/pin/create/button/?description=${text}&url=/node/createImage`)
                console.log(window.location.href);

            }
            else if (elem.alt=='reddit')
            {
                window.open(`https://www.reddit.com/submit?url=${text}&title=FromSocialShareButton`)
                console.log(window.location.href);

            }
            else if (elem.alt=='twitter')
            {
                window.open(`https://twitter.com/intent/tweet?text=${text}`)
                console.log(window.location.href);

            }
            else if (elem.alt=='mail')
            {
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=SocialshareButton&body=${text}'+msgbody+'&ui=2&tf=1&pli=1`)
                console.log(window.location.href);

            }
            else if (elem.alt=='telegram')
            {
                window.open(`https://telegram.me/share/url?url=SocialShareButton&text=${text}`)
                console.log(window.location.href);

            }
            else if (elem.alt=='google+')
            {
                window.open(`https://plus.google.com/share?url=${text}
                `)
                console.log(window.location.href);

            }
            else if (elem.alt=='buffer')
            {
                window.open(`https://bufferapp.com/add?text=Socialshare&url=${text}

                `)
                console.log(window.location.href);

            }
            else if (elem.alt=='tumblr')
            {
                window.open(`https://www.tumblr.com/share/link?url=tumblr.com&name=SocialShare&description=${text}


                `)
                console.log(window.location.href);

            }
            else if (elem.alt=='youtube')
            {
                window.open(`https://www.youtube.com/@${text}`)
                console.log(window.location.href);

            }
            else if (elem.alt=='wordpress')
            {
                window.open(`https://wordpress.com/press-this.php?u=[post-url]&t=Social share&s=${text}&i=[post-img]



                `)
                console.log(window.location.href);

            }
            
            
        }
    }) });
    console.log("Our Webiste Is Running");


