/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let newArr = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let i = 0; i < adj.length; i++) {
      for (let i = 0; i < noun.length; i++) {
        newArr.push(`${pronoun[i]}${adj[i]}${noun[i]}.com`);
      }
    }
    //newArr.push(pronoun[i]);
  }
  console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    let total = newArr[i];
    console.log(total);

    let excusa = document.createElement("p");
    excusa.innerHTML = `${total}`;
    let container = document.getElementById("container");
    //console.log(container);
    container.append(excusa);
  }
};
