import React from "react";
 
export class ComponentThatCanCrash extends React.Component {
   render() {
       throw("Some error");
       return null;
   }
}

export default ComponentThatCanCrash;