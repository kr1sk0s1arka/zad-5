//1
let a1 = 10;
let b1 = 2;

if(b1 != 0)
{
    let x1 = a1 / b1;
    document.write('Wynik x = ' + x1 + '<br>');
}
else
{
    document.write('Nie można obliczyć wyniku ponieważ nie można dzielić przez 0' + '<br>');
}

//2
let a2 = 10;
let b2 = 2;
let c2 = 6;
let d2 = 3;

if(b2 != 0 && d2 != 0)
{
    let x2 = a2 / b2 + c2 / d2;
    document.write('Wynik x = ' + x2 + '<br>');
}
else
{
    document.write('Nie można obliczyć wyniku ponieważ nie można dzielić przez 0' + '<br>');
}
//3
let a3 = 10;
let b3 = 8;

if(b3 - 4 != 0)
{
    let x3 = (a3 + 6) / (b3 - 4);
    document.write('Wynik x = ' + x3 + '<br>');
}
else
{
    document.write('Nie można obliczyć wyniku ponieważ mianownik jest równy 0' + '<br>');
}
//4
let a4 = 8;

if(a4 % 2 == 0)
{
    document.write('Liczba jest parzysta' + '<br>');
}
else
{
    document.write('Liczba jest nieparzysta' + '<br>');
}
//5
let a5 = 10;
let b5 = 2;

if(b5 == 0)
{
    document.write('Nie można dzielić przez 0' + '<br>');
}
else if(a5 % b5 == 0)
{
    document.write('Pierwsza liczba jest podzielna przez drugą' + '<br>');
}
else
{
    document.write('Pierwsza liczba nie jest podzielna przez drugą' + '<br>');
}
//6
let a6 = -5;

if(a6 > 0)
{
    document.write('Liczba jest dodatnia' + '<br>');
}
else if(a6 < 0)
{
    document.write('Liczba jest ujemna' + '<br>');
}
else
{
    document.write('Liczba jest równa 0' + '<br>');
}
//7
let a7 = 10;
let b7 = 20;
let c7 = 15;

if(a7 >= b7 && a7 >= c7)
{
    document.write('Największa liczba to ' + a7 + '<br>');
}
else if(b7 >= a7 && b7 >= c7)
{
    document.write('Największa liczba to ' + b7 + '<br>');
}
else
{
    document.write('Największa liczba to ' + c7 + '<br>');
}
//8
let a8 = 8;
let b8 = 3;
let c8 = 5;
let pomoc8;

if(a8 > b8)
{
    pomoc8 = a8;
    a8 = b8;
    b8 = pomoc8;
}

if(a8 > c8)
{
    pomoc8 = a8;
    a8 = c8;
    c8 = pomoc8;
}

if(b8 > c8)
{
    pomoc8 = b8;
    b8 = c8;
    c8 = pomoc8;
}

document.write('Liczby w kolejności rosnącej: ' + a8 + ', ' + b8 + ', ' + c8 + '<br>');

