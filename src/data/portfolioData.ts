import { ProfileInfo, SkillCategory, ProjectItem, RoadmapGoal } from '../types/portfolio';

export const defaultProfile: ProfileInfo = {
  name: 'Yeshwanth Ghantasala',
  role: 'B.Tech Student & Aspiring AI Engineer',
  status: 'B.Tech 1st Semester',
  college: 'Engineering Institute',
  careerGoal: 'Aspiring AI Engineer',
  bio: 'First-semester B.Tech student beginning my journey in technology and AI. I am actively learning Python and web development, exploring Generative AI as a beginner, and building practical projects to strengthen my problem-solving skills.',
  email: 'ghantasalayeshwanth864@gmail.com',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://www.linkedin.com/in/yourusername',
  location: 'India',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    description: 'Foundational language used for problem solving and project logic',
    iconName: 'Code',
    skills: [
      {
        name: 'Python',
        level: 'Actively Practicing',
        description: 'Variables, loops, conditionals, functions, data structures, and basic scripting',
      },
    ],
  },
  {
    category: 'Web Development',
    description: 'Foundations for structuring and styling user interfaces on the web',
    iconName: 'Globe',
    skills: [
      {
        name: 'HTML5',
        level: 'Foundational',
        description: 'Semantic markup, accessible structure, forms, and page layouts',
      },
      {
        name: 'CSS3',
        level: 'Foundational',
        description: 'Responsive styling, Flexbox, CSS Grid, typography, and clean spacing',
      },
      {
        name: 'JavaScript',
        level: 'Learning Basics',
        description: 'DOM manipulation, event listeners, basic logic, and interactivity',
      },
      {
        name: 'Basic Web Development',
        level: 'Practicing',
        description: 'Building responsive single-page layouts and integrating small tools',
      },
    ],
  },
  {
    category: 'AI & Emerging Technologies',
    description: 'Exploring machine intelligence concepts with curiosity and focus',
    iconName: 'Brain',
    skills: [
      {
        name: 'Generative AI',
        level: 'Beginner',
        description: 'Prompt engineering basics, exploring LLM concepts, and API understanding',
      },
      {
        name: 'Artificial Intelligence',
        level: 'Currently Learning',
        description: 'Learning fundamental concepts, core algorithms, and mathematics in AI',
      },
    ],
  },
  {
    category: 'Activities & Problem Solving',
    description: 'Practical engagement in collaborative innovation and logical thinking',
    iconName: 'Award',
    skills: [
      {
        name: 'Problem Solving',
        level: 'Daily Habit',
        description: 'Breaking down computational problems into algorithmic steps and logic',
      },
      {
        name: 'Hackathons',
        level: 'Active Participant',
        description: 'Collaborating in team sprints, ideating solutions, and rapid learning',
      },
      {
        name: 'Idea-thons',
        level: 'Active Participant',
        description: 'Developing practical problem pitches, presentations, and team brainstorming',
      },
      {
        name: 'Project Development',
        level: 'Hands-on',
        description: 'Writing clean code, debugging small applications, and sharing on GitHub',
      },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Calculator',
    shortDescription:
      'A simple application that determines whether a person is eligible to vote based on their age and predefined eligibility conditions.',
    fullDescription:
      'Developed to practice basic conditional logic, user input handling, and validation in Python. The program takes user details such as age, verifies citizenship criteria, and provides clear feedback on voting eligibility or how many years remain until eligibility.',
    technologies: ['Python', 'Basic Programming Logic', 'Input Validation', 'Conditional Statements'],
    githubUrl: 'https://github.com/yourusername/voter-eligibility-calculator',
    demoType: 'voter',
    pythonCode: `# Voter Eligibility Calculator in Python
# Created by Yeshwanth Ghantasala (B.Tech 1st Sem)

def check_voter_eligibility(age, is_citizen):
    VOTING_AGE = 18
    
    # Input validation
    if age < 0:
        return "Error: Age cannot be negative."
    elif age > 120:
        return "Error: Please enter a valid age."
        
    # Eligibility logic
    if not is_citizen:
        return "Ineligible: Voter must be a recognized citizen."
    elif age >= VOTING_AGE:
        return f"Eligible to vote! You are {age} years old."
    else:
        years_left = VOTING_AGE - age
        return f"Not eligible yet. You need {years_left} more year(s) to vote."

# Example execution
if __name__ == "__main__":
    try:
        user_age = int(input("Enter your age: "))
        citizen_input = input("Are you a citizen? (yes/no): ").strip().lower()
        is_citizen = citizen_input == "yes"
        
        result = check_voter_eligibility(user_age, is_citizen)
        print(result)
    except ValueError:
        print("Please enter a valid numeric age.")`,
    keyLearnings: [
      'Implemented boundary condition checks and input validation',
      'Structured logical if-elif-else statements',
      'Handled basic exception management for numeric user inputs',
      'Wrote reusable functions with clean return values',
    ],
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    shortDescription:
      'A beginner-level ATM management application that demonstrates concepts such as user interaction, balance management, withdrawals, deposits, and basic transaction logic.',
    fullDescription:
      'A practical console-style application that simulates core automated teller machine workflows. Implements PIN verification, real-time balance inquiries, deposit and withdrawal procedures with overdraft protection, and an in-memory session transaction log.',
    technologies: ['Python', 'Conditional Statements', 'Functions', 'State Management', 'Basic Programming Concepts'],
    githubUrl: 'https://github.com/yourusername/atm-management-system',
    demoType: 'atm',
    pythonCode: `# ATM Management System in Python
# Demonstrating functions, loops, and conditional balance operations

class ATMSystem:
    def __init__(self, initial_balance=500.0, default_pin="1234"):
        self.balance = initial_balance
        self.pin = default_pin
        self.transaction_history = [f"Account opened with initial balance: \${initial_balance:.2f}"]
        self.authenticated = False

    def verify_pin(self, entered_pin):
        if entered_pin == self.pin:
            self.authenticated = True
            return True, "PIN verified successfully!"
        return False, "Incorrect PIN. Please try again."

    def check_balance(self):
        if not self.authenticated:
            return "Please authenticate first."
        return f"Your current balance is: \${self.balance:.2f}"

    def deposit(self, amount):
        if not self.authenticated:
            return "Please authenticate first."
        if amount <= 0:
            return "Deposit amount must be positive."
        self.balance += amount
        self.transaction_history.append(f"Deposited: \${amount:.2f}")
        return f"Successfully deposited \${amount:.2f}. New balance: \${self.balance:.2f}"

    def withdraw(self, amount):
        if not self.authenticated:
            return "Please authenticate first."
        if amount <= 0:
            return "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return f"Insufficient funds! Maximum available: \${self.balance:.2f}"
        self.balance -= amount
        self.transaction_history.append(f"Withdrew: \${amount:.2f}")
        return f"Successfully withdrew \${amount:.2f}. Remaining balance: \${self.balance:.2f}"`,
    keyLearnings: [
      'Constructed modular procedural functions for banking workflows',
      'Managed dynamic state across multiple sequential operations',
      'Implemented safety checks against negative amounts and overdrafts',
      'Maintained an active transaction history list in Python',
    ],
  },
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    shortDescription:
      'A simple application that calculates student grades based on marks and predefined grading conditions.',
    fullDescription:
      'Created to model educational grading rubrics. The calculator accepts scores across multiple subjects, computes total marks, percentage average, assigns letter grades (A, B, C, D, F) based on conditional ranges, and validates whether each subject meets passing thresholds.',
    technologies: ['Python', 'Conditional Statements', 'Arithmetic Operations', 'Basic Programming Logic'],
    githubUrl: 'https://github.com/yourusername/student-grade-calculator',
    demoType: 'grade',
    pythonCode: `# Student Grade Calculator in Python
# Evaluates marks, calculates aggregate percentage, and assigns grades

def calculate_student_grade(subject_marks):
    """
    Takes a dictionary or list of subject marks (0-100 each).
    Calculates total, percentage, pass/fail status, and final grade.
    """
    total_marks = sum(subject_marks)
    total_possible = len(subject_marks) * 100
    percentage = (total_marks / total_possible) * 100
    
    # Check individual subject pass threshold (minimum 35 marks)
    has_failed_subject = any(mark < 35 for mark in subject_marks)
    
    if has_failed_subject:
        grade = "Fail (Subject backlog)"
        status = "Needs Improvement"
    elif percentage >= 90:
        grade = "A+ (Outstanding)"
        status = "First Class with Distinction"
    elif percentage >= 80:
        grade = "A (Excellent)"
        status = "First Class"
    elif percentage >= 70:
        grade = "B (Good)"
        status = "Second Class Upper"
    elif percentage >= 60:
        grade = "C (Satisfactory)"
        status = "Second Class"
    elif percentage >= 40:
        grade = "D (Pass)"
        status = "Pass"
    else:
        grade = "F (Fail)"
        status = "Repeat Required"
        
    return {
        "total_obtained": total_marks,
        "max_marks": total_possible,
        "percentage": round(percentage, 2),
        "grade": grade,
        "status": status
    }`,
    keyLearnings: [
      'Iterated over collections and calculated statistical aggregates',
      'Constructed multi-branch conditional cascades (`if-elif-else`)',
      'Calculated percentage distributions and rounded float precision',
      'Employed dictionary data structures to return structured results',
    ],
  },
];

export const hackathonReflections = [
  {
    title: 'Real-World Problem Exploration',
    description:
      'Participating in hackathons pushes me outside standard textbook problems to understand how real human challenges require creative technological thinking.',
    iconName: 'Compass',
  },
  {
    title: 'Cross-Disciplinary Teamwork',
    description:
      'Collaborating with fellow students to brainstorm, distribute tasks, debate system ideas, and support one another under tight deadlines.',
    iconName: 'Users',
  },
  {
    title: 'Idea-thon Pitching & Clarity',
    description:
      'Translating beginner technical concepts into clear presentation decks that explain the problem, proposed solution, and feasibility realistically.',
    iconName: 'Presentation',
  },
  {
    title: 'Accelerated Learning Curve',
    description:
      'Every event exposes me to new libraries, developer workflows, and perspectives that guide my weekly personal study schedule.',
    iconName: 'TrendingUp',
  },
];

export const learningRoadmap: RoadmapGoal[] = [
  {
    title: 'Python Core Fundamentals',
    description: 'Variables, loops, functions, lists, dictionaries, file I/O, and writing clean, formatted scripts.',
    status: 'currently-learning',
    category: 'Programming',
  },
  {
    title: 'Web Development Basics',
    description: 'Semantic HTML5, CSS layout principles (Flexbox & Grid), and beginner JavaScript event logic.',
    status: 'currently-learning',
    category: 'Web Development',
  },
  {
    title: 'Generative AI Concepts',
    description: 'Understanding prompt engineering, LLM architectures on a high level, tokenization, and API usage.',
    status: 'currently-learning',
    category: 'Artificial Intelligence',
  },
  {
    title: 'AI & Math Foundations',
    description: 'Reviewing linear algebra concepts, basic statistics, and probability principles essential for machine learning.',
    status: 'currently-learning',
    category: 'Artificial Intelligence',
  },
  {
    title: 'Hands-on Beginner Projects',
    description: 'Building small practical tools and calculators to reinforce syntax through execution rather than passive reading.',
    status: 'currently-learning',
    category: 'Project Development',
  },
  {
    title: 'Object-Oriented Python & Data Structures',
    description: 'Classes, inheritance, basic algorithms, stack/queue implementations, and time complexity basics.',
    status: 'next-goal',
    category: 'Programming',
  },
  {
    title: 'AI/ML Fundamentals (NumPy & Pandas)',
    description: 'Data manipulation with Pandas, numerical computing with NumPy, and introductory scikit-learn models.',
    status: 'next-goal',
    category: 'Artificial Intelligence',
  },
  {
    title: 'REST APIs & Backend Integration',
    description: 'Learning how to build lightweight endpoints with Python (Flask/FastAPI) and connect them to frontend interfaces.',
    status: 'next-goal',
    category: 'Web Development',
  },
  {
    title: 'More Collegiate Hackathons',
    description: 'Participating in upcoming university and regional student hackathons to build collaborative prototypes.',
    status: 'next-goal',
    category: 'Activities',
  },
  {
    title: 'Open Source Contributions',
    description: 'Finding beginner-friendly "good first issue" repositories on GitHub to learn Git branching, pull requests, and code review.',
    status: 'next-goal',
    category: 'Community',
  },
];
