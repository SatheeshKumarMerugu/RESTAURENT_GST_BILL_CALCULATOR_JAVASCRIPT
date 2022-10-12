let result = document.querySelector("#result");
let gst = document.querySelector(".gst");
let grand = document.querySelector(".grand");
let s = document.querySelector(".starters");
let m = document.querySelector(".main");
let i = document.querySelector(".indian");
let c = document.querySelector(".chinese");
let d = document.querySelector(".desert");
let t = document.querySelector(".tip");
let tq= document.querySelector(".thank")

let submit = document.querySelector(".submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let dish_1 = parseInt(document.querySelector(".dish_1").value);
  let dish_2 = parseInt(document.querySelector(".dish_2").value);
  let dish_3 = parseInt(document.querySelector(".dish_3").value);
  let dish_4 = parseInt(document.querySelector(".dish_4").value);
  let dish_5 = parseInt(document.querySelector(".dish_5").value);


  s.innerHTML = "Starters:  "  + dish_1 + "Rs";
  m.innerHTML = "Main menu: "  + dish_2 + "Rs";
  i.innerHTML = "Indian food: "+ dish_3 + "Rs";
  c.innerHTML = "Chinese:  " + dish_4 + "Rs";
  d.innerHTML = "Deserts:  " + dish_5 + "Rs";

  let total = dish_1 + dish_2 + dish_3 + dish_4 + dish_5;
  result.innerHTML = "Sub Total: "+ total +"Rs";
  GST = total * 0.18;
  gst.innerHTML = "+ 18% GST: "+ GST+ "Rs";

  GRAND = GST + total;
  grand.innerHTML = "Grand Total: "+ GRAND+ "Rs";
  if (GRAND >= 18000) {
    t.innerHTML = "Your total bill exceeded 18000, So please add 500 as a tip:: " + (GRAND+500);
  }
  else{
    t.innerHTML = "Your total bill below 18000, So please add 1000 as a tip::" +(GRAND+1000);

  }
  tq.innerHTML="Thank You Visit Again"
});
