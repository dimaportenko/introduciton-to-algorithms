export const addBinaryIntegers = (
  a: Array<0 | 1>,
  b: Array<0 | 1>,
): Array<0 | 1> => {
  const sum: Array<0 | 1> = [];

  if (a.length !== b.length) {
    throw new Error("Binary integers must have the same length");
  }

  let carry: 0 | 1 = 0;
  for (let i = 0; i < a.length; i++) {
    let c = a[i] + b[i] + carry;
    switch (c) {
      case 0:
      case 1:
        sum[i] = c;
        carry = 0;
        break;
      case 2:
        sum[i] = 0;
        carry = 1;
        break;
      case 3:
        sum[i] = 1;
        carry = 1;
        break;
    }
  }

  sum.push(carry);

  return sum;
};
