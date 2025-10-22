const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

const form = document.getElementById('bookingForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!name || !email || !type || !date || !time) {
    alert("Please fill out all fields!");
    return;
  }

  const booking = { name, email, type, date, time };

  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  localStorage.setItem('latestBooking', JSON.stringify(booking));

  window.location.href = "success.html";
});
