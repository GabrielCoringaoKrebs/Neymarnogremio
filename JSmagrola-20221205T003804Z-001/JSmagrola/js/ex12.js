var v=[81, 100, 88, 40]

//alert(v)
v[1]=150
//alert(v[2])

lista=["pai do cesar",80,"enterrado", "Irati", "PR", 1900, true]
alert(lista)
for(var i=0; i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"<h2>")
}
lista.push("84500-000") //add elementos na ultima posiçao
alert(lista)
lista.pop()//remove o ultimo da lista
alert(lista)