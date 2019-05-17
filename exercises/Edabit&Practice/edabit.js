function missing(arr){
    arr.sort();
    for(let i = 0; i<arr.length; i++){
		if(arr[i]){
			console.log(arr[i]++);
		}
	}
}

newArry = [3,2,8,4,5,6,9];
missing(newArry);