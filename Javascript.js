document.getElementById('dataForm') .addEventListener('submit', function(e) {
const firstName = document.getElementById('first_name').value;
const secondName = document.getElementById('second_name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone_number').value;
const eircode = document.getElementById('ericode').value;


const nameRegex = /^[a-zA-Z0-9]{1,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[s@]+$/;
const phoneRegex = /^\{10}$/;
const eircodeRegex = /^[0-9][a-zA-Z0-9]{5}$/;



if (!nameRegex.test(firstName)) {
altert("First name must be alphanumeric and max 20 characters.");
e.preventDefault();

} else if (!nameRegex.test(secondName)) {
altert("Second Name must be alphanumeric and max 20 characters.");
e.preventDefault();

} else if (!emailRegex.test(email)) {
altert("Invalid email format.");
e.preventDefault();

} else if (!phoneRegex.test(phone)) {
altert("Phone number must be exactly 10 digits.");
e.preventDefault();

} else if (!eircodeRegex.test(eircode)) {
altert("Eircode must with a number, be alphanumeric, and exactly 6 characters.");
e.preventDefault();
}
});    
