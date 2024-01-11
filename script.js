function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var parosDb = 0;
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var elem = szamok_1[_i];
        if (elem % 2 === 0) {
            parosDb++;
        }
    }
    return parosDb;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var szöveg = fuggveny().replace(/\s/g, '');
    var fordítottSzöveg = "";
    for (var i = szöveg.length - 1; i >= 0; i--) {
        fordítottSzöveg += szöveg[i];
    }
    return szöveg === fordítottSzöveg;
}
