'use strict'
let name='this is version';
module.exports = {
    Query: {
        version:()=>name
    },
    Mutation: {
        createuser:(_, data) => {
            name=name+data.name;
            return name;
        }
    }
    
};

