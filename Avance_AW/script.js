

const monthYear = document.getElementById("month-year");

const calendarDays = document.getElementById("calendar-days");

const selectedDate = document.getElementById("selected-date");

const prevMonth = document.getElementById("prev-month");

const nextMonth = document.getElementById("next-month");

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

const daysNames = [
  "Dom",
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sáb"
];

let currentDate = new Date();

function renderCalendar(){

  calendarDays.innerHTML = "";

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();

  monthYear.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();

  const lastDate = new Date(year, month + 1, 0).getDate();

  for(let i = 0; i < firstDay; i++){

    const empty = document.createElement("span");

    calendarDays.appendChild(empty);
  }

  for(let day = 1; day <= lastDate; day++){

    const dayElement = document.createElement("span");

    dayElement.textContent = day;

    const today = new Date();

    if(
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ){

      dayElement.classList.add("active-day");

      selectedDate.textContent =
      `${daysNames[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}`;
    }

    dayElement.addEventListener("click", () => {

      document.querySelectorAll(".numbers span").forEach(span => {
        span.classList.remove("active-day");
      });

      dayElement.classList.add("active-day");

      const clickedDate = new Date(year, month, day);

      selectedDate.textContent =
      `${daysNames[clickedDate.getDay()]}, ${day} ${months[month]}`;
    });

    calendarDays.appendChild(dayElement);
  }
}

prevMonth.addEventListener("click", () => {

  currentDate.setMonth(currentDate.getMonth() - 1);

  renderCalendar();
});

nextMonth.addEventListener("click", () => {

  currentDate.setMonth(currentDate.getMonth() + 1);

  renderCalendar();
});

renderCalendar();

const settingsBtn = document.getElementById("settings-btn");

const menuCard = document.getElementById("menu-card");

settingsBtn.addEventListener("click", (e) => {

  e.stopPropagation();

  menuCard.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {

  if(
    !settingsBtn.contains(e.target) &&
    !menuCard.contains(e.target)
  ){

    menuCard.classList.add("hidden");
  }
});



const employeeModal = document.getElementById("employee-modal");

const closeModal = document.getElementById("close-modal");

const editButtons = document.querySelectorAll(".edit-btn");

editButtons.forEach(button => {

  button.addEventListener("click", () => {

    employeeModal.classList.remove("hidden");
  });

});

closeModal.addEventListener("click", () => {

  employeeModal.classList.add("hidden");
});

employeeModal.addEventListener("click", (e) => {

  if(e.target === employeeModal){

    employeeModal.classList.add("hidden");
  }
});


const searchInput = document.getElementById("search-input");

const employeeList = document.getElementById("employee-list");

const employees = employeeList.querySelectorAll(".employee");

searchInput.addEventListener("input", () => {

  const searchText = searchInput.value.toLowerCase();

  employees.forEach(employee => {

    const employeeName =
    employee.innerText.toLowerCase();

    if(employeeName.includes(searchText)){

      employee.style.display = "flex";

    }
    else{

      employee.style.display = "none";

    }

  });

});