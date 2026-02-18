const body = document.getElementById("checklist-body");
const activities = 12;
const days = 30;

function key(day, activity) {
  return `ramadan-${day}-${activity}`;
}

for (let day = 1; day <= days; day++) {
  const row = document.createElement("tr");

  const dayCell = document.createElement("td");
  dayCell.textContent = `${day} Ramadan`;
  row.appendChild(dayCell);

  for (let a = 1; a <= activities; a++) {
    const cell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const storageKey = key(day, a);
    checkbox.checked = localStorage.getItem(storageKey) === "true";

    checkbox.addEventListener("change", () => {
      localStorage.setItem(storageKey, checkbox.checked);
    });

    cell.appendChild(checkbox);
    row.appendChild(cell);
  }

  body.appendChild(row);
}

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
