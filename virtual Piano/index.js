var num=document.querySelectorAll("button").length;
for(var i=0; i<num;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        

        var buttonInnerhtml = this.innerHTML;
        sound(buttonInnerhtml);
        
    })
}

document.addEventListener("keydown",function(event){

    sound(event.key);
   
})





function sound(key){

    switch (key) {
        case 'A':
        case 'a':
            var A_major = new Audio('sound/A.mp3');
            A_major.play();
            break;
        
        case 'B':
        case 'b':
            var B_major = new Audio('sound/B.mp3');
            B_major.play();
            break;
    
        case 'C':
        case 'c':
            var C_major = new Audio('sound/C.mp3');
            C_major.play();
            break;

        case 'D':
        case 'd':
            var D_major = new Audio('sound/D.mp3');
            D_major.play();
            break;

        case 'E':
        case 'e':
            var E_major = new Audio('sound/E.mp3');
            E_major.play();
            break;
        
        case 'F':
        case 'f':
            var F_major = new Audio('sound/F.mp3');
            F_major.play();
            break;

        case 'G':
        case 'g':
            var G_major = new Audio('sound/G.mp3');
            G_major.play();
            break;

        case'Ab':
        case 'k':
            var Ab = new Audio('sound/Ab.mp3');
            Ab.play();
            break;

        case'Bb':
        case 'l':
            var Bb = new Audio('sound/Bb.mp3');
            Bb.play();
            break;

        case 'Db':
        case 'i':
            var Db = new Audio('sound/Db.mp3');
            Db.play();
            break;

        case 'Eb':
        case 'o':
            var Eb = new Audio('sound/Eb.mp3');
            Eb.play();
            break;

        case 'Gb':
        case 'j':
            var Gb = new Audio('sound/Gb.mp3');
            Gb.play();
            break;

        default:
            break;
    }
}