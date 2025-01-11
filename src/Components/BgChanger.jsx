const BgChanger = ({ rootElement } = props) => {
  let abc = (event) => {
    let colorName = event.target.textContent;
    let body = rootElement.parentElement;
    body.style.backgroundColor = colorName;
  };

  return (
    <>
      <div className="m-4 bg-slate-300 rounded-md ">
        <button onClick={abc} className="m-3 bg-black text-white">
          Black
        </button>
        <button onClick={abc} className="m-3">
          White
        </button>
        <button onClick={abc} className="m-3 bg-red-600 text-white">
          Red
        </button>
        <button onClick={abc} className="m-3 bg-green-500 text-white">
          Green
        </button>
        <button onClick={abc} className="m-3 bg-yellow-400">
          Yellow
        </button>
        <button onClick={abc} className="m-3 bg-blue-600 text-white">
          Blue
        </button>
      </div>
    </>
  );
};

export default BgChanger;
