// undefined 和 null是其他所有类型的子类型，所以可以将其赋值给其他类型的变量。
let u: number = 2;
u = undefined;
console.log(u);

let v: string = 'v';
v = null;
console.log(v);

// 当时如果开启严格空检查（strictNullChecks）的话，null和undefined只能复制给any类型的变量
// 注意：尽可能的开启严格空检查（strictNullChecks）


// never类型是每种类型的子类型，并且可以分配给每种类型