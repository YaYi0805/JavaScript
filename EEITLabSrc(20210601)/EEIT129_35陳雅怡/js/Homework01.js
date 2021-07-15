let th = document.getElementById("th");
for (let i = 2; i < 10; i++) {
  th.innerHTML += `<th>${i}</th>`;
}

let td = document.getElementById("td");
for (let i = 2; i < 10; i++) {
  let col = "";
  for (j = 1; j < 10; j++) {
    col += `${i}*${j}=${i * j}<br>`;
  }
  td.innerHTML += `<td>${col}</td>`;
}