// ============ 2) 접근 가능한 타입 정보를 명시적으로 저장 (태그 기법) ============
interface Square {
  kind: 'square',
  width: number;
}

interface Rectangle {
  kind: 'rectangle',
  height: number;
  width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === 'rectangle')
    return shape.width * shape.height;
  else
    return shape.width * shape.width;
}

export {}