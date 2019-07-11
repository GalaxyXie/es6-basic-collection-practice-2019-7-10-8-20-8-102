'use strict';

module.exports = function collectSameElements(collectionA, objectB) {

    let A= collectionA.filter(function elementsInObjectB(num){

              return objectB.value.indexOf(num.key)>-1;
         });
    let B=A.map(function getKey(num) {
                    return num.key;
                });
    console.log(B);
    return B;
}
