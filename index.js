let nomeDoHeroi = ("Thigas")
let xp = 500
let nivel 

if (xp >= 10001)
    nivel = " é do nível Radiante" 
else if (xp >= 9001 && xp <= 10000)
    nivel = " é do nível Imortal"
else if (xp >= 8001 && xp <= 9000) 
    nivel = " é do nível Ascendente"
else if (xp >= 7001 && xp <= 8000) 
    nivel = " é do nível Platina"
else if (xp >= 5001 && xp <= 7000) 
    nivel = " é do nível Ouro"
else if (xp >= 2001 && xp <= 5000) 
    nivel = " é do nível Prata"
else if (xp >= 1001 && xp <= 2000) 
    nivel = " é do nível Bronze"
else nivel = " é do nível Ferro"

console.log ("O Herói " + nomeDoHeroi + nivel)