/*
Elementos considerados falsos
false
0
strings vazias
null / undefined
NaN (Not a Number)
*/
/*
&& - irá parar no primeiro elemento verdadeiro que ele achar na anlise
|| - irá retornar o primeiro elemento verdadeiro que ele achar
*/
console.log(NaN && null && 'Oi' && false && undefined)
= NaN
console.log(NaN || null || 'Oi' || false || undefined)
= Oi
