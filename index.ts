export function binomial(a: number, b: number, coeffs: Array<number>) {
  return (coeffs[0] * a + coeffs[1]) * (coeffs[2] * b + coeffs[3]);
}

// for app1
export function app1(a: number, b: number) {
  return binomial(a, b, [1, 2, 1, 1]);
}

// for app2
export function app2(a: number, b: number) {
  return binomial(a, b, [1, -1, 1, 2]);
}
