//write your code here
function replaceWithYerr(arr, startIndex = 0, deleteCount = arr.length) {
    let result = [...arr]
    deleteCount = deleteCount + startIndex;
    result = result.fill("yerr", startIndex, deleteCount);
    return result;
}


const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
console.log(replaceWithYerr(months, 2, 4));
console.log(months)
