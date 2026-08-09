const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Start = document.getElementById("start");
const Stop = document.getElementById("stop");

let interval;

Start.addEventListener("click", () => {
  const changeColor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interval) {
    //check is imp cause it will not run more than once bcuz of null
    interval = setInterval(changeColor, 1000);
  }
});

Stop.addEventListener("click", () => {
  clearInterval(interval); // setInterval method ka reference dena hai
  interval = null; // frees up the space
});
