// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // also var, const
// export let name1 = …, name2 = …, …, nameN; // also var, const
// export function FunctionName() {... }
// export class ClassName {... }

// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };

// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;

const myFunction = () => {
    console.log("o");
}

//4 ways

//es6 

export default myFunction;

export {myFunction} ;

//old

module.exports = {
    myFunction
}

module.exports = myFunction


exports.myFunction = () => {
    console.log('ok') 
}