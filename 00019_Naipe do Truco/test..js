describe("", function() {
  var paloAlAzar =  Math.random().toString(36).substring(2);

  it('naipeDoTruco("espadas") não deve conter o 8 de espadas"', function() {
    assert(naipeDoTruco("espadas").indexOf("8 de espadas") < 0);
  });

  it('naipeDoTruco("espadas") não deve conter o 9 de espadas"', function() {
    assert(naipeDoTruco("espadas").indexOf("9 de espadas") < 0);
  });

  it('naipeDoTruco("espadas") deve ser ["1 de espadas", "2 de espadas"...', function() {
    assert.deepEqual(
      naipeDoTruco("espadas"),
      [ '1 de espadas',
      '2 de espadas',
      '3 de espadas',
      '4 de espadas',
      '5 de espadas',
      '6 de espadas',
      '7 de espadas',
      '10 de espadas',
      '11 de espadas',
      '12 de espadas' ]);
  });

  it('naipeDoTruco("bastos") deve ser ["1 de bastos", "2 de bastos"...', function() {
    assert.deepEqual(
      naipeDoTruco("bastos"),
      [ '1 de bastos',
      '2 de bastos',
      '3 de bastos',
      '4 de bastos',
      '5 de bastos',
      '6 de bastos',
      '7 de bastos',
      '10 de bastos',
      '11 de bastos',
      '12 de bastos' ]);
  });

  it(`naipeDoTruco("${paloAlAzar}") deve ter "3 de ${paloAlAzar}"`, function() {
    assert(naipeDoTruco(paloAlAzar).indexOf(`3 de ${paloAlAzar}`) > 0);
  });
})