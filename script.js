const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}


const saveThrottled = _.throttle(saveFormData, 1000); 


nameInput.addEventListener('change', saveThrottled);
emailInput.addEventListener('change', saveThrottled);


function restoreFormData() {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const data = JSON.parse(savedData);
    nameInput.value = data.name;
    emailInput.value = data.email;
  }
}

restoreFormData();
