import { useState } from 'react';

const onChange = () => {
  let [items, setItems] = useState([]);

  function addItem() {
    let newItems = [...items, displayText];
    setItems(newItems);
    handleClear();
  }

  let stateArr = useState('');
  let displayText = stateArr[0];
  let setDisplayText = stateArr[1];

  const handleChange = event => {
    setDisplayText(event.target.value);
    return event.target.value;
  };

  const handleClear = () => {
    document.querySelector('#textField').value = '';
    setDisplayText('');
    document.querySelector('#textField').focus();
  };

  return (
    <>
      <h1>On change</h1>
      <input
        type="text"
        id="textField"
        placeholder="Enter text.."
        onChange={handleChange}
        autoFocus
      />

      <br />
      <div className="ml-8">Entered Input is: {displayText}</div>

      <button
        onClick={handleClear}
        style={{
          border: '1px solid black',
          padding: '10px 50px',
          margin: '30px'
        }}
      >
        Clear
      </button>

      <button
        onClick={addItem}
        style={{
          border: '1px solid black',
          padding: '10px 50px',
          margin: '30px'
        }}
      >
        Add
      </button>

      <ul className="ml-10">
        {items.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </>
  );
};

export default onChange;
