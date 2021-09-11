import { ClassNamePorValorPipe } from './class-name-por-valor.pipe';

describe('ClassNamePorValorPipe', () => {

  let pipe: ClassNamePorValorPipe;

  beforeEach(() => {
    pipe = new ClassNamePorValorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

      it('deve retornar "zero" para 0 absoluto', () => {
        expect(pipe.transform(0)).toBe('zero');
      });

      it('deve retornar "zero" para 0.004', () => {
        expect(pipe.transform(0.004)).toBe('zero');
      });

      it('deve retornar "zero" para -0.004', () => {
        expect(pipe.transform(-0.004)).toBe('zero');
      });

      it('deve retornar "zero" para 0.005', () => {
        expect(pipe.transform(0.005)).toBe('positivo');
      });

      it('deve retornar "zero" para -0.005', () => {
        expect(pipe.transform(-0.005)).toBe('negativo');
      });

      it('deve retornar "zero" para 0.01', () => {
        expect(pipe.transform(0.005)).toBe('positivo');
      });

      it('deve retornar "zero" para -0.01', () => {
        expect(pipe.transform(-0.005)).toBe('negativo');
      });

  });

  describe('transform com classes customizadas', () => {

    it('deve manter classes default para configuração vazia', () => {
      let confs = {};
      expect(pipe.transform(0, confs)).toBe('zero');
      expect(pipe.transform(1, confs)).toBe('positivo');
      expect(pipe.transform(-1, confs)).toBe('negativo');
    });

    it('deve manter apenas as classes default que não sejam sobrescritas', () => {
      let confs = { classeZero: 'zerado' };
      expect(pipe.transform(0, confs)).toBe('zerado');
      expect(pipe.transform(1, confs)).toBe('positivo');
      expect(pipe.transform(-1, confs)).toBe('negativo');
    });

    it('deve trocas todas as classes quando especificado', () => {
      let confs = {
        classePositivo: 'positivado',
        classeZero: 'zerado',
        classeNegativo: 'negativado',
      };
      expect(pipe.transform(0, confs)).toBe('zerado');
      expect(pipe.transform(1, confs)).toBe('positivado');
      expect(pipe.transform(-1, confs)).toBe('negativado');
    });

  });

});
