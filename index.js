//write your code here
function replaceWithYerr(arr, startIndex = 0, deleteCount = arr.length) {
    let result = [...arr]
    result = result.fill("yerr", startIndex, deleteCount+1);
    return result;
}


const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
console.log(replaceWithYerr(months));
console.log(months)
