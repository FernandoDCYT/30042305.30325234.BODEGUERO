import Cl_vBodega from "./Cl_vBodega.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_controlador {
    constructor() {
        this.mBodega = new Cl_mBodega(5, 2, 10); 
        this.vCliente = new Cl_vCliente(this);
        this.vBodega = new Cl_vBodega(this);
        this.mCliente = new Cl_mBodega(this);
        this.vBodega.mostrarBI(this.mBodega);
    }

    mostrarVistaCliente() {
        this.vBodega.ocultar();
        this.vCliente.mostrar();
    }

    mostrarVistaBodega() {
        this.vCliente.ocultar();
        this.vBodega.mostrar();
    }

    agregarCliente({ cedula, denominacion, cantidad }) {
        let cliente = new Cl_mCliente({ cedula, denominacion, cantidad });
        this.mBodega.procesarCliente(cliente);
        this.vBodega.reportarCliente({
            cedula: cliente.cedula,
            denominacion: cliente.denominacion,
            cantidad: cliente.cantidad,
            montT: cliente.calcMont().toFixed(2),
            mIb10: this.mBodega.mFb10().toFixed(2),
            mIb20: this.mBodega.mFb20().toFixed(2),
            mIb50: this.mBodega.mFb50().toFixed(2),
            montF: this.mBodega.calcMontFi().toFixed(2),
        });
        this.mostrarVistaBodega();
    }
}
