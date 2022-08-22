export let showCount = 0;

export const counterFunction = (e) => {
  let stock = 5;
  let counter = +document.querySelector("#counterValue").innerHTML;
  if (e.target.value === "add") {
    if (counter < stock) {
      counter = counter + 1;
      showCount = counter;
      document.querySelector("#counterValue").innerHTML = counter;
    }
  } else {
    if (counter !== 0) {
      counter = counter - 1;
      showCount = counter;
      document.querySelector("#counterValue").innerHTML = counter;
    }
  }
};
