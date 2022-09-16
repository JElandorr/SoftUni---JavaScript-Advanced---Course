class Company{
    constructor(){
        this.departments = {};
        this.deptConstruction = [];
        this.deptMarketing = [];
        this.deptNumanRes = [];    
        this.deptAccounting = [];    
    }

    addEmployee(name, salary, position, department){
        let employee = {};
        employee.name = name;
        employee.salary = salary;
        employee.position = position;
        employee.department = department;
        if(department == 'Construction'){
            this.deptConstruction.push(employee);
            this.departments.Constuction = this.deptConstruction;
        } else if (department == 'Marketing'){
            this.deptMarketing.push(employee);
            this.departments.deptMarketing = this.deptMarketing;
        } else if(department == 'Accounting') {
            this.deptAccounting.push(employee);
            this.departments.Accounting = this.deptAccounting;
        } else if(department == 'Human Resources'){
            this.deptHumanRes.push(employee);
            this.departments.HumanResourses = this.deptNumanRes;
        }

    };

    toString(){
        return this.departments;

    }
};
let c = new Company();
c.addEmployee('Peter', 2000, 'Architect', 'Construction');
console.log(c.toString());

c.addEmployee('Monica', 1500, 'Accountant', 'Accounting');
console.log(c.toString());