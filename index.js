const text = document.getElementById("text");
const send = document.getElementById("send");
const warn = document.getElementById("warn");
const message = document.getElementById("message");

send.addEventListener("click", function(){
    let textValue = "";
    if(text.value == "") {
        setTimeout(function(){
             message.textContent += "";
             warn.style.display = "block";
        }, 2000)()
    }else {
         textValue = text.value;
         message.textContent = textValue;
        warn.style.display = "none";
    }
   
});