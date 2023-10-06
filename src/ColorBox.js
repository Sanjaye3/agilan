import { useState } from "react";
import Button from '@mui/material/Button';
import  './ColorBox.css';

  function ColorBox() {
  const [color, setColor] = useState("red");
  const [colorList, setColorList] = useState(["pink", "Orange"]);
  const styles = {
    background: color,
    width: "100px",
    height: "100px",
     
  };
  return (
    <div className="list">
      <h3>Welcome to ColorBox</h3>
      <input placeholder='Enter a color' type="text" onChange={(event) => setColor(event.target.value)} style={styles} />
      {/* <button onClick={() => setColorList([...colorList,color]) }>Add Color</button> */}
      <Button onClick={() => setColorList([...colorList, color])} variant="contained" className="btn">Add Color</Button>
      

      {colorList.map((item) => (<AddColor clr={item} />))}
    </div>
  );
}
function AddColor({ clr }) {
  const styles = {
    background: clr,
    height: "75px",
    width: "75px",
  };
  return (
    <div style={styles} className="list">

    </div>
  );

}


export { ColorBox }