const currentDateElement = document.getElementById('current-date');
const timeblocksContainer = document.querySelector('.timeblocks-container');

const businessHours = [
    { time: '12 AM', hour: 0 },
    { time: '1 AM', hour: 1 },
    { time: '2 AM', hour: 2 },
    { time: '3 AM', hour: 3 },
    { time: '4 AM', hour: 4 },
    { time: '5 AM', hour: 5 },
    { time: '6 AM', hour: 6 },
    { time: '7 AM', hour: 7 },
    { time: '8 AM', hour: 8 },
    { time: '9 AM', hour: 9 },
    { time: '10 AM', hour: 10 },
    { time: '11 AM', hour: 11 },
    { time: '12 PM', hour: 12 },
    { time: '1 PM', hour: 13 },
    { time: '2 PM', hour: 14 },
    { time: '3 PM', hour: 15 },
    { time: '4 PM', hour: 16 },
    { time: '5 PM', hour: 17 },
    { time: '6 PM', hour: 18 },
    { time: '7 PM', hour: 19 },
    { time: '8 PM', hour: 20 },
    { time: '9 PM', hour: 21 },
    { time: '10 PM', hour: 22 },
    { time: '11 PM', hour: 23 },
  ];
  
function displayCurrentDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  currentDateElement.innerText = formattedDate;
}

function createTimeblock(hourObj) {
    const timeblock = document.createElement('div');
    timeblock.classList.add('timeblock');
  
    const timeEl = document.createElement('div');
    timeEl.classList.add('time');
    timeEl.textContent = hourObj.time;
    timeblock.appendChild(timeEl);
  
    const eventEl = document.createElement('textarea');
    eventEl.classList.add('event');
    eventEl.dataset.hour = hourObj.hour;
    eventEl.value = localStorage.getItem(hourObj.hour) || '';
    timeblock.appendChild(eventEl);
  
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
      localStorage.setItem(hourObj.hour, eventEl.value);
    });
    timeblock.appendChild(saveBtn);
  
    const currentHour = new Date().getHours();
    if (hourObj.hour < currentHour) {
      eventEl.classList.add('past');
    } else if (hourObj.hour === currentHour) {
      eventEl.classList.add('present');
    } else {
      eventEl.classList.add('future');
    }
  
    return timeblock;
  }
  
  function createTimeblocks() {
    businessHours.forEach((hourObj) => {
      const timeblock = createTimeblock(hourObj);
      timeblocksContainer.appendChild(timeblock);
    });
  }
  

  