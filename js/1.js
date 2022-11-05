"use strict";

console.log(this);

const aaa = () => {
  let a = 1;
  let b = 2;
  console.log(this);
  return a + b;
};

aaa();

const bbb = {
  ccc: "ddd",
  eee: () => {
    console.log(this);
  },
};

bbb.eee();

const ggg = {
  hhh: "iii",
  jjj: ["lll", "mmm"],
};

const ooo = Object.assign({}, ggg);
ooo.hhh = "zzz";
const qqq = Object.assign({}, ooo.jjj);
//qqq.push("ppp");

console.log("ggg :", ggg);
console.log("ooo :", ooo);
console.log("qqq :", qqq);
