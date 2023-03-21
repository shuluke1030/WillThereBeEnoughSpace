function enough(cap, on, wait) {
let result = cap - on;
if(result < wait){
    return wait - result;
}
return 0;
}
console.log(enough(100, 60, 50))