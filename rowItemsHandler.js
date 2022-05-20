const rowWrapperInit = document.getElementById("rowWrapper");

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");

if (window.screen.width > 690) {
  const elToHandle1 = row2.children.item(0);
  const elToHandle2 = row3.children.item(0);
  const elToHandle3 = row3.children.item(1);

  row1.appendChild(elToHandle1);
  row2.appendChild(elToHandle2);
  row2.appendChild(elToHandle3);

  row3.remove();
}