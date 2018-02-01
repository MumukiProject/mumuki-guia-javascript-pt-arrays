describe("", function() {
  it("saldosDosMesesComLucro([1]) es [1]", function() {
    assert.deepEqual(saldosDosMesesComLucro([1]), [1])
  })
  it("saldosDosMesesComLucro([2, 20, 20]) es [2, 20, 20]", function() {
    assert.deepEqual(saldosDosMesesComLucro([2, 20, 20]), [2, 20, 20])
  })
  it("saldosDosMesesComLucro([]) es []", function() {
    assert.deepEqual(saldosDosMesesComLucro([]), [])
  })
  it("saldosDosMesesComLucro([0, 0, 0]) es []", function() {
    assert.deepEqual(saldosDosMesesComLucro([0, 0, 0]), [])
  })
  it("saldosDosMesesComLucro([10, -10, 2, 100]) es [10, 2, 100]", function() {
    assert.deepEqual(saldosDosMesesComLucro([10, -10, 2, 100]), [10, 2, 100])
  })
  it("saldosDosMesesComLucro([-1, -2, -3]) es []", function() {
    assert.deepEqual(saldosDosMesesComLucro([-1, -2, -3]), [])
  })
})