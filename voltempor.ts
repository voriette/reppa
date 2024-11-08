interface Department {
  name: string;
  id: number;
}

class DepartmentService {
  private department: Department | undefined;

  constructor(private dept: string | undefined) {
    this.department = dept && { name: dept, id: 1 }; // Initialize department with default values
  }

  getDepartment(): Department | undefined {
    return this.department;
  }
}
