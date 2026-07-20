import { describe, it, expect } from "vitest";
import { semanasTotalesAPosicion, posicionASemanasTotales, diasTotalesAPosicion } from '../../src/core/convert'

describe('semanasTotalesAPosicion', () => {
  it('devuelve Era 1, Período 1, Semana 1, Día 1 con 0 semanas', () => {
    expect(semanasTotalesAPosicion(0)).toEqual({ era: 1, periodo: 1, semana: 1, dia: 1 })
  })

  it.each([
    [0,    1, 1, 1],
    [12,   1, 2, 1],
    [100,  1, 9, 5],
    [624,  2, 1, 1],
    [1248, 3, 1, 1],
  ])('%i semanas → era %i, periodo %i, semana %i', (semanas, era, periodo, semana) => {
    expect(semanasTotalesAPosicion(semanas)).toEqual({ era, periodo, semana, dia: 1 })
  })
})

describe('diasTotalesAPosicion', () => {
  it.each([
    [0,      1, 1, 1, 1],
    [6,      1, 1, 1, 7],
    [7,      1, 1, 2, 1],
    [84,     1, 2, 1, 1],
    [4368,   2, 1, 1, 1],
    [8736,   3, 1, 1, 1],
  ])('%i días → era %i, periodo %i, semana %i, día %i', (dias, era, periodo, semana, dia) => {
    expect(diasTotalesAPosicion(dias)).toEqual({ era, periodo, semana, dia })
  })

  it('maneja ~100 años (36500 días) sin errores', () => {
    const pos = diasTotalesAPosicion(36500)
    expect(pos.era).toBeGreaterThanOrEqual(1)
    expect(pos.periodo).toBeGreaterThanOrEqual(1)
    expect(pos.semana).toBeGreaterThanOrEqual(1)
    expect(pos.dia).toBeGreaterThanOrEqual(1)
    expect(pos.dia).toBeLessThanOrEqual(7)
    expect(pos.semana).toBeLessThanOrEqual(12)
    expect(pos.periodo).toBeLessThanOrEqual(52)
  })

  it('maneja 0 días correctamente', () => {
    expect(diasTotalesAPosicion(0)).toEqual({ era: 1, periodo: 1, semana: 1, dia: 1 })
  })
})

describe('posicionASemanasTotales', () => {
  it('ida y vuelta con semanasTotalesAPosicion', () => {
    [0, 12, 100, 624, 1248].forEach(n => {
      expect(posicionASemanasTotales(semanasTotalesAPosicion(n))).toBe(n)
    })
  })
})
