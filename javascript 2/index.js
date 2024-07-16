//1.array creation and initialization
let arr=[2,3,4,5,6,7,8];
function array(){
    for(let i=0;i<arr.length;i++)
    document.write(arr[i]+" ");
}
array(arr);



//2.array (push,pop)
let arr1=["apple","mango","orange"];
arr1.push("banana");
console.log(arr1);
let arr2=["apple","mango","orange"];
arr2.pop("apple");
console.log(arr2);



//3.array searching
let arr3=["car","bus","truck","car"];
console.log(arr3.indexOf("truck"));
console.log(arr3.lastIndexOf("car"));



//4.array sort and reverse
let arr4=[3,4,5,2,9,7];
console.log("sort of element:"+arr4.sort());
console.log("reverse of element:"+arr4.reverse());


//5.check the element in array 

let arr5=[3,4,5,2,9,7];
let arr6=[2,3,4,5,6,7,8];
console.log("merge array :"+arr5+","+arr6);









