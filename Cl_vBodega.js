export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.lblB10 = document.getElementById("mainForm_b10");
        this.lblB20 = document.getElementById("mainForm_b20");
        this.lblB50 = document.getElementById("mainForm_b50");
        this.lblMontT = document.getElementById("mainForm_montT");
        this.lblcB10 = document.getElementById("mainForm_cB10");
        this.lblcB20 = document.getElementById("mainForm_cB20");
        this.lblcB50 = document.getElementById("mainForm_cB50");
        this.btAgCliente = document.getElementById("mainForm_agregarCliente");
        this.btAgCliente.onclick = () => controlador.mostrarVistaCliente();
        this.mostrarBI(controlador.mBodega);
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() { 
        this.vista.hidden = true;
    }

    mostrarBI(mBodega) {
        this.lblcB10.innerHTML = mBodega.cIB10();
        this.lblcB20.innerHTML = mBodega.cIB20();
        this.lblcB50.innerHTML = mBodega.cIB50();
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
        <td>${denominacion}$</td>
        <td>${cantidad}</td>
        <td>${montT}$</td>
        </tr> `;

        this.lblB10.innerHTML = mIb10;
        this.lblB20.innerHTML = mIb20;
        this.lblB50.innerHTML = mIb50;
        this.lblMontT.innerHTML = montF;
    }
}
