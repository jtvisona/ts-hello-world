/* ================================================================ */
/* intro3.ts is part of the TypeScript Hello World tutorial. */
/* ================================================================ */

// Examples
let ex_Named_parameters : string = "Named parameters";
let ex_As_cast : string = "As cast";
let ex_Angle_bracket_cast : string = "Angle bracket cast";
let ex_Forced_cast : string = "Forced cast";
let ex_Member_types_and_visibility : string = "Member types and visibility";
let ex_Implements_Extends_Overrides : string = "Implements, Extends, and Overrides";
let ex_Method_override : string = "Method override";
let ex_Abstract_class : string = "Abstract class";
let ex_Simple_generics : string = "Simple generics";
let ex_Extended_generics : string = "Extended generics";
let ex_Class_generics : string = "Class generics";
let ex_Class_generics_defaults : string = "Class generics defaults";
let ex_Aliased_type_wrapper : string = "Aliased type wrapper";

// Set example
let example3 : string = ex_Extended_generics;
switch( example3 ){

   /* Named parameters
      ================================================================ */
      case "Named parameters":
         console.log( "<<<Named parameters>>>" );
         // Declare the name of the parameters and assign type information afterwards
         function strConcat( { first_string, second_string } : { first_string: string, second_string: string } ){
            return first_string.concat( second_string );
          }

      console.log( strConcat( { first_string : "Hello,", second_string : " world!!!" } ) );
      break;

   /* As cast
      ================================================================ */
      case "As cast":
         console.log( "<<<As cast>>>" );
      
         let unknown_variable1 : unknown = "Hello, world!!!";
         console.log( (unknown_variable1 as string).toUpperCase() );
         let unknown_variable2 : unknown = 59;
         // This doesn't convert integer 59 to an actual string of length 2; it returns 'undefined' since int's don't have length.
         // Note the use of parens.
         console.log( (unknown_variable2 as string).length );
         break;

   /* Angle bracket cast
       ================================================================ */
       case "Angle bracket cast":
          console.log( "<<<Angle bracket cast>>>" );
          let unknown_variable3 : unknown = "Hello, world!!!";
          // Note the use of angle brackets for casting still requires parens.
          console.log( (<string>unknown_variable3).toUpperCase() );
          break;

   /* Forced cast
      ================================================================ */
      case "Forced cast":
         console.log( "<<<Forced cast>>>" );
         let unknown_variable4 : number = 59;
         // Note to avoid TS compiler errors, one can cast to 'unknown' and then to another type
         console.log( ((unknown_variable4 as unknown) as string) );
         break;

   /* Member types and visibility
       ================================================================ */
      case "Member types and visibility":
         console.log( "<<<Member types and visibility>>>" );
         // This look a lot more like a Java class declaration with types and visibility keywords.
         // Note that the property id is set to readonly. Public, private, and protected are valid.
         class ExampleClass {
            private readonly id : number;

            public constructor( id : number ){
               this.id = id;
            }
            public getId() : number {
               return this.id;
            }
         } 
         const myExampleClass = new ExampleClass(59) ;
         console.log( "The id of the ExampleClass is", myExampleClass.getId() );
         break;

   /* Implements, Extends, and Overrides
       ================================================================ */
       case "Implements, Extends, and Overrides":
         console.log( "<<<Implements, Extends, and Overrides>>>" );
       
         // An interface describes the basic shape of data and process. A class may implement multiple interfaces.
         // The basic interface allows one to retrieve the type of vehicle: car, plane, etc.
         interface Vehicle {
            getType : () => string;
         }
         // Notice this constructor doesn't automatically assign a vehicle_type
         class Car implements Vehicle {
            private readonly vehicle_type : string;
            public constructor( vehicle_type : string ){
               this.vehicle_type = vehicle_type;
            }
            public getType() : string {
               return this.vehicle_type;
            }
         }
         // This constructor does automatically assign a vehicle_type; the super is required
         class Racecar extends Car {
            public constructor(){
               super( "racecar" );
            }
         }
         const myRacecar = new Racecar();
         console.log( "myRacecar.getType():", myRacecar.getType() );
         break;

   /* Method override
       ================================================================ */
       case "Method override":
         console.log( "<<<Method override>>>" );
         
         interface Vehicle2 {
            getType : () => string;
         }
         // Notice this constructor doesn't automatically assign a vehicle_type
         // This class has a toString() method that will be overriden in an extension
         class Boat implements Vehicle2 {
            public readonly vehicle_type : string;
            public constructor( vehicle_type : string ){
               this.vehicle_type = vehicle_type;
            }
            public getType() : string {
               return this.vehicle_type;
            }
            public toString() {
               return `Boat[vehicle_type=${this.vehicle_type}]`;
            }
         }
         // This constructor does automatically assign a vehicle_type; the super is required.
         // Notice that this toString() overrides the same method in Boat
         class SpeedBoat extends Boat {
            public constructor(){
               super( "speedboat" );
            }
            public toString() {
               return `SpeedBoat[vehicle_type=${this.vehicle_type}]`;
            }
         }
         const mySpeedBoat = new SpeedBoat();
         console.log( "mySpeedBoat.toString():", mySpeedBoat.toString() );
         break;

   /* Abstract class
       ================================================================ */
       case "Abstract class":
         console.log( "<<<Abstract class>>>" );
       
         // There is no body for this method. Abstract classes can't be instantiated as objects either.
         abstract class Vehicle3 {
            public readonly vehicle_name : string;
            public constructor( vehicle_name : string ){
               this.vehicle_name = vehicle_name;
            }
            public abstract getName() : string;
         }
         // This implements the abstract class and the getName() method.
         class Plane extends Vehicle3 {
            public constructor() {
               super( "plane" );
            }
            public getName() : string {
               return this.vehicle_name;
            }
         }
         const myPlane = new Plane();
         console.log( "myPlane.getName():", myPlane.getName() );
         break;

   /* Simple generics
       ================================================================ */
       case "Simple generics":
         console.log( "<<<Simple generics>>>" );
       
         // Create type variables A and B; note ANY two arbitrary types can be selected.
         function cons<A, B>( first_value : A, second_value : B) : [A, B] {
            return [first_value, second_value]; // Return pair
          }
         console.log( cons<string, string>( "apple", "banana" ) );
         break;

   /* Extended generics
       ================================================================ */
       case "Extended generics":
         console.log( "<<<Extended generics>>>" );
       
         // Create type variables A and B; note ANY two arbitrary types can be selected.
         function cons2<A extends number, B extends number>( first_value : A, second_value : B) : [A, B] {
            return [first_value, second_value]; // Return pair
         }
         // 59 and 1.0 are types of numbers
         console.log( cons2<number, number>( 59, 1.0 ) );
            // This violates the constraints specified with 'extends' keyword
            // (Type 'string' does not satisfy the constraint 'number'.)
            ////console.log( cons2<string, number>( "59", 1 ) );
         break;

   /* Class generics
       ================================================================ */
       case "Class generics":
         console.log( "<<<Class generics>>>" );
       
         // Create an object of a pair of type variables
         class typedPair<A, B> {
            
            private valueA : A;
            private valueB : B;
            constructor( valueA : A, valueB : B ) {
               this.valueA = valueA;
               this.valueB = valueB;
            }
            public getValue() : [A, B] | undefined {
              return [this.valueA, this.valueB];
            }
            public toString(): string {
              return `typedPair=[${this.valueA},${this.valueB}]`;
            }
         }
         let myTypedPair = new typedPair<string, number>( "to save one", 59 );
         console.log( "myTypedPair.toString():", myTypedPair.toString() );
         console.log( "myTypedPair.getValue():", myTypedPair.getValue() );
         break;

   /* Class generics defaults
       ================================================================ */
       case "Class generics defaults":
         console.log( "<<<Class generics defaults>>>" );
       
         // Create an object of a pair of type variables
         class typedPairWD<A = string, B = string> {
            
            private valueA : A;
            private valueB : B;
            constructor( valueA : A, valueB : B ) {
               this.valueA = valueA;
               this.valueB = valueB;
            }
            public getValue() : [A, B] | undefined {
              return [this.valueA, this.valueB];
            }
         }
         // typedPairWD does not use <string,string> here; instead relies on defaults above.
         let myTypedPairWD = new typedPairWD( "to save one", "fifty-nine" );
         console.log( "myTypedPair.getValue():", myTypedPairWD.getValue() );
         break;

   /* Aliased type wrapper
       ================================================================ */
       case "Aliased type wrapper":
         console.log( "<<<Aliased type wrapper>>>" );
         // wrapping a value allows the use of the wrapper as a type; useable with 'interface' too
         type wrapper<T> = { wrapped_value : T };
         const aliasedValue : wrapper<number> = { wrapped_value : 59 };
         console.log( aliasedValue );
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