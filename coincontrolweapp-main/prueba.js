class movimiento {
  constructor(monto, periodo, fecha, categoria, concepto) {
    this._monto = monto;
    this._periodo = periodo;
    this._fecha = fecha;
    this._categoria = categoria;
    this._concepto = concepto;
  }
  sumar(montoNuevo) {
    return montoNuevo + this.monto;
  }
  restar(montoNuevo) {
    return montoNuevo - this.monto;
  }  
  modificar(montoNuevo)
   {
    return montoNuevo + this.monto;
  }
}

class ingreso extends movimiento {
  constructor(monto, periodo, fecha, categoria, concepto) {
    super(monto, periodo, fecha, categoria, concepto);
  }

}
class egreso extends movimiento {
  constructor(monto, periodo, fecha, categoria, concepto) {
    super(monto, periodo, fecha, categoria, concepto);
  }
}
let ingreso1 = new ingreso(200, 'Semanal', '12-06-2024', 'Ahorro', 'Ahorro de iphone 15')
console.log(ingreso1);
