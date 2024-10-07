export default class Cl_mBodega {
    constructor(mIb10, mIb20, mIb50) {
        this.mIb10 = mIb10;
        this.mIb20 = mIb20;
        this.mIb50 = mIb50;
        this.mFT = 0; 
    }

    procesarCliente(cliente) {
        if (cliente.denominacion == 10) {
            this.mIb10 += cliente.cantidad;
        }
        if (cliente.denominacion == 20) {
            this.mIb20 += cliente.cantidad;
        }
        if (cliente.denominacion == 50) {
            this.mIb50 += cliente.cantidad;
        }
        this.mFT += cliente.calcMont();
    }

    cIB10() {
        return this.mIb10;
    }

    cIB20() {
        return this.mIb20;
    }

    cIB50() {
        return this.mIb50;
    }

    mFb10() {
        return this.mIb10 * 10;
    }

    mFb20() {
        return this.mIb20 * 20;
    }

    mFb50() {
        return this.mIb50 * 50;
    }

    calcMontFi() {
        return this.mFb10() + this.mFb20() + this.mFb50();
    }
}
