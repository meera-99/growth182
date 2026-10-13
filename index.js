let image1=document.querySelector(".mainanm")

moveright=0;
on=0;

function takestepr(){
    console.log("clicked right");
    
   if (on==0){
    console.log("here")
         on++;
        moveright=moveright+700;

     }else if (on==1){
        on++;
        moveright=moveright+700;
     }
    else if (on==2){
        on++;
        moveright=moveright+700;
     }
     else if (on==3){
        on=0;
        moveright=0;
     }
 

    image1.style.transform="translate(-"+moveright+"px)";
    console.log("clicked right 2");
    console.log(moveright, on)


}
