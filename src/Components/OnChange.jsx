import { useState } from 'react';

const onChange = () => {
  let stateArr = useState('Text here...');
  let displayText = stateArr[0];
  let setDisplayText = stateArr[1];

  const handleChange = event => {
    // console.log(event.target.value);

    setDisplayText(event.target.value);
  };

  const handleClick = () => {
    let textField = document.querySelector('#textField');
    textField.value = '';
    setDisplayText('');
  };

  return (
    <>
      <h1>On change</h1>
      <input
        type="text"
        id="textField"
        placeholder="Enter text.."
        onChange={handleChange}
      />

      <br />
      <div className="ml-8">{displayText}</div>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: 'gray',
          border: '1px solid black',
          padding: '10px 50px',
          margin: '30px'
        }}
      >
        Clear
      </button>
    </>
  );
};

export default onChange;
