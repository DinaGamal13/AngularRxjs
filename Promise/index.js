const { Observable } = require('rxjs');
const promise=new Promise(callback);
const observable=new Observable(callback).subscribe();
function callback(){
    console.log("angular");
    
}
console.log(promise);
console.log(observable);