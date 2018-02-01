function lucroTotal(umPeriodo) {
  let somatoria = 0;
  for (let saldo of umPeriodo) {
    somatoria += saldo;
  }
  return somatoria;
}