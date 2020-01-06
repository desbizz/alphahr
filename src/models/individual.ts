export class Individual {
    _id: string;
    title: string;
    surname: string;
    firstname: string;
    othernames: string;
    staffnumber: string;
    recordnumber: string;
    email: string;
    allowances?: Allowances;
    deductions?: Deductions
    acccounts?: Account;
    jobs?: Job
}

export class Job {
    hiredDate: string;
    status?: string;
    totalMonth?: number;
    payableMonth?: number;
    unit?: string;
    subunit?: string;
    designation: string;
    basicSalary:string;
    location: string;
    division: string;
    classification: string;
    level: number;
    step: number;
    salaryName: string;

}

export class Account {
 bankName: string;
 sortCode: string;
 pensionName:string;
 pensionAccount: string;

}

export class Deductions {
name:string;
amount: string;
}

export class Allowances {
    name:string;
    amount: string;

}