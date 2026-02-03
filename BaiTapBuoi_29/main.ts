interface Employee {
    id: number
    name: string
    salary: number

    getId(): number
    getName(): string
    setName(name: string): void
    getSalary(): number
    setSalary(salary: number): void
    calculateSalary(): number
}



class Developer implements Employee {
    id: number
    name: string
    salary: number
    private overtimeHours: number

    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.id = id
        this.name = name
        this.salary = salary
        this.overtimeHours = overtimeHours
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getSalary(): number {
        return this.salary
    }

    setSalary(salary: number): void {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.salary = salary
    }

    calculateSalary(): number {
        return this.salary + this.overtimeHours * 50_000
    }
}

class Manager implements Employee {
    id: number
    name: string
    salary: number
    private teamSize: number

    constructor(id: number, name: string, salary: number, teamSize: number) {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.id = id
        this.name = name
        this.salary = salary
        this.teamSize = teamSize
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getSalary(): number {
        return this.salary
    }

    setSalary(salary: number): void {
        if (salary <= 0) throw new Error("Salary must be > 0")
        this.salary = salary
    }

    calculateSalary(): number {
        return this.salary + this.teamSize * 200_000
    }
}


const employees: Employee[] = [
    new Developer(1, "Duy", 6_000_000, 10),
    new Manager(2, "Huong", 9_000_000, 5)
]

employees.forEach(e => {
    console.log(e.getName(), e.calculateSalary())
})
