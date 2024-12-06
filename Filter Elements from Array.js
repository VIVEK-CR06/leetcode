var filter = function(arr, fn) {
    const filtterarray=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filtterarray.push(arr[i]);
        }
    }
    return filtterarray;
};