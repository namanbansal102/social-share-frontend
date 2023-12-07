console.log("Favourite.js is Running");
let combinelst=document.querySelector('.combine-lst')

if(sessionStorage.length!=0){  
    function fetchItems(){
        dict=[]
        for(let i=0;i<sessionStorage.length;i++){
            listed=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
            k={'ActorName':listed[0],'ImageUrl':listed[1],'rating':listed[2]}
            dict.push(k);
        }
        return dict;
    }
    lst=fetchItems()
    console.log(lst);
    combinelst.innerHTML+=lst.map((element)=>{
        if(element['ActorName']!=undefined){
            function countstars(){
                k=""
                for (let i=0;i<Number(element['rating']);i++){
                    k+=`<img class="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png">`
                }
                return k;
            }
            let {ActorName,ImageUrl,rating}=element
            let namealt=ActorName.split(" ").join("-")
            return `<div class="lst favourite">
            <img  src=${ImageUrl} alt="">
            <div class="mydivs">
            
            <span>${ActorName}</span>
            
            <div class="rating-button">
            <div class="heart">
            <img class="fav-img" src="https://cdn-icons-png.flaticon.com/128/9684/9684606.png" alt=${namealt}>
            
            
            </div>  
            <div class="stars">${countstars!=""?countstars():"🚫"}</div>
            
            </div>
            </div>
            </div> `  
        }
        })
        setTimeout(() => {  
            let favImg=document.querySelector('.fav-img')
            favImg.addEventListener('click',(e)=>{
                console.log("Fav Image Funtion is Running");
                window.location.reload();
                let namealt=favImg.alt.split("-").join(" ")
                console.log(namealt);
                sessionStorage.removeItem(namealt)
            })
        }, 50);
    }else{
        combinelst.innerHTML+=`<h1 class="nothing-head">No Favourites</h1>`
    }