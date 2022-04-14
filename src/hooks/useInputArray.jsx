import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("")
  const [array, setArray] = useState([])
  
  // useCallbackの第二引数がから配列のままだと、この関数は一回しか生成されない。
  // 第二引数に値を入れることで、それが更新されるたびにこの関数が生成される。
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("cannot use add the used text")
        return prevArray
      }
      return [...prevArray, text]
    })
  }, [text])
  
  const handleChange = useCallback((e) => {
    console.log(e.target.value);
    setText(e.target.value.trim())
  }, [])

  return { text, array, handleAdd, handleChange }
}
