const prompt = require('prompt-sync')();
//we assign the prompt output message by using let variable
let basicSalary =prompt("please enter your basic salary =Ksh.") //prompts the user to input their basic salary
let benefits =prompt("Please enter your benefits =Ksh.")//prompts the user to input their benefits
let KRA ;
function netSalaryCalculator(){
    let grossIncome = (+basicSalary+ +benefits)
    console.log(`grossIncome = Ksh. ${grossIncome}`)
    if(grossIncome<=24000){
       let  KRA = (grossIncome*10/100)
        console.log(`your kra deduction is ${KRA}`)
    }else if(grossIncome>24000 && grossIncome<=32333){
        let KRA =(grossIncome*25/100)
        console.log(`your deduction is ${KRA}`)
    }else if(grossIncome>32333){
        let KRA =(grossIncome*35/100)
        console.log(`your KRA deduction is ${KRA}.`)

    }//calculates total deductions
    if (grossIncome<=5999){
        let NHIF =(150)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=6000 && grossIncome<=7999){
        let NHIF =(300)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)

    } else if (grossIncome>=8000 && grossIncome<=11999){//NHIF deductions output
        let NHIF =(400)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=12000 && grossIncome<=14999){
        let NHIF =(500)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=15000 && grossIncome<=19999){
        let NHIF =(600)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=20000 && grossIncome<=24999){
        let NHIF =(750)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=25000 && grossIncome<=29999){
        let NHIF =(850)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=30000 && grossIncome<=34999){
        let NHIF =(900)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=35000 && grossIncome<=39999){
        let NHIF =(950)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=40000 && grossIncome<=44999){
        let NHIF =(1000)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=45000 && grossIncome<=49999){
        let NHIF =(1200)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=60000 && grossIncome<=69999){
        let NHIF =(1300)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=70000 && grossIncome<=79999){
        let NHIF =(1400)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=80000 && grossIncome<=89999){
        let NHIF =(1500)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=90000 && grossIncome<=99999){
        let NHIF =(1600)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }else if (grossIncome>=100000 && grossIncome<=11999){
        let NHIF =(1700)
        console.log(`Your NHIF deduction is = Ksh.${NHIF}`)
    }
    if(grossIncome <= 3000 && grossIncome>=0 ){
        let NSSF =(grossIncome*6/100)// calculates NSSF deductions
          console.log  (`Your NSSF deduction is = Ksh. ${NSSF}`)
    }else if (grossIncome>=4500){
        let NSSF = (270)
        console.log(`Your NSSF deduction is = Ksh.${NSSF}`)
    }
//calculates the net salary by adding the total deductions less gross salary
        let netSalary= (+grossIncome- +NSSF- +KRA -(NHIF -(NHIF*0.15)))
        console.log(`You net salary is Ksh. ${netSalary}`)
    
    

}netSalaryCalculator();//call the function netSalaryCalculator