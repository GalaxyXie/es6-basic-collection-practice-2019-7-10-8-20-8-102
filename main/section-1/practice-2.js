'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

   return collectionA.filter(function elementsInCollectionB(num){
        return collectionB[0].indexOf(num)>-1;
   });
}
