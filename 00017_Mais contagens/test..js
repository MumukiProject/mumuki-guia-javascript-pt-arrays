describe("", function() {
  it("quantidadeDeMesesComPerda([1]) es 0", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([1]), 0)
  })
  it("quantidadeDeMesesComPerda([2, 20, 20]) es 0", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([2, 20, 20]), 0)
  })
  it("quantidadeDeMesesComPerda([]) es 0", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([]), 0)
  })
  it("quantidadeDeMesesComPerda([0, 0, 0]) es 0", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([0, 0, 0]), 0)
  })
  it("quantidadeDeMesesComPerda([10, -10, 2, 100]) es 1", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([10, -10, 2, 100]), 1)
  })
  it("quantidadeDeMesesComPerda([-1, -2, -3]) es 3", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([-1, -2, -3]), 3)
  })
  it("quantidadeDeMesesComPerda([-1, -2, -3, -1, -1, -10]) es 6", function() {
    assert.deepEqual(quantidadeDeMesesComPerda([-1, -2, -3, -1, -1, -10]), 6)
  })
})