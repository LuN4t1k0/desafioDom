const precioColor = () =>{
  //total
  let cantidad = document.querySelector('#cantidad')
  const precio = 400000;
  let total = Number(cantidad.value) * precio;
  console.log(total);

  //cantidadText
  let cantidadText = document.querySelector('#cantidadText')
  cantidadText.innerHTML = Number(cantidad.value)

  //totalText
  let totalText = document.querySelector('#totalText')
  let precioChile = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total);
  totalText.innerHTML = precioChile;
  
  //circulo
  let circulo = document.querySelector('.color-circulo')
  let color = document.querySelector('#color')
  circulo.style.backgroundColor = color.value
}