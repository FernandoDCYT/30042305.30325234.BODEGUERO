export default class Cl_vBodega{
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.lblB10 = document.getElementById("mainForm_b10");
        this.lblB20 = document.getElementById("mainForm_b20");
        this.lblB50 = document.getElementById("mainForm_b50");
        this.lblMontT = document.getElementById("mainForm_montT");
        this.btAgCliente = document.getElementById("mainForm_agregarCliente");
        this.btAgCliente.onclick = () =>
            controlador.mostrarVistaCliente();
    }
    
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() { 
        this.vista.hidden = true;
    }
    reportarCliente({
        cedula,
        denominacion,
        cantidad,
        montT,
        mIb10,
        mIb20,
        mIb50,
        montF
    }) {
        this.tabla.innerHTML += `
        <tr>
        <td>${cedula}</td>
        <td>${denominacion}</td>
        <td>${cantidad}</td>
        <td>${montT}</td>
        </tr> `;

        this.lblB10.innerHTML = mIb10;
        this.lblB20.innerHTML = mIb20;
        this.lblB50.innerHTML = mIb50;
        this.lblMontT.innerHTML = montF
    }
}