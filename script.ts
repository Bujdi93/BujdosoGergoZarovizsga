function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];
    for (var i = 1; i <= szam; i++) {
      if (szam % i === 0) {
        osztok.push(i);
      }
    }
    return osztok;
  }

  function parosDarab(szamok: number[]): number {
    var parosDb: number = 0;
    for (var elem of szamok) {
      if (elem % 2 === 0) {
        parosDb++;
      }
    }
    return parosDb;
  }



  function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    var szöveg: string = fuggveny().replace(/\s/g, '');
    var fordítottSzöveg: string = "";
    for (var i = szöveg.length - 1; i >= 0; i--) {
      fordítottSzöveg += szöveg[i];
    }
    return szöveg === fordítottSzöveg;
  }


