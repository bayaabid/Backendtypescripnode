import dotenv from "dotenv-safe";
import add from "@src/math/add";

dotenv.config({
    allowEmptyValues:true
});

console.log(add(1,2));
console.log(process.env.MY_NAME);
