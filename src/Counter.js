import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (

    <div>
      {/* <button  onClick={() =>setLike(like+1)} > 👍 {like} </button> */}




      <IconButton color="primary" onClick={() => setLike(like + 1)}>👍
        <Badge badgeContent={like} color="primary">

        </Badge>

      </IconButton>


      <IconButton color="error" onClick={() => setDisLike(dislike + 1)}> 👎
        <Badge badgeContent={dislike} color="error">

        </Badge>
      </IconButton>



    </div>
  );
}
