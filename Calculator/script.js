const chess=document.querySelector(".chessboard");
const oddrow=` <div class="square"></div>`.repeat(8);
const evenrow=`<div class="square1"></div>`.repeat(8);
const complete=`${oddrow} ${evenrow}`.repeat(4);
chess.innerHTML=complete;


