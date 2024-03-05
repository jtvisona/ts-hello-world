/* ================================================================ */
/* intro5.ts is part of the TypeScript Hello World tutorial. */
/* ================================================================ */

// Examples
//let ex_Int_enums : string = "Int enum";
let ex_Explicit_keyof : string = "Explicit keyof";
//let ex_Explicit_keyof : string = "Explicit keyof";

// Set example
let example5 : string = ex_Explicit_keyof;
switch( example5 ){

   /* Explicit keyof
      ================================================================ */
      case "Explicit keyof":
         console.log( "<<<Explicit keyof>>>" );
         interface House {
            house_number : number;
            street : string;
          }
          // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
          function printPersonProperty( aHouse : House, property : keyof House) {
            console.log( `Printing ${property}: "${aHouse[property]}"` );
          }
          let myHouse = {
            house_number : 100,
            street : "Elm Street"
          };
          printPersonProperty( myHouse, "house_number" );
      
         console.log( "" );
         break;

   /* TOKEN
      ================================================================ *
      case "TOKEN":
         console.log( "<<<TOKEN>>>" );

      
         console.log( "" );
         break;

   */

   default:
      console.log( "No example selected. Assign an example." );
}