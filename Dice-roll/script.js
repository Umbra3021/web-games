var RandomNumber1=Math.floor(Math.random()*6)+1;
var RandomNumber2=Math.floor(Math.random()*6)+1;

var Imagesrc1 ="images/dice" + RandomNumber1 +".png";
var Imagesrc2 = "images/dice" + RandomNumber2 +".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",Imagesrc1);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",Imagesrc2);

if(RandomNumber1>RandomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins !";

}

else if(RandomNumber2>RandomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins !";

}

else
{
    document.querySelector("h1").innerHTML="It's a Tie !";
}