 const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete UI Design",
        description: "Design dashboard UI using Tailwind CSS",
        date: "2025-01-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve authentication issue",
        date: "2025-01-05",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Report",
        description: "Create weekly performance report",
        date: "2025-01-02",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate payment gateway API",
        date: "2025-01-12",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Take full MySQL database backup",
        date: "2025-01-08",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve slow SQL queries",
        date: "2025-01-04",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Code Review",
        description: "Review junior developer PRs",
        date: "2025-01-09",
        category: "Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write Test Cases",
        description: "Write unit tests for auth module",
        date: "2025-01-06",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy App",
        description: "Deploy app on Render",
        date: "2025-01-07",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix UI Overflow",
        description: "Resolve mobile overflow issue",
        date: "2025-01-03",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Landing Page",
        description: "Design landing page for product",
        date: "2025-01-11",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize site for search engines",
        date: "2025-01-06",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Responsiveness",
        description: "Improve tablet view",
        date: "2025-01-04",
        category: "UI",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Content Update",
        description: "Update homepage content",
        date: "2025-01-09",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Security Audit",
        description: "Check app security vulnerabilities",
        date: "2025-01-13",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Dependencies",
        description: "Update npm packages",
        date: "2025-01-08",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Build Error",
        description: "Resolve production build error",
        date: "2025-01-05",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];




export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees) )
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))

    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}

}
