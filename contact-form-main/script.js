// values
let inputFirstName = "";
let inputLastName = "";
let inputEmailAddress = "";
let inputMessage = "";
let queryType = "";
let consent = false;

// functions 
function inputFN() {
    const valorInputFN = document.getElementById('inputFirstName').value
    inputFirstName = valorInputFN
    console.log(valorInputFN)   
}
function inputLN() {
    const valorInputLN = document.getElementById('inputLastName').value
    inputLastName = valorInputLN
    console.log(valorInputLN)   
}
function inputEA() {
    const valorInputEA = document.getElementById('inputEmailAddress').value 
    inputEmailAddress = valorInputEA
    console.log(valorInputEA)
}
function btnGE() {
    queryType = "General Enquiry";
    console.log("Query Type: ", queryType);
}
function btnSR() {
    queryType = "Support Request";
    console.log("Query Type: ", queryType);
}
function inputM() {
    const valorInputMessage = document.getElementById('inputMessage').value
    inputMessage = valorInputMessage
    console.log(valorInputMessage)
}
function btnAccept() {
    const buttonAccept = document.getElementById('buttonAccept')
    consent = true;
    console.log(consent)
}
function btnSubmit(event) {

    inputFirstName = document.getElementById('inputFirstName').value;
    inputLastName = document.getElementById('inputLastName').value;
    inputEmailAddress = document.getElementById('inputEmailAddress').value;
    inputMessage = document.getElementById('inputMessage').value;

    if (!inputFirstName || !inputLastName || !inputEmailAddress || !inputMessage) {
        alert('Fill the missing options and consent')
        return;
    }

    const formData = {
        firstName: inputFirstName,
        lastName: inputLastName,
        Email: inputEmailAddress,
        queryType: queryType || "Not Specified",
        message: inputMessage,

    }

    console.log("Form Datas:", formData)

    alert("Thanks, "+ inputFirstName + " your datas is safe sucessfully" )
}
