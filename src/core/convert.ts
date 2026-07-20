import type { TimePosition } from "./types"
import { SEMANAS_POR_PERIODO, PERIODOS_POR_ERA, SEMANAS_POR_ERA, DIAS_POR_SEMANA } from "./constants"

const DIAS_POR_PERIODO = SEMANAS_POR_PERIODO * DIAS_POR_SEMANA  // 84
const DIAS_POR_ERA = SEMANAS_POR_ERA * DIAS_POR_SEMANA           // 4368

export function semanasTotalesAPosicion(semanas: number): TimePosition {
    const era = Math.floor(semanas / SEMANAS_POR_ERA) + 1
    const periodo = Math.floor((semanas % SEMANAS_POR_ERA) / SEMANAS_POR_PERIODO) + 1
    const semana = semanas % SEMANAS_POR_PERIODO + 1
    return { era, periodo, semana, dia: 1 }
}

export function diasTotalesAPosicion(diasTotales: number): TimePosition {
    const era = Math.floor(diasTotales / DIAS_POR_ERA) + 1
    const periodo = Math.floor((diasTotales % DIAS_POR_ERA) / DIAS_POR_PERIODO) + 1
    const semana = Math.floor((diasTotales % DIAS_POR_PERIODO) / DIAS_POR_SEMANA) + 1
    const dia = diasTotales % DIAS_POR_SEMANA + 1
    return { era, periodo, semana, dia }
}

export function posicionASemanasTotales(pos: TimePosition): number {
    return (pos.era - 1) * SEMANAS_POR_ERA + (pos.periodo - 1) * SEMANAS_POR_PERIODO + pos.semana - 1
}
