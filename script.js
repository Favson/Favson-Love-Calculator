songToPlay = new Audio("audios/SongD.mp3")
songToPlay2 = new Audio("audios/Chidinma-Fallen-in-love.m4a")
songToPlay3 = new Audio("audios/SongX.mp3")
songToPlay4 = new Audio("audios/funny.mp3")
songToPlay5 = new Audio("audios/timi-dakolo-iyawo-mi.m4a")

// console.log(myLoveCal);
function testLove(){
    let firstInput = (document.getElementById("firstInpt").value).toLowerCase()
    let secondInput = (document.getElementById('secondInpt').value).toLowerCase()
    
    let myLoveCal = (Math.random() * (100 - 90) + 90).toFixed(0) 
    let loveCal = Math.round(Math.random()*100)
    let calLove = `${loveCal} %`
    
    if (firstInput == "" || secondInput ==""){
        errMsg.style.display = 'block'
        setTimeout(()=>{
            errMsg.style.display = 'none'
        }, 1500);
        
    }else if ((firstInput == 'jesutofunmi' || firstInput == 'tofunmi' || firstInput == 'bolaji jesutofunmi' || firstInput == 'bolaji tofunmi' || firstInput == 'jesutofunmi bolaji' || firstInput == 'tofunmi bolaji' || firstInput == 'favour adebisi' || firstInput == "favour" || firstInput == 'adebisi favour') && (secondInput == 'tofunmi' ||secondInput == 'favour' || secondInput == 'adebisi favour' || secondInput == 'favour adebisi' ||secondInput=='bolaji jesutofunmi'|| secondInput== 'jesutofunmi' || secondInput == 'jesutofunmi bolaji')){
        songToPlay.pause()
        songToPlay2.pause()
        songToPlay3.pause()
        songToPlay4.pause()
        songToPlay5.play()
        imagesDiv.style.display = 'none'
        imagesDivShow.innerHTML = `
            <div class="" id="cardi2">
                <img src="image/406343996_733384148234485_2398026599622826890_n.jpg" alt="" style="border-radius: 120rem; width:100%; height:110px">
            </div>
            <div class="" id="cardi2">
                <img src="image/tofunmi.jpg" alt="" style="border-radius: 120rem; width:100%; height:110px">
            </div>
        `
        displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${myLoveCal}%</h3><br>
        <h3 style="color:white">My Advice for you two 👇👇👇</h3>
            <h4 style="color:white">Wow!!!, go and get marry❤️, Let the singles breathe.</h4>
        `
    }else if((firstInput == 'oluwatimileyin' || firstInput== 'olutimz' || firstInput == 'timileyin' || firstInput == 'boluwatife' || firstInput == 'timi' || firstInput== 'bolu') && (secondInput == 'oluwatimileyin' || secondInput== 'olutimz' || secondInput == 'timileyin' || secondInput == 'boluwatife' || secondInput == 'timi' || secondInput == 'bolu')){
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
        displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${myLoveCal}%</h3><br>
            <h3 style="color:white">My Advice for you two 👇👇👇</h3>
            <h4 style="color:white">Wow!!!, go and get marry❤️, Let the singles breathe.</h4>
        `
    }else if (firstInput !== "" || secondInput !== ""){
        if(loveCal == 1 || loveCal <=30){
            displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white">run!!!! run oo 🏃💨💨, no dey trust Adam?</h4>
            `
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay3.pause()
            songToPlay4.play()
            songToPlay5.pause()
        }else if (loveCal == 31 || loveCal <=40){
            songToPlay.play()
            songToPlay5.pause()
            songToPlay3.pause()
            songToPlay2.pause()
            songToPlay4.pause()
            displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white">My Advice for you two 👇👇👇</h3>
                <h4 style="white">Hmm!!! relationship no be your mate o just stay single biko 🤣🤣</h4>
            `
        }else if(loveCal == 41 || loveCal <=50){
            songToPlay.pause()
            songToPlay2.pause()
            songToPlay3.play()
            songToPlay4.pause()
            songToPlay5.pause()
            displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white">You fit try love but no dey trust adam o, Sora fobinrin 😂😂</h4>
            `
        } else if(loveCal == 51 || loveCal <= 70){
            songToPlay.pause()
            songToPlay3.pause()
            songToPlay2.play()
            songToPlay4.pause()
            songToPlay5.pause()
            displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${calLove}</h3>
                <h3 style="color:white">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white">Idan mhy 🙌🙌🙌, let the singles breathe!</h4>
            `
        }else if (loveCal == 71 || loveCal <=100){
            songToPlay.pause()
            songToPlay3.pause()
            songToPlay2.play()
            songToPlay4.pause()
            songToPlay5.pause()
            displayLove.innerHTML = `<h3 style="color:white">Hi ${firstInput}, your love percentage is ${calLove}</h3><br>
                <h3 style="color:white">My Advice for you two 👇👇👇</h3>
                <h4 style="color:white">Idan nla 🙌🙌🙌, go and get marry 💙, Let the singles breathe.</h4>
            `
        }
    }
    document.getElementById("firstInpt").value = ""
    document.getElementById('secondInpt').value = ""
}