// part 1:
interface  partTime {
    id: number
    name: string
    salary: number
    hourssWorked: number
}

const  partTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hourssWorked: 40
}

const updatePartTime = {
    ...partTime,
    hourssWorked: 45
}
console.log(updatePartTime)

// part 2:
interface Employee {
    id: number
    name: string
    salary: number
    getSalary(): number
}

class FullTimeEmployee implements Employee {
    id!: number
    name!: string
    salary!: number

    getSalary(): number {
        return this.salary
    }
}

class PartTimeEmployee implements Employee {
    id!: number
    name!: string
    salary!: number
    hoursWorked!: number

    getSalary(): number {
        return this.salary * this.hoursWorked
    }
}

function calculateTotalSalary(employees: Employee[]): number {
    let total = 0
    for (const employee of employees) {
        total += employee.getSalary()
    }
    return total
}

const fullTime = new FullTimeEmployee()
fullTime.id = 1
fullTime.name = 'huong'
fullTime.salary = 1000

const partTime = new PartTimeEmployee()
partTime.id = 2
partTime.name = 'duy'
partTime.salary = 2500
partTime.hoursWorked = 11

const employees: Employee[] = [partTime, fullTime]

console.log(calculateTotalSalary(employees)) // 28500


