/* Solo podemos acceder a ellas dentro del bloque
   - Solo podemos acceder a ellas dentro del bloque
*/

const edad = 19;
if (edad >= 18) {
    const accesoPermitido = true;

    if (true) {
        console.log(accesoPermitido);
    }

    const miFuncion = () => {
        console.log(accesoPermitido);
    };
    miFuncion();
}

const accesoPermitido = 'SI';
console.log(accesoPermitido);

/* 
Explicación del código:

 1. Variable global: const edad = 19;
 2. Primer if: Verifica si edad >= 18
 3. Variable de bloque: const accesoPermitido = true; (solo existe dentro del primer if)
 4. If anidado: if (true) imprime accesoPermitido (accede a la del bloque padre)
 5. Función dentro del bloque: miFuncion también accede a accesoPermitido del bloque
 6. Variable global con mismo nombre: const accesoPermitido = 'SI'; (diferente de la del bloque)
 7. Console.log final: Imprime 'SI' (la variable global, no la del bloque)
*/