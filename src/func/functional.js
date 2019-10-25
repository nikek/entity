// unary helps us to only pass one argument to functions that cant take several
// in cases where we pass the function as a callback where it will be called
// with more than one argument.
export const unary = fn => arg => fn(arg);
