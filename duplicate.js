// console.log('Hello World!');
//how to remove duplicates from an array sort
let myArray=[1,2,3,3,4,4,5,6,6,7,8,7]
//6 type of method
let mySortedArray=myArray.sort()
// console.log(mySortedArray,'mySortedArray')

//1. for with indexOf method
let myFilterArray=[]
for(let i=0;i<mySortedArray.length;i++){
    if(myFilterArray.indexOf(mySortedArray[i])===-1){
        myFilterArray.push(mySortedArray[i]);
    }

}
// console.log(myFilterArray,'myFilterArray')
// console.log(mySortedArray,'mySortedArray')

//2.forEach includes method
let myFilterArray2=[]
mySortedArray.forEach(function(item){
    if(!myFilterArray2.includes(item)){
      myFilterArray2.push(item);
    }
})
// console.log('myFilterArray2',myFilterArray2);
// console.log('mySortedArray',mySortedArray);

//3.filter  method : it creates a new array of elements that pass the condition we provided it will inclued those element for which true is return

let myFilterArray3=mySortedArray.filter((item,index)=>{
    return mySortedArray.indexOf(item)===index;
})
// console.log('myFilterArray3',myFilterArray3);

//4.es6 new Set(); it stote only unique elements in an array otherwise  it will remove
              
let myFilterArray4 = new Set(mySortedArray);
// console.log('myFilterArray4',myFilterArray4);  // but it return obj

let myFilterArraya_4 = [...new Set(mySortedArray)];
// console.log('myFilterArray_4',myFilterArray_4);   // but it return array


//5 Reduce method acc:accumulator curr: current
let myFilterArray5 =(mySortedArray)=>{
    let uniqueArray=mySortedArray.reduce(function(acc,curr){
        if(!acc.includes(curr)){
            acc.push(curr);
        }
        return acc;

    },[])
    return uniqueArray;
   
}
console.log('myFilterArray5',myFilterArray5(mySortedArray));

//6.Prototype
Array.prototype.unique = function(){
    let unique=[];
    for(let i=0;i<this.length;i++){
        if(unique.indexOf(this[i])===-1){
            unique.push(this[i]);
        }

    }
    return unique;
}

console.log('protype used',mySortedArray.unique())
