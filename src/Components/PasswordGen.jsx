import { useCallback, useEffect, useRef, useState } from "react";

let PasswordGen = () => {
  let [length, setLength] = useState(6);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  // useRef hook using useCallback for optimization
  let passwordRef = useRef(null);

  let copyToClipBoard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useCallback hook: for optimization
  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str = str + "1234567890";

    if (charAllowed) str = str + "!@#$%^&*(){}";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      let char = str.charAt(index);
      pass += char; // BzTquA
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // useEffect hook: when page loads
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1>Password Generator</h1>

      <div>
        <input
          type="text"
          value={password}
          ref={passwordRef}
          placeholder="Password"
          readOnly
        />

        <button onClick={copyToClipBoard}>Copy</button>
      </div>

      <div className="py-7">
        <input
          type="range"
          value={length}
          min={6}
          max={60}
          onChange={(event) => setLength(event.target.value)}
        />
        <label>Length: {length}</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        ></input>
        <label>Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        ></input>
        <label>Characters</label>
      </div>
    </>
  );
};

export default PasswordGen;
