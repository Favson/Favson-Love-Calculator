function updateGMTTime() {
    const timeDateInNigeria = new Date().toLocaleString('en-ng', {timeZone: 'Africa/Lagos'});  
    dateshow.innerHTML=(timeDateInNigeria);
}
setInterval(updateGMTTime, 1000);

songToPlay = new Audio("audios/SongD.mp3")
songToPlay2 = new Audio("audios/Chidinma-Fallen-in-love.m4a")
songToPlay3 = new Audio("audios/SongX.mp3")
songToPlay4 = new Audio("audios/funny.mp3")
songToPlay5 = new Audio("audios/timi-dakolo-iyawo-mi.m4a")

// console.log(myLoveCal);
function testLove(){
    let firstInput = (document.getElementById("firstInpt").value).toLowerCase()
    let secondInput = (document.getElementById('secondInpt').value).toLowerCase()
    let newFirstInput = firstInput.trim()
    let newSecondInput = secondInput.trim()
    
    let myLoveCal = (Math.random() * (100 - 90) + 90).toFixed(0) 
    let loveCal = Math.round(Math.random()*100)
    let calLove = `${loveCal} %`
    
    if (newFirstInput == "" || newSecondInput ==""){
        errMsg.style.display = 'block'
        setTimeout(()=>{
            errMsg.style.display = 'none'
        }, 1500);
        
    }else if ((newFirstInput == 'jesutofunmi' || newFirstInput == 'tofunmi' || newFirstInput == 'bolaji jesutofunmi' || newFirstInput == 'bolaji tofunmi' || newFirstInput == 'jesutofunmi bolaji' || newFirstInput == 'tofunmi bolaji' || newFirstInput == 'favour adebisi' || newFirstInput == "favour" || newFirstInput == 'adebisi favour') && (newSecondInput == 'tofunmi' ||newSecondInput == 'favour' || newSecondInput == 'adebisi favour' || newSecondInput == 'favour adebisi' ||newSecondInput=='bolaji jesutofunmi'|| newSecondInput== 'jesutofunmi' || newSecondInput == 'jesutofunmi bolaji')){
        songToPlay.pause()
        songToPlay2.pause()
        songToPlay3.pause()
        songToPlay4.pause()
        songToPlay5.play()
        imagesDiv.style.display = 'none'
        imagesDivShow.innerHTML = `
            <div class="" id="cardi2">
                <img src="image/favour.jpg" alt="pic" style="border-radius: 120rem; width:100%; height:110px">
            </div>
            <div class="" id="cardi2">
                <img src="image/tofunmi.jpg" alt="lovepics" style="border-radius: 120rem; width:100%; height:110px">
            </div>
        `
        displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${myLoveCal}%</h3><br>
        <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
            <h4 style="color:white;font-family: 'Lobster', sans-serif;">You guys really love each other so go and get marry❤️, Let we the singles breathe.</h4>
        `
    }else if((newFirstInput == 'oluwatimileyin' || newFirstInput== 'olutimz' || newFirstInput == 'timileyin' || newFirstInput == 'boluwatife' || newFirstInput == 'timi' || newFirstInput== 'bolu') && (newSecondInput == 'oluwatimileyin' || newSecondInput== 'olutimz' || newSecondInput == 'timileyin' || newSecondInput == 'boluwatife' || newSecondInput == 'timi' || newSecondInput == 'bolu')){
        songToPlay.pause()
        songToPlay2.pause()
        songToPlay3.pause()
        songToPlay4.pause()
        songToPlay5.play()
        imagesDiv.style.display = 'none'
        imagesDivShow.innerHTML = `
            <div class="" id="cardi2">
                <img src="image/bro timi.jpg" alt="" style="border-radius: 120rem; width:100%; height:110px">
            </div>
            <div class="" id="cardi2">
                <img src="image/bolutife.JPG" alt="" style="border-radius: 120rem; width:100%; height:110px">
            </div>
        `
        displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${myLoveCal}%</h3><br>
            <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
            <h4 style="color:white;font-family: 'Lobster', sans-serif;">Wow!!!, go and get marry❤️, Let the singles breathe.</h4>
        `
    }else if (newFirstInput !== "" || newSecondInput !== ""){
        if(loveCal == 1 || loveCal <=30){
            imagesDivShow.style.display='none'
            imagesDiv.style.display = 'block' 
            displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white;font-family: 'Lobster', sans-serif;">run!!!! run oo 🏃💨💨, no dey trust Adam?</h4>
            `
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay3.pause()
            songToPlay4.play()
            songToPlay5.pause()
        }else if (loveCal == 31 || loveCal <=40){
            imagesDiv.style.display = 'block' 
            imagesDivShow.style.display='none'
            songToPlay.play()
            songToPlay5.pause()
            songToPlay3.pause()
            songToPlay2.pause()
            songToPlay4.pause()
            displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
                <h4 style="white;font-family: 'Lobster', sans-serif;">Hmm!!! relationship no be your mate o just stay single biko 🤣🤣</h4>
            `
        }else if(loveCal == 41 || loveCal <=50){
            imagesDivShow.style.display='none'
            imagesDiv.style.display = 'block' 
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay3.play()
            songToPlay4.pause()
            songToPlay5.pause()
            displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white;font-family: 'Lobster', sans-serif;">You fit try love but no dey trust adam o, Sora fobinrin 😂😂</h4>
            `
        } else if(loveCal == 51 || loveCal <= 70){
            imagesDivShow.style.display='none'
            imagesDiv.style.display = 'block' 
            songToPlay.pause()
            songToPlay3.pause()
            songToPlay2.play()
            songToPlay4.pause()
            songToPlay5.pause()
            displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white;font-family: 'Lobster', sans-serif;">Idan mhy 🙌🙌🙌, let the singles breathe!</h4>
            `
        }else if (loveCal == 71 || loveCal <=100){
            imagesDivShow.style.display='none'
            imagesDiv.style.display = 'block' 
            songToPlay.pause()
            songToPlay3.pause()
            songToPlay2.play()
            songToPlay4.pause()
            songToPlay5.pause()
            displayLove.innerHTML = `<h3 style="color:white;font-family: 'Lobster', sans-serif;">Hi ${newFirstInput}, your love percentage is ${calLove}</h3><br>
                <h3 style="color:white;font-family: 'Lobster', sans-serif;">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white;font-family: 'Lobster', sans-serif;">Idan nla 🙌🙌🙌, go and get marry 💙, Let the singles breathe.</h4>
            `
        }
    }
    document.getElementById("firstInpt").value = ""
    document.getElementById('secondInpt').value = ""
}

const changeAvater =() => {
    imageAvaterDisplay.style.display= 'block'
    // imageAvaterDp1.style.display ='block'
    // imageAvaterDp2.style.display ='block'
    // imageAvaterDp3.style.display ='block'
    // imageAvaterDp4.style.display ='block'
    // imageAvaterDp5.style.display ='block'
    imageAvater1()
    imageAvater2()
    imageAvater3()
    imageAvater4()
    imageAvater5()
    setTimeout(()=>{
        imageAvaterDisplay.style.display='none'
    },10000)
}


function imageAvater1(){
    cardi.innerHTML=`<img src="image/pexels-sơn-ngọc-19259431.jpg" alt="" style="border-radius: 120rem; width:100%; height:120px">`
}

function imageAvater5(){
    cardi.innerHTML=`<img src="image/female anime.png" alt="" style="border-radius: 120rem; width:100%; height:120px">`
}

function imageAvater3(){
    cardi.innerHTML=`<img src="image/male anime.png" alt="" style="border-radius: 120rem; width:100%; height:120px">`
}

function imageAvater4(){
    cardi.innerHTML=`<img src="image/Grey Illustration Couple Phone Wallpaper.png" alt="" style="border-radius: 120rem; width:100%; height:120px">`
}

function imageAvater2(){
    cardi.innerHTML=`<img src="image/wallpaperNew.PNG" alt="" style="border-radius: 120rem; width:100%; height:120px">`  
}