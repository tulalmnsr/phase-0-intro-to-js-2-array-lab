// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
const name="cat"
function destructivelyAppendCat(name){
    cats.push(name);}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const copycats=cats.slice();
    copycats.push(name);
    return copycats}
function prependCat(name){
    const copycats=cats.slice();
    copycats.unshift(name);
    return copycats}
function   removeLastCat(){
    const copycats=cats.slice();
    copycats.pop();
    return copycats
}
function removeFirstCat(){
    const copycats=cats.slice();
    copycats.shift();
    return copycats
}
