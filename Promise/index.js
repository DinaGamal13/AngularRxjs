const { Observable } = require('rxjs');
const promise = new Promise((res, rej) => {
    res()
}).then((data) => {
    console.log("Promise then:", data);
});
const observable = new Observable(callback).subscribe();
function callback() {
    console.log("angular");
}
console.log(promise);
console.log(observable);

// const { Observable } = require('rxjs');

// // Promise
// const promise = new Promise((resolve, reject) => {
//   console.log("Promise is running...");
//   resolve("Promise resolved!");
// }).then((data) => {
//   console.log("Promise then:", data);
// });

// // Observable
// const observable = new Observable((subscriber) => {
//   console.log("Observable is running...");
//   subscriber.next("Observable emitted!");
//   subscriber.complete();
// });

// observable.subscribe({
//   next: (value) => console.log("Observable next:", value),
//   complete: () => console.log("Observable complete")
// });
