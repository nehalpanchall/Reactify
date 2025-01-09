let Card = ({ intro, cardName, cardInfo, tags } = props) => {
  //   console.log(props);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-7 border-2 border-black">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{cardName || "No Title"}</div>
          <p className="text-gray-700 text-base">{cardInfo} </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tags[0]}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tags[1]}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tags[2]}
          </span>

          <div className="mt-2 text-center">
            By {intro.fname} {intro.lname}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
