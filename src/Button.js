import React from "react";
function Button(p) {
  return <button onClick={p.click}>{p.children}</button>;
}
export default Button;
