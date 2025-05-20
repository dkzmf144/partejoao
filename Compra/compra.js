const form = document.getElementById('purchaseForm');

// Helper function to show and clear error messages
function setError(id, message) {
  const el = document.getElementById(id);
  if (message) {
    el.textContent = message;
  } else {
    el.textContent = '';
  }
}

function validateInput() {
  let valid = true;

  const fullname = form.fullname.value.trim();
  if (fullname.length < 3) {
    setError('errorFullname', 'Por favor, informe seu nome completo.');
    valid = false;
  } else {
    setError('errorFullname', '');
  }

  const email = form.email.value.trim();
  if (!form.email.checkValidity()) {
    setError('errorEmail', 'Por favor, insira um email válido.');
    valid = false;
  } else {
    setError('errorEmail', '');
  }

  const phone = form.phone.value.trim();
  const phonePattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!phonePattern.test(phone)) {
    setError('errorPhone', 'Por favor, insira um telefone válido (ex: (00) 00000-0000).');
    valid = false;
  } else {
    setError('errorPhone', '');
  }

  const cpf = form.cpf.value.trim();
  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfPattern.test(cpf)) {
    setError('errorCPF', 'Por favor, insira um CPF válido no formato 000.000.000-00.');
    valid = false;
  } else {
    setError('errorCPF', '');
  }

  const cep = form.cep.value.trim();
  const cepPattern = /^\d{5}-\d{3}$/;
  if (!cepPattern.test(cep)) {
    setError('errorCEP', 'Por favor, insira um CEP válido no formato 00000-000.');
    valid = false;
  } else {
    setError('errorCEP', '');
  }

  const address = form.address.value.trim();
  if (address.length < 5) {
    setError('errorAddress', 'Por favor, informe seu endereço completo.');
    valid = false;
  } else {
    setError('errorAddress', '');
  }

  const payment = form.payment.value;
  if (!payment) {
    setError('errorPayment', 'Por favor, selecione uma forma de pagamento.');
    valid = false;
  } else {
    setError('errorPayment', '');
  }

  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateInput()) {
    alert(
      'Compra realizada com sucesso!\n\n' +
      'Nome: ' + form.fullname.value.trim() + '\n' +
      'Email: ' + form.email.value.trim() + '\n' +
      'Telefone: ' + form.phone.value.trim() + '\n' +
      'CPF: ' + form.cpf.value.trim() + '\n' +
      'CEP: ' + form.cep.value.trim() + '\n' +
      'Endereço: ' + form.address.value.trim() + '\n' +
      'Forma de pagamento: ' + form.payment.value + '\n\n' +
      'Obrigado pela sua compra!'
    );
    form.reset();
  }
});
