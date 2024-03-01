/* ================================================================ */
/* intro2.ts is part of the TypeScript Hello World tutorial. */
/* ================================================================ */

// Examples
let ex_Int_enums : string = "Int enum";
let ex_Str_enums : string = "String enum";
let ex_Type_alias : string = "Type alias";
let ex_Interface : string = "Interface";
let ex_Extended_interface : string = "Extended interface";
let ex_Union_type : string = "Union type";
let ex_Function_return : string = "Function return type";
let ex_Function_return_void : string = "Function return type void";
let ex_Optional_parameter : string = "Optional paramater";
let ex_Default_paramater : string = "Default paramater";
let ex_Rest_parameter : string = "Rest parameter";
let ex_Functional_type_alias : string = "Functional type alias";

// Set example
let example2 : string = ex_Int_enums;
switch( example2 ){

   /* Int Enum
      ================================================================ */
   case "Int enum":
      console.log( "<<<Int enum>>>" );

      // Use the dot-access notation to get the integer values
      enum PhysicsDisciplines {
         Mechanics = 1,
         EnM,
         Modern
       };
       // Prints a 2 to the screen
       console.log( PhysicsDisciplines.EnM );

      break;

   /* String Enum
      ================================================================ */
      case "String enum":
         console.log( "<<<String enum>>>" );
   
         // Use the dot-access notation to get the strings
         enum PhysicsDisciplines2 {
            Mechanics = "mechanics",
            EnM = "E&M",
            Modern = "modern"
          };
          // Prints "modern" to the screen
          console.log( PhysicsDisciplines2.Modern );
   
         break;

   /* Type alias
      ================================================================ */
      case "Type alias":
         console.log( "<<<Type alias>>>" );

      // Create primitive and complex user-defined types
      type SquadSize = number
      type SquadType = string
      type Squad = {
         size: SquadSize,
         type: SquadType
      }

      // Define a constant object using a complex user-defined type composed of simple versions
      const mySquad : Squad = {
         size : 7,
         type : "infantry"
      };
      console.log( "mySquad:", mySquad );

      break;

   /* Interface
      ================================================================ */
      case "Interface":
         console.log( "<<<Interface>>>" );

      // Create an interface for a geometrical object
      interface Point2D {
         abcissa : number,
         ordinate : number
      }
      // Create the geometrical object
      const myPoint2D : Point2D = {
         abcissa : 1,
         ordinate : -1
      }

      console.log( "myPoint:", myPoint2D );
      break;

   /* Extended interface
      ================================================================ */
      case "Extended interface":
         console.log( "<<<Extended interface>>>" );

         // Create a 2-dimensional point, and then extend to 3 dimensions
         interface Point2D {
            abcissa : number,
            ordinate : number
         }
         // Extend the interface for a 3-dimensional point
         interface Point3D extends Point2D {
            z : number
         }
   
         // Create a point with the extended interface
         const myPoint3D : Point3D = {
            abcissa : 1,
            ordinate : -5,
            z : 0
         }

      console.log( "myPoint3D:", myPoint3D );
      break;

   /* Union type
      ================================================================ */
      case "Union type":
         console.log( "<<<Union type>>>" );

      function analyzeType( type_instance : string | number ){
         let return_type : string = "not known";
         if ( typeof type_instance === "string" ){
            return_type = "string";
         } else if ( typeof type_instance === "number" ){
            return_type = "number";
         }
         return return_type;
      }
      // Show results
      console.log( analyzeType( "fifty-nine" ) );
      console.log( analyzeType( 59 ) );
      break;

   /* Function return type
      ================================================================ */
      case "Function return type":
         console.log( "<<<Function return type>>>" );
      
      function addTwoNumbers( num1 : number, num2 : number ) : number {
         return num1 + num2;
      }
      console.log( "addTwoNumbers(2+3):", addTwoNumbers(2,3) );
      break;

   /* Function return type void
      ================================================================ */
      case "Function return type void":
         console.log( "<<<Function return type void>>>" );
      
      function helloWorld() : void {
         console.log( "Hello, world!!!" );
      }
      helloWorld();
      break;

   /* Optional paramater
      ================================================================ */
      case "Optional paramater":
         console.log( "<<<Optional paramater>>>" );
      
      // Note '?' makes third parameter optional
      function concatThree( a : string, b : string, c?: string ) {
         return a.concat(b).concat(c || "default");
      }
      console.log( concatThree( "one,", "two,") );
      console.log( concatThree( "one,", "two,", "three") );
      break;

   /* Default paramater
      ================================================================ */
      case "Default paramater":
         console.log( "<<<Default paramater>>>" );
      
      // Note '?' makes third parameter optional
      function concatTwo( a : string, b : string = "default" ) {
         return a.concat(b)
      }
      console.log( concatTwo("one,") );
      console.log( concatTwo("one,", "two") );
      break;

   /* Rest parameter
      ================================================================ */
      case "Rest parameter":
         console.log( "<<<Rest parameter>>>" );
      // Rest array, which allows an open-ended set of params, must occur last in declaration
      function reduceArray( firstNum : number, ...arrayNumbers : number[] ) : number {
         let sum : number = firstNum;         for (const someNum of arrayNumbers) {
           sum += someNum;
         }
         return sum;
      }

      console.log( "reduceArray(1,2,3,4,5):", reduceArray(1,2,3,4,5) );
      break;

   /* Functional type alias
      ================================================================ */
      case "Functional type alias":
         console.log( "<<<Functional type alias>>>" );

      // Create an alias for a function type; much closer to Haskell
      type MultiplyFunction = ( number1 : number, number2: number ) => number;
      let myMultiply : MultiplyFunction = (numA, numB) => numA * numB;
      console.log( "myMultiply(3,4):", myMultiply(3,4) );
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