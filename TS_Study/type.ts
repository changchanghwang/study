type ConstructorParams = T extends new (...args: infer P) => any ? P : never;

type Return = T extends (...args: any[]) => infer R ? R : never;

// interface vs type
// interface는 선언 병합 가능

interface Human {
  walk: boolean;
}

interface Me extends Human {
  run: boolean;
}

const me: Me = {
  walk: true,
  run: true,
};

// type은 선언 병합 불가능

type Animal = {
  bark: boolean;
};

type Duck = {
  quack: boolean;
};

const duck: Duck = {
  bark: true, // Type '{ bark: boolean; }' is not assignable to type 'Duck'.
};
