describe("", function() {
  it("saldosDosMesesComLucro([1]) é [1]", function() {
    assert.deepEqual(saldosDosMesesComLucro([1]), [1])
  })
  it("saldosDosMesesComLucro([2, 20, 20]) é [2, 20, 20]", function() {
    assert.deepEqual(saldosDosMesesComLucro([2, 20, 20]), [2, 20, 20])
  })
  it("saldosDosMesesComLucro([]) é []", function() {
    assert.deepEqual(saldosDosMesesComLucro([]), [])
  })
  it("saldosDosMesesComLucro([0, 0, 0]) é []", function() {
    assert.deepEqual(saldosDosMesesComLucro([0, 0, 0]), [])
  })
  it("saldosDosMesesComLucro([10, -10, 2, 100]) é [10, 2, 100]", function() {
    assert.deepEqual(saldosDosMesesComLucro([10, -10, 2, 100]), [10, 2, 100])
  })
  it("saldosDosMesesComLucro([-1, -2, -3]) é []", function() {
    assert.deepEqual(saldosDosMesesComLucro([-1, -2, -3]), [])
  })
})