import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inutRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inutRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drag");
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Керований"/>
      <input ref={inutRef} type="text" placeholder="Некерований"/>
      <button onClick={clickHandler}>Send</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: 100,
          height: 100,
          margin: 15,
          backgroundColor: "#6e6e6e",
        }}
      ></div>
      <div
        onDrag={dragHandler}
        onDragLeave={leaveHandler}
        onDragOver={overHandler}
        style={{
          width: 100,
          height: 100,
          margin: 15,
          backgroundColor: isDrag ? 'red' : "#6e6e6e",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
