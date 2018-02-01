function lucroTotal(umPeriodo) {
  let somatoria = 0;
  for (let mes of umPeriodo) {
    somatoria = somatoria + mes;
  }
  return somatoria;
}