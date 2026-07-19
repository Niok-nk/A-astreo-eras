import { describe, it, expect } from "vitest";
import { semanasTotalesAPosicion, posicionASemanasTotales } from '../../src/core/convert'

describe('Semanas totales a posición', () => {
    it('devuelve Era 1, Período 1, Semana 1 con 0 semanas', () => {
        const resultado = semanasTotalesAPosicion(0);
        expect(resultado).toEqual({
            era: 1,
            periodo: 1,
            semana: 1,
        })
    })
})

describe('Posición a semanas totales', () => {
    it.each([
        [0, 1, 1, 1],
        [12, 1, 2, 1],
        [100, 1, 9, 5],
        [624, 2, 1, 1],
        [1248, 3, 1, 1],
    ])('%i semanas → era %i, periodo %i, semana %i', (semanas, era, periodo, semana) => {
        expect(semanasTotalesAPosicion(semanas)).toEqual({ era, periodo, semana })
    })
})



