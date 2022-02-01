export function foo(a: number, b: number, coeffs: Array<number>) {
  return (coeffs[0] * a + coeffs[1]) * (coeffs[2] * b + coeffs[3]);
}

export function bar1(a: number, b: number) {
  return foo(a, b, [-1, 2, 1, 1]);
}

export function bar2(a: number, b: number) {
  return foo(a, b, [1, -1, 1, 2]);
}
