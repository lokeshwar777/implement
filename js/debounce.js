// debounce - limits frequent calls by delaying executing until inactivity

let counter = 0;
const handleClick = (e) => {
    console.log(e, `clicked ${++counter} times`);
};

// without debounce

const attachEventListeners = () => {
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", (e) => {
        checkoutButton.disabled = true;
        setTimeout(() => {
            checkoutButton.disabled = false;
        }, 5000);
        handleClick(e);
    });
};

/*

// version 0.1 (X - timer is global, e is undefined, FIX - return fn from debounce with e as argument)

let timer;
const debounce = (fn, delay) => {
    // console.log(`debounce called with timer : ${timer}, fn : ${fn}`);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        fn();
    }, delay);
};

const attachEventListeners = () => {
    document
        .getElementById("checkout")
        ?.addEventListener("click", (e) => debounce(handleClick, 1000));
};

// version 0.2 (X - multiple arguments, FIX - use ...args)

const debounce = (fn, delay) => {
    let timer;
    return (e) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(e);
        }, delay);
    };
};

const attachEventListeners = () => {
    document
        .getElementById("checkout")
        ?.addEventListener("click", debounce(handleClick, 1000));
};

// version 1.0

const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const debouncedHandleClick = debounce(handleClick, 1000);

const attachEventListeners = () => {
    document
        .getElementById("checkout")
        ?.addEventListener("click", debouncedHandleClick);
};
*/

const initApp = () => {
    attachEventListeners();
};

document.addEventListener("DOMContentLoaded", initApp);
