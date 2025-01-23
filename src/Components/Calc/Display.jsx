const Display = ({ passKey }) => {
  // console.log(passKey);

  return (
    <>
      <input type="string" value={passKey} readOnly></input>
    </>
  );
};

export default Display;
