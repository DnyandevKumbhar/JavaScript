function vali(em)
{
 /* var em=document.getElementById("email").value;*/
    /*var reg=/^([a-z0-9\._+])@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/*/
    var reg=(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    var ind=em.indexOf("@");
    var sp=document.getElementById("spn1");
   /* if(ind==0 ||em.match(/@/g).length>1)
    {
    
    sp.innerHTML="Invalid Email";
    
    sp.style.color="white";
    }
    else*/ if(!em.match(reg))
    {
      
       sp.innerHTML="Invalid Email";
       sp.style.color="red";
    }
    else
    {
       sp.innerHTML="Valid Email";
       sp.style.color="green";
    }

    
}