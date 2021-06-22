function rsaKeygen() {
  // p and q is a random prime number
  let p = 53;
  let q = 59;

  // phi of n according to Euler's Totient Theorem
  let n = p * q;
  let phiP = p - 1;
  let phiQ = q - 1;
  let phiN = phiP * phiQ;

  // random public exponent e, this must met the condition.
  // e and phiN must be relatively prime

  let e = 3;

  let d = (2 * phiN + 1) / e;

  const keys = {
    publicKey: {
      e,
      n,
    },
    privateKey: d,
  };

  return keys;
}
rsaKeygen();

export default rsaKeygen;
