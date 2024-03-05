/* ================================================================ */
/* intro4.ts is part of the TypeScript Hello World tutorial. */
/* ================================================================ */

// Examples
let ex_Utility_partial : string = "Utility partial";
let ex_Utility_required : string = "Utility required";
let ex_Utility_record : string = "Utility record";
let ex_Utility_omit : string = "Utility omit";
let ex_Utility_pick : string = "Utility pick";
let ex_Utility_exclude : string = "Utility exclude";
let ex_Utility_returntype : string = "Utility returntype";
let ex_Utility_parameters : string = "Utility parameters";
let ex_Utility_readonly : string = "Utility readonly";

// Set example
let example4 : string = ex_Utility_readonly;
switch( example4 ){

   /* Utility partial
      ================================================================ */
      case "Utility partial":
         console.log( "<<<Utility partial>>>" );
      
         interface Pair {
            a : string;
            b : string;
         }
         // Now, Pair.x and Pair.y are optional, so this runs without assignment.
         let myPair : Partial<Pair> = {};
         console.log( myPair );
            // This won't compile because it has no assignment to required properties.
            // (Type '{}' is missing the following properties from type 'Pair': a, b)
            ////let myPair2 : Pair = {};
            ////console.log( myPair2 );
         break;

   /* Utility required
      ================================================================ */
      case "Utility required":
         console.log( "<<<Utility required>>>" );
      
         interface Vehicle {
            type : string;
            name ?: string; // Made optional by operator
          }
          // No problem here because Vehicle.name is optional.
          let myVehicle1 : Vehicle = {
            type : "car"
          };
            // This won't compile because now all optional properties are required.
            // (name ?: string; // Made optional by operator)
            /*let myVehicle2 : Required<Vehicle> = {
               type : "boat"
            };*/
         console.log( myVehicle1 );
         break;

     /* Utility record
      ================================================================ */
      case "Utility record":
         console.log( "<<<Utility record>>>" );
         // Quick way to assign some data
         const myRecord1 : Record<string,number> = {
            "ToSaveOne" : 59
          };
         const myRecord2 : Record<number,number> = {
            1 : 59
          };
         console.log( myRecord1, myRecord2 );
         break;

   /* Utility omit
      ================================================================ */
      case "Utility omit":
         console.log( "<<<Utility omit>>>" );
         interface Polygon1 {
            name : string;
            sides : number;
         }
         const myPolygon1 : Omit<Polygon1, 'sides'> = { name : 'square' };
         console.log( myPolygon1 );
            // This won't compile because Polygon1.sides is required otherwise.
            // (Property 'sides' is missing in type '{ name: string; }' but required in type 'Polygon1'.)
            ////const myPolygon2 : Polygon1 = { name : 'square' };
         break;

   /* Utility pick
      ================================================================ */
      case "Utility pick":
         console.log( "<<<Utility pick>>>" );
         interface Polygon2 {
            name : string;
            sides : number;
         }
         // With Pick<>, 'sides' is no longer required.
         const myPolygon2 : Pick<Polygon2, 'name'> = { name : 'square' };
         console.log( myPolygon2 );
         break;

   /* Utility exclude
      ================================================================ */
      case "Utility exclude":
         console.log( "<<<Utility exclude>>>" );
         type UnionTypeStrBool = string | boolean;
         const myValue1: Exclude<UnionTypeStrBool, string> = true;
         console.log( myValue1 );
            // This will not compile because the string type has been removed from the union type.
            // (Type 'string' is not assignable to type 'boolean'.)
            ////const myValue2: Exclude<UnionTypeStrBool, string> = "true";
            ////console.log( myValue2 );
         break;

   /* Utility returntype
      ================================================================ */
      case "Utility returntype":
         console.log( "<<<Utility returntype>>>" );
         // The return type is an object with with an x and y property.
         type PairMaker1 = () => { x : number; y : number; };
         // This declaration takes the return type from the type above; useful when dealing with generics
         const myOrderedPair : ReturnType<PairMaker1> = {
            x : 59,
            y : 1
         };
         console.log( myOrderedPair );
         break;

   /* Utility parameters
      ================================================================ */
      case "Utility parameters":
         console.log( "<<<Utility parameters>>>" );
         // Here we have one parameter of type object {x,y}
         type PairMaker2 = ( pair : { x : number; y : number; } ) => void;
         // This creates a constant of a type object {x,y}
         const myOrderedPair2 : Parameters<PairMaker2>[0] = {
            x: 59,
            y: 1
         };
         console.log( myOrderedPair2 );
         break;

   /* Utility readonly
      ================================================================ */
      case "Utility readonly":
         console.log( "<<<Utility readonly>>>" );
         interface Polygon3 {
            name : string;
            sides : number;
         }
         // This makes all properties readonly with the invocation of a single keyword.
         const myPolygon3 : Readonly<Polygon3> = {
            name : "pentagon",
            sides : 5,
         };
            // Attempting to redefine the name property results in a compilation error.
            // (TS2540: Cannot assign to 'name' because it is a read-only property.)
            ////myPolygon3.name = 'hexagon';
         console.log( myPolygon3 );
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
