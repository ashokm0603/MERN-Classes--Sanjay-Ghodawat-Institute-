let arr=[10,20,30];

console.log(arr);
//insert new element at last index
arr.push(50,60,90,true)
console.log(arr);

//remove last element 
arr.pop()
console.log(arr);

//insert new element at first index
arr.unshift(150)
console.log(arr);

//remove first element
arr.shift()
arr.shift()
console.log(arr);

//delete elements between based on index and count
arr.splice(1,2)
console.log(arr);

//delete and insert value to that position
arr.splice(1,2,"Javascript")
console.log(arr);

arr.splice(1,0,true,null)
console.log(arr);

console.log(arr.reverse());








