//write your code here
function replaceWithYerr(arr, startIndex = 0, deleteCount = arr.length) {
    let result = arr.fill("yerr", startIndex, deleteCount+1);
    return result;
}

console.log(replaceWithYerr(['Jan', 'February', 'March', 'April', 'May', 'June']));