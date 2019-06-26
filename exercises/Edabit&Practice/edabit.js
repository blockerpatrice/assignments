const arr = [10, 11, 12, 9, 10];

progressDays = (runs) => {
	let ansr = runs.filter((currentValue, index, array) => currentValue < array[index+1]).length;
	console.log(ansr)
}

//progressDays(arr);