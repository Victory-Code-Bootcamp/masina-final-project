document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    
    document.getElementById('message').textContent = `Thank you, ${name}, for your generous donation of $${amount}!`;
    