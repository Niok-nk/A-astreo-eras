import type { TimePosition } from "./types"
import { SEMANAS_POR_PERIODO, PERIODOS_POR_ERA, SEMANAS_POR_ERA } from "./constants"

export function semanasTotalesAPosicion(semanas: number): TimePosition{
    const era = Math.floor(semanas / SEMANAS_POR_ERA )+ 1;
    const periodo = Math.floor((semanas % SEMANAS_POR_ERA) / SEMANAS_POR_PERIODO ) + 1;
    const semana = semanas % SEMANAS_POR_PERIODO + 1;
    return {era, periodo, semana};
}

export function posicionASemanasTotales(pos: TimePosition): number{
    const semanasTotales = (pos.era - 1) * SEMANAS_POR_ERA + (pos.periodo - 1) * SEMANAS_POR_PERIODO + pos.semana - 1;
    return semanasTotales;
}


