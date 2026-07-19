import type {TimePosition} from './'

export function formatearPosicion(pos: TimePosition): string{
    return `Era ${pos.era}, Período ${pos.periodo}, Semana ${pos.semana}`    
}

 