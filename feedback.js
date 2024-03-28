function checkforempty(frm,val){
    if(frm.val.value=="a"){
        document.getElementById(val).style.display="flex";
        document.getElementById(val).style.border="solid 2px red";
        document.getElementById(val).scrollIntoView();
        return false;
    }
    else{
        return true;

    };
}
