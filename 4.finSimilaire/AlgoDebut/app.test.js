import { expect, test } from "vitest";
import { finSimilaire } from "./app";

test('la fin est similaire', ()=>{
    expect (finSimilaire('ours','rs')).toBe('La fin est similaire')
});
test("la fin n'est pas similaire", ()=>{
    expect (finSimilaire('oural','rs')).toBe("La fin est différente")
})