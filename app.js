// declarations
let myBtn = document.getElementById("myBtn")
let form = document.getElementById("form")
// add event listener 
form.addEventListener("submit" , (x)=>{
    x.preventDefault()
    let nameInp = document.getElementById("nameInp").value.trim()
    let emailInp = document.getElementById("emailInp").value.trim()
    let msgInp = document.getElementById("msgInp").value.trim()
    let errorMsg = document.getElementById("errorMsg")
    errorMsg.innerHTML = ""
    errorMsg.style.color = "rgb(239, 68, 68)";
    if(nameInp === ""){
        errorMsg.innerHTML = "Please enter your name !"
        return
    }
    if(emailInp === ""){
        errorMsg.innerHTML = "Please enter your e-mail !"
        return
    }
    if(msgInp === ""){
        errorMsg.innerHTML = "Please enter your message !"
        return
    }
    errorMsg.style.color = "#10b981";
    errorMsg.innerHTML = 'Thank you! Your message has been sent successfully <i class="fa-solid fa-paper-plane"></i>';

    // This sends the data to Netlify in the background without refreshing or breaking the page
    let myForm = x.target;
    let formData = new FormData(myForm);
    
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        console.log("Form successfully submitted to Netlify");
        form.reset();    
})
    .catch((error) => alert(error));
})