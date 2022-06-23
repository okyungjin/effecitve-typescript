interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) // ERROR: 'Rectangle' only refers to a type, but is being used as a value here.ts(2693)
    return shape.width * shape.height;
  else
    return shape.width * shape.width;
}

/*
instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에는 아무런 역할을 할 수 없다.
타입스크립트의 타입은 erasable하며, 실제로 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 제거된다.

shape 타입을 명확하기 하기 위해서는 런타입에 타입 정보를 유지하는 방법이 필요하다.

1) height 속성 체크
2) 접근 가능한 타입 정보를 명시적으로 저장 (태그 기법)
*/

export {}
