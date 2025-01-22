import React, { useState } from 'react';

const AddRow = () => {
  let [items, setItems] = useState(['Apple', 'Banana']);

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

  let [selectItem, setSelectItem] = useState([]);

  let [deselectItem, setDeselectItem] = useState([]);

  const changeItemColor = (itemIndex, flag) => {
    if (flag) {
      let selectArr = [...selectItem, itemIndex];
      setSelectItem(selectArr);
    } else {
      let deselectArr = [...deselectItem, itemIndex];
      setDeselectItem(deselectArr);
    }
  };

  let displayBraces;

  if (selectItem.length > 0) {
    console.log('Not empty');
    displayBraces = `[${selectItem}]`;
  } else {
    console.log('empty');
  }

  console.log(selectItem);

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
        {items.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <li
                className={`${selectItem.includes(index) && 'text-red-600'} ${
                  deselectItem.includes(index) && 'text-black'
                } `}
              >
                <b>{i}</b>
              </li>
              <button
                onClick={() => changeItemColor(index, true)}
                style={{
                  border: '1px solid black',
                  padding: '2px 10px',
                  margin: '10px'
                }}
              >
                Select
              </button>

              <button
                style={{
                  border: '1px solid black',
                  padding: '2px 10px',
                  margin: '10px'
                }}
                onClick={() => changeItemColor(index, false)}
              >
                Deselect
              </button>
            </React.Fragment>
          );
        })}
      </ul>

      <h1>Selected Items: {displayBraces}</h1>
    </>
  );
};

export default AddRow;
