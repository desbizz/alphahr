export class Individual {
    title: string;
    surname: string;
    firstname: string;
    othernames: string;
    staffNumber: string;
    recordNumber: string;
    email: string;
    allowances?: Allowances;
    deductions?: Deductions
    acccounts?: Accounts;
    jobs?: Jobs
}

export class Jobs {
    hiredDate: Date;
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
    step: string;
    salaryName: string;

}

export class Accounts {
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