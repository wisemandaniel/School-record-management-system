var elecourse=document.getElementById('ecourse');
var comcourse=document.getElementById('ccourse');
var dep=document.getElementById('department');
elecourse.style.display='none';
dep.addEventListener("change", myfunction);
function myfunction()
{

    elecourse.style.display='block';
    comcourse.style.display='none';
 
}

function dfunction()
{
    var getvalue = document.getElementById("soft")
    elecourse.style.display='block';
    comcourse.style.display='none';
 
}