const { nanoid, customAlphabet } = require("nanoid");

console.log(nanoid()); // 일정 길이의 고유값 생성해줌

const custom = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  10
); // 0~9,a~z,A~Z까지로 이루어진 10글자 nanoid

console.log(custom());
