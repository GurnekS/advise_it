let btn = document.getElementById("btn");
btn.onclick = uniqueToken;

function uniqueToken()
{
    let token = Math.floor(Math.random()*999999);
    token.innerHTML ="Unique token: " + token;
     

}