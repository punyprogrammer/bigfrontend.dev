// Define a type alias 'Func' for a function that takes any argument and returns any value
type Func = (arg: any) => any

// 'pipe' takes an array of functions and returns a single function that composes them left-to-right
function pipe(funcs: Array<Func>): Func {
	// Return a new function that takes any number of arguments (though only the first is used)
	return function(...args){
		// Use reduce to apply each function in the 'funcs' array to the result of the previous one,
		// starting with the first argument passed to the returned function
		return funcs.reduce((accum, fn) => fn(accum), ...args);
	}
}
