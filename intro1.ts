/* ================================================================ */
/* intro1.ts is part of the TypeScript Hello World tutorial. */
/* ================================================================ */

// Examples
let ex_String_type : string = "String type";
let ex_Any_type : string = "Any type";
let ex_Unknown_type : string = "Unknown type with casts";
let ex_StringArr_type : string = "String[] type";
let ex_Implicit_array : string = "Implicit declaration of array";
let ex_Readonly_tuple : string = "Readonly tuple";
let ex_Named_tuple : string = "Named tuple";
let ex_Explicit_object : string = "Explicit object";
let ex_Implicit_object : string = "Implicit object";
let ex_Optional_type : string = "Optional type";
let ex_Index_signature : string = "Index signature";

// Set example
let example : string = ex_String_type;
switch( example ){

   /* String type
      ================================================================ */
   case "String type":
      console.log( "<<<String type>>>" );

      let stringVar : string = "This is a test of the EBS.";
      console.log( "typeof stringVar", typeof stringVar );
         // TS won't allow assignment of numerical type
         // (error TS2322: Type 'number' is not assignable to type 'string'.)
         ////stringVar = 59;
      // TS will allow assignment of another string
      stringVar = "fifty-nine";
      console.log( "typeof stringVar", typeof stringVar );
      break;

   /* Any type
      ================================================================ */
   case "Any type":
      console.log( "<<<Any type>>>" );

         // Initially assign bool, but legal to assign string later; dangerous so don't use
      let anyVar : any = true;
      console.log( "typeof anyVar", typeof anyVar );
      // Assign string
      anyVar = "now assigning string where bool was before";
      console.log( "typeof anyVar", typeof anyVar );
      break;

   /* Unknown type with casts
      ================================================================ */
   case "Unknown type with casts":
      console.log( "<<<Unknown type with casts>>>" );

      // The unknown type is like any
      let unknownVar : unknown = 100;
      console.log( "typeof uknownVar", typeof unknownVar );
      unknownVar = "string assigned to unknownVar";
      console.log( "typeof uknownVar", typeof unknownVar );
      // Assign object
      unknownVar = { 
         method: () => { console.log("method called!"); } 
      } as { method: () => void }
      console.log( "typeof uknownVar", typeof unknownVar );
         // Doesn't run because unknownVar.method is doesn't exist here
         // (error TS2339: Property 'method' does not exist on type 'unknown'.)
         ////unknownVar.method();
      // Use a cast instead
      (unknownVar as {method: Function}).method();
      break;

   /* String[] type
      ================================================================ */
   case "String[] type":
      console.log( "<<<String[] type>>>" );

      // This is an explicit declaration of type string[]
      const arrayVar : string[] = [];
      arrayVar.push( "first string pushed" );
      arrayVar.push( "second string pushed" );
         // Next line isn't right type
         // (error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.)
         ////arrayVar.push( 59 );
      console.log( arrayVar );
      break;

   /* Implicit declaration of array
      ================================================================ */
   case "Implicit declaration of array":
      console.log( "<<<Implicit declaration of array>>>" );

      // But implicit declaration can occur from type inference
      const arrayVar2 = [5];
      // This executes without an issue.
      arrayVar2.push(2);
         // Pushing a string now disallowed!
         // (error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.)
         ////arrayVar2.push( "string" );
      break;

   /* Readonly tuple
      ================================================================ */
   case "Readonly tuple":
      console.log( "Readonly tuple>>>" );

      // Define a tuple of three distinct types and init
      let myTriple : readonly [boolean, number, string] = [true, 59, "a digital frontier to shape the human future"];
         // With readonly keyword, prevent pushing things on to the tuple
         // (error TS2339: Property 'push' does not exist on type 'readonly [boolean, number, string]'.)
         ////myTripple.push( "another string" );
      console.log( myTriple );
      break;

   /* Named tuple
      ================================================================ */
   case "Named tuple":
      console.log( "<<<Named tuple>>>" );

      // Define a named tuple and use it provide destructured tuple
      const point1 : [ x : number, y : number ] = [3,4];
      console.log( point1 );
      // Note this abstracts only the y-value from the point, and the type comes along for the ride
      const [,y_only] = point1;
      console.log( "y_only =", y_only, "; typeof(y_only) =", typeof y_only );
      break;

   /* Explicit object
      ================================================================ */
   case "Explicit object":
      console.log( "<<<Explicit object>>>" );

      // Type information specified before definition, of course
      const lightcycle1 : { color: string, occupancy: number, driver: string } = {
         color: "blue",
         occupancy: 1,
         driver: "Sam Flynn"
         };
      console.log( "typeof lightcycle1.driver", typeof lightcycle1.driver );
      break;

   /* Implicit object
      ================================================================ */
   case "Implicit object":
      console.log( "<<<Implicit object>>>" )

      const lightcycle2 = {
         color: "red",
         occupancy: 1,
         driver: "CLU"
         };
      console.log( "typeof lightcycle2.driver", typeof lightcycle2.driver );
         // Won't allow you to assign a boolean to the driver
         // (error TS2322: Type 'boolean' is not assignable to type 'string'.)
         ////lightcycle2.driver = true;
      break;

   /* Optional type
      ================================================================ */
   case "Optional type":
      console.log( "<<<Optional type>>>" );

      // Note the ?: which makes the property optional. Without it, the code won't compile
      // (error TS2552: Cannot find name 'lightcycle3'. Did you mean 'lightcycle1'?)
      //const lightcycle1 : { color: string, occupancy: number, driver: string } = {   
      const lightcycle3 : { color: string, occupancy: number, driver?: string } = {
         color: "blue",
         occupancy: 1,
         // missing driver:
         };
      console.log( "typeof lightcycle3.driver", typeof lightcycle3.driver );
      lightcycle3.driver = "Tron";
      console.log( lightcycle3 );
      break;

   /* Index signature
      ================================================================ */
   case "Index signature":
      console.log( "<<<Index signature>>>" );
   
      // Take an empty object, and set up a type requirement on string properties used as indices
      const propertylessObject: { [index: string]: number } = {};
      // Asign a property with a string index
      propertylessObject.string1 = 59;
      // This isn't the right type; won't compile
        // (error TS2322: Type 'string' is not assignable to type 'number'.)
        ////propertylessObject.Mark = "fifty-nine";
      console.log( propertylessObject );
      break;

   default:
      console.log( "No example selected. Assign an example." );
}

   /* TOKEN
      ================================================================ *
      case "TOKEN":
         console.log( "<<<TOKEN>>>" );

      
      console.log( "" );
      break;
   */
