import { set } from "react-hook-form";

const Lesson7 = (props) => {
function myFunction() {
console.log(">>> myFunction");
}
//Cach 1 : goi truc tiep
let a =  (function(){
    console.log(">>> anonymous function");
})
//Cach 2: 
setTimeout(function(){
    console.log(">>> anonymous function");
}, 1000);

//tu thuc thi

//tu thuc thi
(function (){
    console.log(">>> anonymous function");
})()

(()=>{
    console.log(">>> anonymous function");
})()

// a();
myFunction () ;
    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    )
}

export default Lesson7;
//function voo danh