const onChange = () => {
  const handleChange = event => {
    console.log(event.target.value);
  };

  const handleClick = () => {
    let textField = document.querySelector('#textField');
    textField.value = '';
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
