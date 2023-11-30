import { describe, expect, test } from 'vitest';
import { hour, temps } from '../hour';

describe("Hour", () => {
  
  describe("moon === 1", () => {
    describe("earth === 1", () => {
      test("sun = 1", () => {
        expect(hour(1, 1, 1)).toEqual(0);
      });
      test("sun = 2", () => {
        expect(hour(1, 1, 2)).toEqual(5);
      });
    });

    describe("earth === 2", () => {
      test("sun = 1", () => {
        expect(hour(1, 2, 1)).toEqual(0);
      });
      test("sun = 2  et soleil desactive terre", () => {
        expect(hour(1, 2, 2)).toEqual(6);
      });
    });
  });

  describe("moon === 2", () => {
    describe("earth === 1", () => {
      test("sun = 1", () => {
        expect(hour(2, 1, 1)).toEqual(1.5);
      });
      test("sun = 2", () => {
        expect(hour(2, 1, 2)).toEqual(4);
      });
    });

    describe("earth = 2", () => {
      test("sun = 1", () => {
        expect(hour(2, 2, 1)).toEqual(1.5);
      });
      test("sun = 2", () => {
        expect(hour(2, 2, 2)).toEqual(6);
      });
    });
  });
});

describe("Temps", () => {
  test("temporalite = mortin", () => {
    expect(temps(0)).toEqual("mortin");
  });

  test("temporalite = après-midi", () => {
    expect(temps(2)).toEqual("aprenoon");
  });

  test("temporalite = soir", () => {
    expect(temps(3)).toEqual("soirning");
  });

  test("temporalite = nuit", () => {
    expect(temps(5)).toEqual("nuight");
  });
});
