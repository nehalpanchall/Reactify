let ArrowFun = ({ label }) => {
  let myName = ["React", "JS"];
  let obj = { fname: "Nehal", lname: "Panchal" };

  for (let i in obj) {
    console.log(obj[i]);
  }

  for (let j of myName) {
    console.log(j);
  }

  return (
    <>
      <p>
        {label} Function: Object: {obj.fname} | {obj.lname}
      </p>

      <p>
        {label} Function: Array: {myName[0]} | {myName[1]}
      </p>
    </>
  );
};

const Anonyms = function ({ label }) {
  return <p>This is {label} function</p>;
};

function Simple({ label }) {
  return <p>This is {label} function</p>;
}

// Default Export
export default ArrowFun;

// Named Export
export { Anonyms as A, Simple as S };
