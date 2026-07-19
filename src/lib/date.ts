import { DIAS_POR_SEMANA } from "../core/constants";


export function semanasVividas(nacimiento: Date, referencia?: Date): number{
    
    const fechaReferencia = referencia || new Date();
    const dias = (fechaReferencia.getTime() - nacimiento.getTime()) / 86400000;
    if (dias < 0) throw new Error('La fecha de nacimiento no puede ser futura')
    return Math.floor(dias / DIAS_POR_SEMANA);
}