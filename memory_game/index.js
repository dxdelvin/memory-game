
function createRandomInt(){
    rand_int = Math.floor(Math.random()*4)
    return rand_int
}



function sound(s){
    s2 = s=="blue"?"463/463390_9658839":s=="red"?"260/260614_4486188":s=="green"?"244/244655_3624044":"323/323741_950925"
    audio = new Audio(`https://cdn.freesound.org/previews/${s2}-lq.mp3`)
    audio.volume = 0.5;
    audio.play()
}

function fadeAnimate(fade){
    $(fade).fadeOut(60).css("box-shadow","0px 0px 0px 5px white").fadeIn(90);
    setTimeout(()=>{$(fade).css("box-shadow","0px 0px 0px 0px white").css("transition","box-shadow ease .1s")},180)
}

function createColor(level){
    user_pattern = []
    // adding to sequence
    let color = ["red","blue","green","yellow"]
    let choosen = color[createRandomInt()]
    // level change
    level++
    $('#title').text(`Level: ${level}`)
    computer_pattern.push(choosen)
    sound(computer_pattern[computer_pattern.length-1])
    fadeAnimate(`.${computer_pattern[computer_pattern.length-1]}`)

} 

function gameOver(level){
    $(".body").css("background-color","red")
        setTimeout(()=>{
     $(".body").css("background-color","#140538")
        },400)
    $('#title').text(`Game Over || Press Any Key to Continue`)
    started = false
    computer_pattern = []
    user_pattern = []
}

function checkAnswer(current_level){
    if (user_pattern[current_level] == computer_pattern[current_level]){
        if (user_pattern.length == computer_pattern.length){
            setTimeout(()=>{createColor(current_level)},1000)
        }
    }
    else{
        gameOver(computer_pattern.length)
    }
}



    let level = 0
    let user_pattern = []
    let computer_pattern = []
    let started = false

    $(document).keypress((e)=>{
        if(!started){
            $("#title").text("Level 0")
            $(".box").removeClass("box")
            setTimeout(()=>{createColor(level)},400)
            }
        started = true
        })
    

    $('.blue').on('click',()=>{
        fadeAnimate(".blue");
        sound("blue")
        user_pattern.push('blue')
        checkAnswer(user_pattern.length-1)
    })
    
    $('.red').on('click',()=>{
        fadeAnimate(".red");
        sound("red")
        user_pattern.push('red')
        checkAnswer(user_pattern.length-1)
    })
    
    $('.green').on('click',()=>{
        fadeAnimate(".green");
        sound("green")
        user_pattern.push('green')
        checkAnswer(user_pattern.length-1)
    })
    
    $('.yellow').on('click',()=>{
        fadeAnimate(".yellow");
        sound("yellow")
        user_pattern.push('yellow')
        checkAnswer(user_pattern.length-1)
    })

    

    
    


















// Learning JQUREY PERSONAL NOTES
// $('h1').css('color',"pink")

// hasClass, addClass, removeClass
// Example: $('h1').addClass("flex flex-right")

// text, html
// Example: $('button').html("<h3>New Text with New Child Elements</h3>")

// attr
// Example $("img").attr("src")  // to get the value
// Example $("img").attr("src","yahoo.com")  // to set the value


// $('h1').text('')
// $(document).keypress(function(e){
//     $('h1').text($('h1').first().text() + e.key)
// })

// .append(), .prepend(), .before(), .after(), .remove()


//

// // Practice
// $('h1').css('display','inline-block')
// $('h1').css('color','blue')

// $('h1').on('mouseover',()=>{
//     $('h1').css('color','yellow')
// })


// $('h1').on('mouseout',()=>{
//     $('h1').css('color','blue')
// })


