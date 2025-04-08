// TODO : research more about use strict
// TODO : have fun - try out all possible conversions and comparisions

// TODO : explore string methods and master them
/**
 * new String - is an object
 * use backtick(`) - string interpolation
 * __proto__ -
 * charAt() -
 * indexOf() -
 * length -
 * substring(start,end) - ignores -ve values
 * slice(start,end) - supports -ve values
 * trim - whitespace and line terminator for both left and right
 * replace() -
 * includes() -
 * split() -
 */

// TODO : explore number methods
/**
 * toString() - number to string
 * toFixed(precision) - decimal
 * toPrecision(digits) - returns string
 * toLocaleString() - default is international
 *
 */

// TODO : explore math methods
/**
 * abs() -
 * round() -
 * floor() -
 * ceil() -
 * sqrt() -
 * random() - 0 to 1
 */

// TODO : explore date and time methods
/**
 * Temporal
 * new Date(yyyy,mm,dd,hh,mimi,) or ("YYYY-MM-DD") or ("DD-MM-YYYY") - mm starts from 0
 * typeof - object
 * toString() -
 * toDateString() -
 * toLocaleString('default',{}) -
 * now() - timestamp in milliseconds(ms)
 * getTime() - timestamp in milliseconds(ms)
 * getDay() -
 * getMonth()+1 -
 */

// TODO : explore array methods
/**
 * copies - shallow copy - same ref point
 * new Array(1,2,3,...)
 * push() - push_back()
 * pop() - pop_back()
 * unshift() - push_front()
 * shift() - pop_front()
 * includes() - true or false
 * indexOf() - first occurence else -1
 * delete arr[pos] -
 * does not give "index out of bounds"
 * splice() - used for deleting and replacing at any pos
 * slice(start,end) - returns new array from start to end pos
 * reverse() -
 * join() - default is ','
 * split() -
 * concat() - arr1+arr2
 * ... - rest or spread operator - [...arr1,...arr2]
 * flat(level or depth) - can be Infinity
 * isArray() -
 * from() - ignores if not mentioned properly such as keys or values for an object
 * %DebugPrint
 *
 */

// TODO : explore object methods
/**
 * singleton - only one instance, when created using constructor (create())
 * object literals - {}
 * create() - instantiates or copies
 * keys() -
 * values() -
 * for in -
 * delete -
 * hasOwnProperty() -
 * freeze() - can't be modified
 * assign({},obj1,obj2,...) - good practice
 * {...obj1,...obj2} - spread operator
 * keys(obj) - returns an array
 * entries(obj) - returns an array of key value arrays
 * prototype
 * getOwnPropertyDescriptor(module,"property") - writeable,enumerable,configurable
 * defineProperty()
 */

// TODO : explore JSON methods
/**
 * stringify() - obj to str
 * parse() - str to obj
 *
 */

// TODO : explore DOM methods
/**
 * HTMLCollection -
 * NodeList -
 * getElementById()
 * querySelector()
 * getElementsByClassName()
 * querySelectorAll()
 * getElementsByTagName()
 * createElement()
 * remove()
 * properties - style,textContent,innerHTML,parentElement,children,childNodes,hasChildNodes,lastChild,lastElementChild,firstChild,firstElementChild,nextSibling,nextElementSibling,previousSibling,previousElementSibling,
 */

// TODO : Higher Order Loops or Functions
/**
 * of - for(const iterator of object) - object can be array,string,object
 * map - new Map() - not iterable- order is maintained with unique values - for(const [key,val] of map) -
 * in - for(const key in object) - keys for array are indices
 * forEach - forEach(function(item){}) = forEach((item,index,arr)=>{}) = forEach(funcRef) - does not return anything
 * filter - filter(item => condition) or filter(item => {return condition}) - the same can also be achieved using forEach
 * map - map(item => returnVal) or map(item => {return returnVal}) - returns array - chaining
 * reduce - reduce((acc,curVal) => acc+curVal, initialVal) - log to understand the functionality
 *
 */

// TODO : explore event object and methods
/**
 * addEventListener(event,func,useCapture) - eventNames(keyboard, mouse, drag and drop - type, timestamp, preventDefault(), target, currentTarget, toElement, srcElement, clientX, clientX, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode(typing test)), stopPropogation() - 3rd parameter (true->capturing, bubbling->false)
 * attackEvent() -
 * events - click,readystatechange,mouseover,mouseout
 * removeEventListener() - only for named functions
 */

// TODO : understand asynchronous JS
/**
 * default javascript (standalone JS engine) is synchronous and single thread
 * blocking (synchronous) vs non-blocking code (asynchronous)
 * JS Engine
 * Web API / node API
 * Register callback
 * Task Queue
 * High Priority Queue or Promise Queue
 * Event Loop
 */

// TODO : explore timers
/**
 * setTimeout()
 * clearTimeout()
 * setInterval(func,time,params)
 * clearInterval()
 */

// TODO : explore API request methods
/**
 * XMLHttpRequest() - Ajax - UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE
 *
 */

// TODO : understand promise

// TODO : explore Fetch API

// TODO : explore web storage API
/**
 * sessionStorage - string
 * localStorage - string
 * setItem -
 * getItem -
 */

// TODO : explore node or global methods and properties
