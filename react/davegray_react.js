/**
 * 1. App and JSX(JS+XML)
 * 2. Functional components
 * 3. applying CSS
 * 4. click events
 * 5. useState
 * 6. Lists and keys
 * 7. Prop Drilling
 */

// avoid divs
// legacy - class components
// modern - functional components
// class is reserved so we use className
// most JSX attributes are camelCase but some use hyphen(-)

/** node modules
 * styled components
 * react icons
 */

// onClick,onDoubleClick
// do not forget to use {} and callbacks

// const [state,setState] = useState(defaultValue)

// count does not increase by 2
const handleClick = () => {
    setCount(count + 1); // here count is x
    setCount(count + 1); // here also count is x
    // so count becomes x+1 but not "x+2"
};

// use React dev tools

// const [items,setItems] = useState([{},{}])
const handleCheck = (id) => {
    const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
};

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
};

// lists
{
    items.length ? (
        <ul>
            {items.map((item) => {
                <li
                    className="item"
                    key={item.id}
                    onChange={() => handleCheck(item.id)}
                    onClick={() => handleDelete(item.id)}
                >
                    {item.name}
                </li>;
            })}
        </ul>
    ) : (
        <p>list is empty</p>
    );
}

// props - props.keyName or {keyName}
// default props
componentName.defaultProps = {
    keyName: "defaultValue",
};
