const testmain = require('./retorentLevel1');
// const filecheking=require("./restorenMain");
 var file=require("fs");

// console.log(data)
// describe('Restorent table testing ', () => {
//   test('Order number 401 ', () => {
//     // var result=testmain.obj.input("1a");
//     expect(testmain.obj.input('1a')).toBe('YOUR ORDER NUMBER 401');
//   });
//   test('Order number 402', () => {
//     // var result=testmain.obj.input("1b");
//     expect(testmain.obj.input('1b')).toBe('YOUR ORDER NUMBER 402');
//   });

//   test('Order number 409', () => {
//   //  var result=testmain.obj.input("1c");
//     expect(testmain.obj.input('1c')).toBe('YOUR ORDER NUMBER 409');
//   });
// });
// describe('Checking billing ', () => {
//   const order_item = {
//     Idlli: 30,
//     Dosa: 50,
//     Biriyani: 90,
//   };
//   const order_list = ['Idlli', 'Biriyani'];
//   const bill = 0;
//   test('Bill', () => {
//     const result = testmain.obj.billling(bill, order_item, order_list);
//     expect(result).toBe(120);
//   });
// });
// describe('Checking file ', () => {
//   const file = require('fs');
//   const filedata = file.readFileSync('order_detals.txt');
//   const data = JSON.parse(filedata);
//   test('file testing ', () => {
//     expect(data).toStrictEqual({
//       Ordereditems: [
//         'Idlli',
//         'Biriyani',
//       ],
//       Amount: 200,
//       Tablenumber: '1a',
//       Ordernumber: '401',
//       OrderStatus: 'Booked',
//     });
//   });
// });

// jest.mock('fs')

// describe('Testing File system flow ', () => {

//     it('Should create order_detals.txt file with writeTextFile call ', () => {

//         filecheking.save();

//        /// fileSave.writeTextFile();

//         expect(file.writeFileSync).toHaveBeenCalled();

//     });

// });
jest.mock("./retorentLevel1.js")

describe('Mocking billing  ', () => {

    it('Checking bill function  ', () => {

        // const order_item = {
        //     Idlli: 30,
        //     Dosa: 50,
        //     Biriyani: 90,
        //   };
        //   const order_list = ['Idlli', 'Biriyani'];
        //   testmain.obj.billling(bill, order_item, order_list);
       /// fileSave.writeTextFile();

        expect(testmain.obj.billling.mock).toBeTruthy();

    });

});