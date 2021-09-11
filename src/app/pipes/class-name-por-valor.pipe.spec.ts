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

});
