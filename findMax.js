//find maximum number of given array
function findMax(arr){
        let max=-Infinity;
        console.log(max)
        for(let num of arr){
            if (num>max)
            {
                max=num;
            }
        }  
        return max;
}

//second way to
let arr=[1,2,38,4,5,6,9]
let result=findMax(arr)
console.log(result)

let arr2=[1,3,223,45,5,5,6]
console.log(Math.max(...arr2))

//third way

let arr3=[1,2,35,5,7,8]
arr3.sort((a,b)=>b-a)
console.log(arr3[0])

// fourth way

let arr4=[1,2,25,6,64,3]
arr4.sort((a,b)=>a-b)
console.log(arr4[arr4.length-1])

// fifthway to 

let arr5=[2,3,456,34,1232]
let max2=-Infinity
arr5.forEach(num=>{
    if(num>max2)
        max2=num;
})
console.log(max2)

// recursive approach
let arr6=[2,78,565,4545]
function recursiveMax(arr6){
    if (arr6.length==1){
        return arr6[0];
    }
    console.log(arr6.slice(1))
    return Math.max(arr6[0],recursiveMax(arr6.slice(1)))
}
let res1=recursiveMax(arr6);
console.log(res1)