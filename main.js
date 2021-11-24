let target = document.getElementById("target");
let boxes = document.querySelectorAll(".box");
let sliderShow = document.createElement("div");
sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
let main = document.createElement("div");
main.classList.add("main", "full-width");
let extra = document.createElement("div");
extra.classList.add("extra","full-width");
sliderShow.append(main);
sliderShow.append(extra);
main.append(boxes[0]);
target.append(sliderShow);

let buttons = document.createElement("div");
buttons.classList.add("offset-5","mt-2");
const leftButton = document.createElement("button");
leftButton.classList.add("btn","btn-light");
leftButton.innerHTML = "<";
const rightButton = document.createElement("button");
rightButton.classList.add("btn","btn-light");
rightButton.innerHTML = ">";

buttons.append(leftButton);
buttons.append(rightButton);
target.append(buttons);
main.setAttribute("data-index","0");
function slideJump(steps,animationType){
  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = boxes[index];
  let numberOfBoxes = boxes.length;
  console.log(index);
  console.log(currentElement);
  index += steps;
  if(index < 0){
    index = numberOfBoxes-1;
  }
  if(index >= numberOfBoxes){
    index = 0;
  }

  let nextElement = boxes[index];
  console.log(nextElement);
  main.setAttribute("data-index",index.toString());
  animateMain(currentElement,nextElement,animationType);
}

function animateMain(currentElement,nextElement,animationType){
  extra.innerHTML = "";
  extra.append(currentElement);
  main.innerHTML = "";
  main.append(nextElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");
  if(animationType === "right"){
    sliderShow.innerHTML = "";
    sliderShow.append(extra);
    sliderShow.append(main);
  }else if(animationType === "left"){
    sliderShow.innerHTML = "";
    sliderShow.append(main);
    sliderShow.append(extra);
  }
}

leftButton.addEventListener("click",function(){
  slideJump(-1,"left");
});
rightButton.addEventListener("click",function(){
  slideJump(1,"right");
});
