

function make_avg(arr,size){

   let sum=0;

    for (const element of arr) {
        sum= sum+element;

        
    }
    return sum/size;

}


const arr=[2,4,5,6,7,8];
const size=arr.length;

const avg=make_avg(arr,size);

console.log(avg)
