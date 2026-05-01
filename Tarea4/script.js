var num1= parseFloat(prompt("Ingrese primer numero: "));
var num2= parseFloat(prompt("Ingrese segundo numero: "));

for (var i=0; i < 6; i++)
{
    switch(i)
    {
        case 0: alert(num1 + num2);
        case 1: alert(num1 - num2);
        case 2: alert(num1 * num2);
        case 3: alert(num1 / num2);
        case 4: alert(num1 % num2);
        default: break;
    }
}