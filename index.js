const second = document.getElementById("second");

const x = second.textContent.split("");

const randomfunc = () => {
  let randomnum = Math.floor(Math.random() * 2);
  if (randomnum === 0) {
    return "hidden";
  } else {
    return "visible";
  }
};

second.innerHTML = x
  .map((letter) => {
    return `<span style="visibility: ${randomfunc()}">${letter}</span>`;
  })
  .join("");
