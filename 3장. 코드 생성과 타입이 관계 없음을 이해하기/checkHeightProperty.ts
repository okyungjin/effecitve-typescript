// ============ 1) height 속성 체크 ============
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ('height' in shape)
    return shape.width * shape.height; // TYPE IS: Rectangle
  else
    return shape.width * shape.width; // TYPE IS: Square
}

export {}