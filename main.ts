/*class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
*/

/*
function calcTax(income:number,state:string='Ny',dependents?:number){
	var deduction:number;
	if(dependents){
		deduction =dependents*500;
	}else{
		deduction =0;
	}
	if(state =='NY'){
		return income*0.06 -deduction;
	}else if(state=='NJ'){
		return income*.06 -deduction;
	}
}

var tax:number =calcTax(5000,'NJ',3);
console.log("Your tax is" + tax);
var tax:number =calcTax(50000,'NY',3);
console.log("your tax is"+ tax);

var getName=()=>'John Smith';
console.log((getName));

var getNameUpper=()=>{
	var name= 'Peter Luger'.toUpperCase();
	return name;
}
console.log(getNameUpper());
function StockQuoteGeneratorArrow(symbol:string){
	this.symbol=symbol;
	setTimeout(()=>{
		console.log("StockQuoteGenerator. The Price quote for"+ Math.random());
	}, 1000);
}
var stockQuoteGeneratorArrow = new StockQuoteGeneratorArrow("IBM");
function StockQuoteGeneratorAnonymous(symbol:string){
	this.symbol =symbol;
	setInterval(function(){
		console.log(this.symbol)
	},1000);
}*/

/*function calcTax(state: string, income: number, dependents?: number): number{
	if (state='NNN') {
		return income*.06 -300;
	} else {
		return income*.06-500;
	}
}
var tax:number = calcTax('NNN',20000,4);
console.log(tax);


function calcTax(income: number, state: string = 'NY', dependents?: number):number{
	var condition;
	if (dependents) {
		 condition = dependents*500;
	}else {
		 condition = 0;
	}
	if (state == 'NY'){
		return income*0.06 - condition;
	} else if (state=='NJ'){
		return income*0.05 - condition;
	}
}
var tax: number = calcTax(50000, 'NJ', 3);
console.log("Your tax is " + tax);

var tax: number = calcTax(50000);
console.log("Your tax is " + tax);


var getName = function(){
	return "televersant";
}
var getNameUpper = ()=>{
	var name =getName().toUpperCase();
	return name;
}
console.log(getName());
console.log(getNameUpper());
*/
/*
function StockQ(symbol:String){
	this.symbol=symbol;
		console.log("The price quote for " +this.symbol
		+ " is " + Math.random());

}
function StockAnonymous(symbol:string){
	this.symbol =symbol;
	console.log(this.symbol+" StockAnonymous That "+Math.random());
}
var stockq = new StockQ("Hello");


function area(side1:number);
function area(side1:number,side2:number);
function area(side:number,side2:number,side3:number);
function area(side1:number,side2?:number,side3?:number){
	if(side1){
		console.log("This is ");

	}else if(side1&&side2){
			console.log("This is test");
	}else{
		console.log("else");
	}
}
//area(1);
area(1,2);
//area(1,2,3);


function attr(name: string): string;
function attr(name: string, value: string): void;
function attr(map: any): void;
function attr(nameOrMap: any, value?: string): any {
if (nameOrMap && typeof nameOrMap === `string`) {
	console.log("This is String Case");
} else {
   console.log("This is map Case ");
}
   console.log("Hello World");
}


class Person{
	firstName: string;
	lastName:string;
	age:number;
	ssn: string;
}
var p = new Person();
p.firstName ="AAAA";
p.lastName= "BBB";
p.age =29;
p.ssn= "123-2345-54444";


class Person{
	firstName: String;
	lastName: String;
	email:string;
	constructor(firstName:string,lasName:string,email:string){
		this.firstName =firstName;
		this.lastName =lasName;
		this.email =email;
	}
}

var p =new Person("AAAA","BBBBVV","AAA@yahoo.com");
console.log(p.firstName,p.lastName,p.email);


class Person{
	public firstName: string;
	public lastName: string;
	public age: number;
	private _ssn: string;

	constructor(firstName:string, lastName: string, age: number, ssn: string){
		this.firstName = firstName;
		this.lastName =lastName;
		this.age =age;
		this._ssn =ssn;
	}

}
var p = new Person("John", "Smith", 29, "123-90-4567");
console.log("Last name: " + p.lastName + " SSN: " + p._ssn);

class Person1 {
	constructor(public firstName: string,public lastName: string, public age: number, private _ssn: string) {
	
	}
}
var p = new Person1("John", "Smith", 29, "123-90-4567");
console.log("First Name: "+p.firstName+ " Last name: " + p.firstName + " SSN: " + p._ssn);


//Creating a method

class MyClass{
	doSomething(name:string){
		//console.log(name);
		return  name;
	}
}
var mc = new MyClass();
console.log(mc.doSomething("AAAA"));

class MyClassone{
	doSomething(howManyTimes: number): void{
		console.log("I do it " + howManyTimes +" times");
	}
}
var mco = new MyClassone();
mco.doSomething(5);


class MyClass{
	static doSomething(howManyTimes: number): void{
		 console.log("I do it " + howManyTimes +" times");
	}
}
var mc = new MyClass();
this.doSometing(5);



//Adding a setter and a getter

class Person{
	constructor(public firstName:string, public lastName:string,public age:number,private _ssn:string){
	}

	get ssn():string{
		return this._ssn;
	}

	set ssn(value:string){
		this._ssn = value;
	}
}
var p = new Person("John", "Smith", 29,"");
p.ssn = "456-70-1234";
console.log("Last name: " + p.lastName + " SSN: " + p.ssn);

//Inheritance
class Person{
	constructor(public firstName:string, public lastName:string,public age:number,private _ssn:string){
	}
}
class Employee extends Person{
	department:string;
	constructor(firstName:string, lastName:string, age:number, _ssn:string, department:string){
		super(firstName, lastName, age, _ssn);
		this.department =department;
	}
}


interface IPerson{
	firstName: string;
	lastName: string;
	age: number;
	ssn?: string;//Declares and IPerson interface with ssn as an optional member
	//note the question mark
}
class Person {
	constructor(public config: IPerson){
	}
}

var aPerson:IPerson ={
	firstName :"John",
	lastName: "Smith",
	age: 29
}
var p = new Person(aPerson);
console.log("Last name:" +p.config.lastName);


//function overloading

class Foo {
	myMethod(a: string);
	myMethod(a: number);
	myMethod(a: number, b: string);

	myMethod(a: any, b?: string) {
		document.write(a,b);
	}

}

var foo = new Foo();
//foo.myMethod("Salma");
//foo.myMethod(1223);
foo.myMethod(12345,"AAAA");
*/


//class A{
	//name:string;
   // value:string;
	
   // constructor(name:string,value:string){
   // }
/*s
	function  Person(name: string): string;
	function Person(name: string, value: number): void;

	function Person(name: any, value?: number): any{
		if (name && typeof name === "string") {
			document.write(name);
			} else if(value==v"number"){
			document.write(value);
		}
			//document.write("This is test");
	}
//}
//var a = new A();
   // Person("AAAA");
	Person("AAA",12334);
	*/
	 /*       
	
class Person{
	constructor(public firstName:string,public age:number,public ssn:string){
	}
}
class Employee extends Person{
	department :string;
	constructor(public firstName:string,public age:number,public ssn:string,dpartment:string){
		super(firstName,age, ssn);
		this.department = dpartment;
	}
   
}
 var emp = new Employee("AAA",1234,"123mnbf","Math");
console.log(emp);
console.log(emp.firstName,emp.age,emp.department,emp.ssn);

class Person{
	name:string;
	doSomething(name){
		console.log(name+"I am doing Something");
	}
}
class Employee extends Person{
	department:string;
	doSomething(name){
		console.log(name);
	}
}
class Animal{
   breed:string;
}
//var workers:Array<Person>=[];
var workers:Array<any>=[];
workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal();
console.log(workers);
*/
/*
//write function
function identity(arg:number):number{

	return arg;
}

function identity(args:any):any{

	return args;
}

function identity<T>(arg:T):T{
	return arg;
}
let output = identity<string>("MY String");
console.log(output);

function loggingIdentity<T>(args:T): T{
	//console.log(args.length);
	return args;
}
*/
//interface

//Declaring custom types with interfaces 
/*
interface IPerson{

	firtName: string;
	lastName:string;
	age:number;
	ssn?: string;
}
class Person{

	//The class Person has a constructor with one argument of type IPerson.
	constructor(public config:IPerson){
	}
}
*/
//Creates an aPerson object literal with members compatible with IPerson
/*
var aPerson: IPerson={
	firtName:"John",
	lastName:"Smith",
	age:29
}
var p = new Person(aPerson);
console.log(p.config.lastName);

var anEmployee: IPerson = {
	firtName:"John",
	lastName: "Smith",
	age:29,
   // department:"HR"
}

interface IPayable{
	increase_cap:number;
	increasePay(percent:number):boolean
}
class Employee implements IPayable{
	
}
*/
//Using multiple interface implementations
/*
interface IPayable{
	increasePay(percent:number):boolean
}
class Person{
	constructor(){

	}
}

class Employee extends Person implements IPayable{
	increasePay(percent:number):boolean{
		console.log("Increasing Salary by"+percent);
		return true;
	}
}

class Contractor implements IPayable{
	increasesCap:number = 20;
	increasePay(percent:number):boolean{
		if (percent<this.increasesCap) {
			console.log("increasing hourly rate by" +percent);
		} else {
			console.log("Sorry The increase cap for constructor is"+ this.increasesCap);
			return false;
		}
	}
}
var workers: Array<IPayable> =[];
workers[0] = new Employee();
workers[1] = new Contractor();
workers.forEach(worker=>worker.increasePay(30));

interface Icash{

	increasePay(percent: number): boolean
}
class Employee{
	constructor(){}
	doSomething(){
		console.log("I am doing Something! ");
	}
}

class Employee1 extends Employee implements Icash{
	increasePay(percent: number): boolean{
		console.log("Salary by " +percent);
		return true;
	}
}

class Contractor implements Icash{
	increaseCap:number = 20;
	increasePay(percent: number): boolean{
	if (percent < this.increaseCap) {
		console.log("hourly rate by " + percent)
		return true;
	 } else {
		console.log("contractors is ",this.increaseCap);
		return false;
		}
	}
}

var aas:Array<Icash> =[];
aas[0] = new Employee1();
aas[1] = new Contractor();
aas.forEach(aa=>aa.increasePay(30));
*/
//Listing B.14 Callable interface with a bare function
/*
interface IPayable {
	(percent: number): boolean;
}
class Person {
	constructor(private validator: IPayable) {
	}
	increasePay(percent: number): boolean {
		return this.validator(percent);
	}
}
var forEmployees: IPayable = (percent) => {
	console.log("Increasing salary by ", percent);
	return true;
};
var forContractors: IPayable = (percent) => {
var increaseCap: number = 20;
	if (percent < increaseCap) {
		console.log("Increasing hourly rate by", percent);
		return true;
	} else {
		console.log("Sorry, the increase cap for contractors is ",increaseCap);
		return false;
	}
}
var workers: Array<Person> = [];
workers[0] = new Person(forEmployees);
workers[1] = new Person(forContractors);
workers.forEach(worker => worker.increasePay(30));


interface IPayable {

	(percent: number): boolean;
}

class Person {
	constructor(private validator: IPayable) {
	}
	increasePay(percent: number): boolean {
		return this.validator(percent);
	}
}
var forEmployees: IPayable = (percent) => {
	console.log("Increasing salary by ", percent);
	return true;
};
var forContractors: IPayable = (percent) => {
var increaseCap: number = 20;
if (percent < increaseCap) {
		console.log("Increasing hourly rate by", percent);
		return true;
	} else {
		console.log("Sorry, the increase cap for contractors is ",increaseCap);
		return false;
	}
}
var workers: Array<Person> = [];
workers[0] = new Person(forEmployees);
workers[1] = new Person(forContractors);
workers.forEach(worker => worker.increasePay(30));
*/

//Adding metaData with annotation
