let Name = "Felipe Aguiar Brabo";
let Xp = 2000;

if(Xp < 1000) {
    console.log($`The hero of name ${name} is in level Ferro`);
}
else if(Xp >= 1001 && Xp <= 2000) {
    console.log($`The hero of name ${name} is in level Bronze`);
} else if(Xp >= 2001 && Xp <= 5000) {
    console.log($`The hero of name ${name} is in level Prata`);
} else if(Xp >= 6001 && Xp <= 7000) {
    console.log($`The hero of name ${name} is in level Ouro`);
} else if(Xp >= 7001 && Xp <= 8000) {
    console.log($`The hero of name ${name} is in level Platina`);
} else if(Xp >= 8001 && Xp <= 9000) {
    console.log($`The hero of name ${name} is in level Ascendente`);
} else if(Xp >= 10001 && Xp <= 10000) {
    console.log($`The hero of name ${name} is in level Imortal`);
} else if(Xp >= 10001) {
    console.log($`The hero of name ${name} is in level Radiante`);
}