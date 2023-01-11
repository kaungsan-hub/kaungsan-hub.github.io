function sendMessage(){
    var params = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value
    };

const serviceID = "service_tjfcrpj";
const templateID = "template_ng93b7h";

emailjs
    .send(serviceID, templateID, params)
    .then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message Send Successful");
    })
    .catch((err)=>console.log(err));
}