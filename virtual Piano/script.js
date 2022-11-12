var num=document.querySelectorAll("button").length;
for(var i=0; i<num;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        

        var buttonInnerhtml = this.innerHTML;
        sound(buttonInnerhtml);
        Animation(event.key);
        
        
    })
}

document.addEventListener("keydown",function(event){

    sound(event.key);
    Animation(event.key);
})

function sound(key){

    switch (key) {
        case 'A':
        case 'a':
            var A_major = new Audio('audio/A.Wav');
            A_major.play();
            break;
        
        case 'B':
        case 'b':
            var B_major = new Audio('audio/B.Wav');
            B_major.play();
            break;
    
        case 'C':
        case 'c':
            var C_major = new Audio('audio/C.Wav');
            C_major.play();
            break;

        case 'D':
        case 'd':
            var D_major = new Audio('audio/D.Wav');
            D_major.play();
            break;

        case 'E':
        case 'e':
            var E_major = new Audio('audio/E.Wav');
            E_major.play();
            break;
        
        case 'F':
        case 'f':
            var F_major = new Audio('audio/F.Wav');
            F_major.play();
            break;

        case 'G':
        case 'g':
            var G_major = new Audio('audio/G.Wav');
            G_major.play();
            break;

        case'Ab':
        case 'k':
            var Ab = new Audio('audio/Ab.Wav');
            Ab.play();
            break;

        case'Bb':
        case 'l':
            var Bb = new Audio('audio/Bb.Wav');
            Bb.play();
            break;

        case 'Db':
        case 'i':
            var Db = new Audio('audio/Db.Wav');
            Db.play();
            break;

        case 'Eb':
        case 'o':
            var Eb = new Audio('audio/Eb.Wav');
            Eb.play();
            break;

        case 'Gb':
        case 'j':
            var Gb = new Audio('audio/Gb.Wav');
            Gb.play();
            break;

        default:
            break;
    }
}

function Animation(key)
{
    var active =document.querySelector("."+key);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed")
    },100);
}

