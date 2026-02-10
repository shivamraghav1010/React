

function helper(no)
{
    let arr = new Array(no);

    for(let i=0;i<no;i++)
    {
        arr[i] = Math.floor(Math.random()*10)
    }
    return arr

}

function Addition(arr)
{
    let sum = arr.reduce((acc,digit)=> acc + digit,0)
    console.log(sum)
    return sum;
}

export {helper,Addition}