// Discover Page Script 
// Calendar 
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const previewBtn = document.getElementById('previewBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth +1 , 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month:'long', year:'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = "";

    for(let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class= "date-inactive"> ${prevDate.getDate()}</div>`;
    }

    for(let i = 1; i <= totalDays; i ++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class = "date ${activeClass}">${i}</div>`;
    }

    for(let i = 1; i <= 7 - lastDayIndex; i ++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class + "date-inactive"> ${nextDate.getDate()}</div`;
    }

    datesElement.innerHTML = datesHTML;
}

previewBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});


//localStorage.setItem(key, value);
/*
function trackFormSubmissions() {
    let Date = localStorage.getItem('Date');
    if (!Date) {
      Date = 0;
    } else {
      Date = parseInt(Date, 10);
    }
    reviewCounter += 1;
    localStorage.setItem('Date', Date);
    return Date;
}

// Function to display the thank you message
function displayThankYouMessage(dayCounter, Date) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerHTML = `
    Welcome! Let us know if you have any questions.
    `;
}
*/