import { useCallback, useState } from "react";

let PasswordGen = () => {
  let [length, setLength] = useState(6);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str = str + "1234567890";

    if (charAllowed) str = str + "!@#$%^&*(){}";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      let char = str.charAt(index);
      pass = char; // BzTquA
    }

    setPassword(pass);

    //
  }, [length, numberAllowed, charAllowed]);
};

export default PasswordGen;
