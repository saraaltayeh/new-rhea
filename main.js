window.onload = function() {
    document.querySelector("h1").style.color = "blue"
    console.log("Aliquam sodales %cvitae ex", "color: red; font-size: 40px");
};
console.log("%cturpis %cet %carcu.", "color: red; font-size: 40px","color: green; font-size: 40px; font-weight: bold", "color: white; font-size: 40px; background-color: blue")


console.group("group 1");
console.log(typeof "sara");
console.log("altayeh");
console.group("child group");
console.log(66);
console.log(67);
console.group("grand child group");
console.log(9);
console.log(6);
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("group 2");
console.log(88);
console.log(77);
onsole.groupEnd();
/*
console.table(["Aliquam", "sodales", "vitae"]);
*/


