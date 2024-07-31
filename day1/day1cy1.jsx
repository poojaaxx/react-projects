import React from "react";
function Compare()
{
    const name1="Kabil";
    const name2="Kabil";
    const primitive=name1===name2;
    console.log(primitive);
    const object1={name:"Kabil"};
    const object2={name:"Kabil"};
    const reference=object1===object2;
    console.log(reference);

}
export default Compare;