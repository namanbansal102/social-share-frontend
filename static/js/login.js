console.log("Login js is Running");
let myname=document.querySelector('.enter-text')
let fileInput=document.querySelector('#up-file')
let upload=document.querySelector('.upload')
let getImgUp=document.querySelector('.get-img-up')
let popContainer=document.querySelector('.pop-container')
let upgif=document.querySelector('.up-gif')
let okay=document.querySelector('.okay')
let logConty=document.querySelector('.log-conty')
getOp=0
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        console.log(reader.result);  
        getOp=reader.result
        getImgUp.src=getOp
        getImgUp.style.borderRadius='50%'
        getImgUp.style.height='100px'
        getImgUp.style.width='100px'
    };
    reader.readAsDataURL(file);
});
upload.addEventListener('click',async ()=>{
    console.log("Upload Button is Clicked");
    
    console.log(getOp);
    localStorage.setItem(myname.value,JSON.stringify({
        'name':myname.value,
        'imgUrl':getOp,
        'poll':40
    }))
    popContainer.style.visibility='visible'  
    setTimeout(() => {
        
        logConty.style.opacity=0.5
    }, 100);
    setTimeout(() => {
        
        logConty.style.opacity=0.4
    }, 200);
    setTimeout(() => {
        
        logConty.style.opacity=0.3
    }, 300);
    setTimeout(() => {
        
        logConty.style.opacity=0.1
    }, 400);
    setTimeout(() => {
        window.location.href='index.html'
        popContainer.style.visibility='hidden'
        logConty.style.opacity=1
        
    }, 2000);
})
okay.addEventListener('click',()=>{
    window.location.href='index.html'
    popContainer.style.visibility='hidden'
    logConty.style.opacity=1


})
