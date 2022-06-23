// ============ 3) 타입을 클래스로 만들기 ============
// 타입(런타임 접근 불가)와 값(런타임 접근 가능)을 둘 다 사용하는 기법이다.

class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle)
    return shape.width * shape.height;
  else
    return shape.width * shape.width;


}

export {}

/*
인터페이스는 타입으로만 사용 가능하지만,
Rectangle을 클래스로 선언하면 타입과 값으로 모두 사용할 수 있으므로 오류가 발생하지 않는다.
*/