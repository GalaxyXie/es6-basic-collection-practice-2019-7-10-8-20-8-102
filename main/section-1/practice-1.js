'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   return collectionA.filter(function elementsInCollectionB(num){
        return collectionB.indexOf(num)>-1;
   });

}