'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
   return collectionA.filter(function elementsInObjectB(num){
          return objectB.value.indexOf(num)>-1;
     });
}
