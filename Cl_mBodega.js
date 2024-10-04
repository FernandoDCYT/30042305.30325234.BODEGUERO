export default class Cl_mbodega{
    constructor(){
        this.mIb10=5*10;
        this.mIb20=2*20;
        this.mIb50=10*50;
        this.mFT=0;
    }
    procesarCliente(cliente){
        if(cliente.denominacion == 10){
            this.mIb10 += cliente.cantidad*10;
        }
        if(cliente.denominacion == 20){
            this.mIb20 += cliente.cantidad*20;
        }
        if(cliente.denominacion == 50){
            this.mIb50 += cliente.cantidad*50;
        }
        this.mFT += cliente.calcMont();
    }
    mFb10(){
        return this.mIb10
    }
    mFb20(){
        return this.mIb20
    }
    mFb50(){
        return this.mIb50
    }
    calcMontFi(){
        return this.mFb10() + this.mFb20() + this.mFb50();
    }
}
