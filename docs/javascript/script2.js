function z()
{
var a=document.getElementById("test");
var b=document.getElementById("password");
if(a.value=="vp")
{
if(b.value=="spanska8")
    {
    document.getElementById('secret').style.display="block";
    document.getElementById('pass').style.display="none";
    }
else{
    document.getElementById('err').innerHTML= 'fel';
}
}
if(a.value=="скай")
{
if(b.value=="octobercanonevent")
    {
    document.getElementById('secret').style.display="block";
    document.getElementById('pass').style.display="none";
    }
else{
    document.getElementById('err').innerHTML= 'fel';
}

}
else
{
document.getElementById('err').innerHTML= 'fel';

}
}