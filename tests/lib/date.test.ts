import { describe, it, expect } from 'vitest'
import { semanasVividas } from '../../src/lib/date'

const MS_POR_DIA = 86_400_000

describe('semanasVividas', () => {
  it('devuelve 0 para alguien nacido hoy', () => {
    const hoy = new Date()
    expect(semanasVividas(hoy)).toBe(0)
  })

  it('devuelve 1 para alguien nacido hace 7 días', () => {
    const hace7dias = new Date(Date.now() - 7 * MS_POR_DIA)
    expect(semanasVividas(hace7dias)).toBe(1)
  })

  it('devuelve 2 para alguien nacido hace 14 días', () => {
    const hace14dias = new Date(Date.now() - 14 * MS_POR_DIA)
    expect(semanasVividas(hace14dias)).toBe(2)
  })

  it('devuelve 0 para alguien nacido hace 6 días (no completó la semana)', () => {
    const hace6dias = new Date(Date.now() - 6 * MS_POR_DIA)
    expect(semanasVividas(hace6dias)).toBe(0)
  })

  it('lanza error si la fecha de nacimiento es futura', () => {
    const futuro = new Date(Date.now() + 1 * MS_POR_DIA)
    expect(() => semanasVividas(futuro)).toThrow('La fecha de nacimiento no puede ser futura')
  })
})
