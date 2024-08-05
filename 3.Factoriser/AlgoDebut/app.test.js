import { expect, test } from "vitest";
import { factoriser } from "./app";

test('factorise 3 to equal 6', () =>{
    expect(factoriser(3)).toBe(6)
})

test('factorise 5 to equal 120', () =>{
    expect(factoriser(5)).toBe(120)
})
