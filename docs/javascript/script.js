function z()
{
var a=document.getElementById("test");
if(a.value=="sky")
{
document.getElementById('secret').style.display="block";
document.getElementById('pass').style.display="none";
}
else
{
document.getElementById('err').innerHTML= 'wrong';

}

}