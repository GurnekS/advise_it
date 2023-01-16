let btn = document.getElementById("submit");
let out = document.getElementById('token');
btn.onclick = uniqueToken;

function uniqueToken() 
{
    var result = '';
    var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    out.innerHTML = result;
}