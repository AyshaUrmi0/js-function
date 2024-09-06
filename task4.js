


function count_zero(str){
    let numOfZero=0;
    for (const element of str) {
        if(element==="0")
        {
            numOfZero++;
        }
        else false;
    }
    return numOfZero;

}


const str="1000101101110";
const count=count_zero(str);
console.log(count);