const cursor = document.querySelector("div.cursor");

// when hold mouse down, make cursor bigger
const growCursor = () => {
  cursor.classList.remove("w-[10px]", "h-[10px]");
  cursor.classList.add("w-[80px]", "h-[80px]");
};

// when let go of mouse, make cursor smaller
const shrinkCursor = () => {
  cursor.classList.remove("w-[80px]", "h-[80px]");
  cursor.classList.add("w-[10px]", "h-[10px]");
};

// move the cursor based on coordinates
const moveCursor = (x, y) => {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

document.addEventListener("mousedown", () => growCursor());

document.addEventListener("mouseup", () => shrinkCursor());
document.addEventListener("mousemove", (e) => {
  console.log(e);
  // e.pageX --> where we are on the page across
  // e.pageY --> where we are on the page downwards

  moveCursor(e.pageX, e.pageY);
});
