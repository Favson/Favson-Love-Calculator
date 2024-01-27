songToPlay = new Audio("audios/SongD.mp3")

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
        
    }else if (firstInput == 'jesutofunmi' || secondInput == 'favour' || firstInput == 'tofunmi' || firstInput == 'bolaji jesutofunmi' || firstInput == 'bolaji tofunmi' || firstInput == 'jesutofunmi bolaji' || firstInput == 'tofunmi bolaji' || secondInput == 'adebisi favour' || secondInput == 'favour adebisi' || firstInput == "favour" || firstInput == 'favour adebisi' || firstInput == 'adebisi favour' || secondInput == 'tofunmi' || secondInput=='bolaji jesutofunmi'|| secondInput== 'jesutofunmi' || secondInput == 'jesutofunmi bolaji' || firstInput == 'boluwatife' || secondInput == "timileyin"){
        imagesDiv.style.display = 'none'
        imagesDivShow.innerHTML = `
            <div class="" id="cardi2">
                <img src="image/406343996_733384148234485_2398026599622826890_n.jpg" alt="" style="border-radius: 120rem; width:100%; height:110px">
            </div>
            <div class="" id="cardi2">
                <img src="image/tofunmi.jpg" alt="" style="border-radius: 120rem; width:100%; height:110px">
            </div>
        `
        displayLove.innerHTML = `<h3 style="color:#9E014B">Hi ${firstInput}, your love percentage is ${myLoveCal}%</h3>
            <h1 style="color:grey">${myLoveCal} %</h1>
            <h4>Wow!!!, what are you waiting for?, go and get marry</h4>
        `
    }else if (firstInput !== "" || secondInput !== ""){
        if(loveCal == 1 || loveCal <=30){
            displayLove.innerHTML = `<h3>${calLove}</h3>
                <p style="white">You better commot from this your so call relationship, e no better for you ooo!!!</p>
            `
            songToPlay.play()
        }else if (loveCal == 31 || loveCal <=50){
            displayLove.innerHTML = `<h3>${calLove}</h3>
                <p style="white">Hmm!!!</p>
            `
        }else if(loveCal == 51 || loveCal <= 70){
            displayLove.innerHTML = `<h3>${calLove}</h3>`
        }else if (loveCal == 71 || loveCal <=100){
            displayLove.innerHTML = `<h3>${calLove}</h3>`
        }
    }
    document.getElementById("firstInpt").value = ""
    document.getElementById('secondInpt').value = ""
}