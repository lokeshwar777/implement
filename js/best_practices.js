// best practices
/**
 * composition over inheritance
 * use object.property || defaultValue instead of switch (case) or a Map
 * optional chaining - ?.
 * null coalescing operator - ??
 */

// tricky things
/**
 * debounce - final state, end of wait time
 * throttle - intermediate state, intervals
 *
 */

// caveats
/**
 * do not use forEach + async/await (not serialised) -> instead use for(;;) / for..of / promise.allSettled + map / reduce + async/await + promise.resolve
 * innerHTML is slow(performance),XSS(security), -> so use documentFragment, sanitizeInput
 */

const myArray = [1, 2, 3, 4];

console.log(myArray?.[0]?.id ? true : false); // use this instead of
console.log(myArray && myArray.length ? true : false);

console.log(myArray?.[0]?.id ?? "No id property");

console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
