import { describe, it, expect } from "vitest";
import { formatearPosicion } from '../../src/core/format'

describe('formatearPosicion', () => {
  it('devuelve el string formateado', () => {
    expect(formatearPosicion({ era: 1, periodo: 1, semana: 1, dia: 1 }))
      .toBe('Era 1, Período 1, Semana 1, Día 1')
  })
})