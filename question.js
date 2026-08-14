let questions = [
  // ==================== WEB BASICS ====================

  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },

  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },

  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },

  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },

  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },


  // ==================== OOPS ====================

  {
    numb: 6,
    question: "Which of the following is NOT a pillar of OOP?",
    answer: "Compilation",
    options: [
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
      "Compilation"
    ]
  },

  {
    numb: 7,
    question: "Which OOP concept allows the same function to behave differently?",
    answer: "Polymorphism",
    options: [
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
      "Abstraction"
    ]
  },

  {
    numb: 8,
    question: "Which concept hides the internal implementation details?",
    answer: "Abstraction",
    options: [
      "Inheritance",
      "Abstraction",
      "Polymorphism",
      "Overloading"
    ]
  },

  {
    numb: 9,
    question: "What is the process of wrapping data and methods into a single unit called?",
    answer: "Encapsulation",
    options: [
      "Inheritance",
      "Encapsulation",
      "Abstraction",
      "Polymorphism"
    ]
  },

  {
    numb: 10,
    question: "Which feature allows a class to acquire properties of another class?",
    answer: "Inheritance",
    options: [
      "Encapsulation",
      "Abstraction",
      "Inheritance",
      "Polymorphism"
    ]
  },

  {
    numb: 11,
    question: "Which keyword is used to create an object dynamically in C++?",
    answer: "new",
    options: [
      "create",
      "object",
      "new",
      "malloc"
    ]
  },

  {
    numb: 12,
    question: "Which function is automatically called when an object is created?",
    answer: "Constructor",
    options: [
      "Destructor",
      "Constructor",
      "Main function",
      "Virtual function"
    ]
  },

  {
    numb: 13,
    question: "Which function is automatically called when an object is destroyed?",
    answer: "Destructor",
    options: [
      "Constructor",
      "Destructor",
      "Delete function",
      "Destroy function"
    ]
  },

  {
    numb: 14,
    question: "What is function overloading?",
    answer: "Same function name with different parameters",
    options: [
      "Same function with same parameters",
      "Different function names with same parameters",
      "Same function name with different parameters",
      "Overriding a variable"
    ]
  },

  {
    numb: 15,
    question: "Which keyword is used to achieve runtime polymorphism in C++?",
    answer: "virtual",
    options: [
      "static",
      "virtual",
      "friend",
      "inline"
    ]
  },


  // ==================== DSA ====================

  {
    numb: 16,
    question: "Which data structure follows LIFO?",
    answer: "Stack",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ]
  },

  {
    numb: 17,
    question: "Which data structure follows FIFO?",
    answer: "Queue",
    options: [
      "Stack",
      "Queue",
      "Tree",
      "Graph"
    ]
  },

  {
    numb: 18,
    question: "What is the time complexity of accessing an element in an array using its index?",
    answer: "O(1)",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ]
  },

  {
    numb: 19,
    question: "What is the average time complexity of searching in a HashMap?",
    answer: "O(1)",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ]
  },

  {
    numb: 20,
    question: "Which data structure is commonly used to implement BFS?",
    answer: "Queue",
    options: [
      "Stack",
      "Queue",
      "Heap",
      "HashMap"
    ]
  },

  {
    numb: 21,
    question: "Which data structure is commonly used to implement DFS?",
    answer: "Stack",
    options: [
      "Queue",
      "Stack",
      "Heap",
      "HashMap"
    ]
  },

  {
    numb: 22,
    question: "What is the time complexity of binary search on a sorted array?",
    answer: "O(log n)",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ]
  },

  {
    numb: 23,
    question: "Which sorting algorithm has an average time complexity of O(n log n)?",
    answer: "Merge Sort",
    options: [
      "Bubble Sort",
      "Selection Sort",
      "Merge Sort",
      "Linear Search"
    ]
  },

  {
    numb: 24,
    question: "Which data structure is best suited for checking balanced parentheses?",
    answer: "Stack",
    options: [
      "Queue",
      "Stack",
      "Array",
      "Heap"
    ]
  },

  {
    numb: 25,
    question: "What is the worst-case time complexity of linear search?",
    answer: "O(n)",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ]
  },

  {
    numb: 26,
    question: "Which technique is used to find two numbers whose sum equals a target efficiently?",
    answer: "Hashing",
    options: [
      "Hashing",
      "Recursion only",
      "BFS",
      "DFS"
    ]
  },

  {
    numb: 27,
    question: "Which data structure provides the minimum element efficiently when implemented as a Min Heap?",
    answer: "Heap",
    options: [
      "Stack",
      "Queue",
      "Heap",
      "Linked List"
    ]
  },


  // ==================== COMPUTER NETWORKS ====================

  {
    numb: 28,
    question: "Which device forwards packets between different networks?",
    answer: "Router",
    options: [
      "Switch",
      "Hub",
      "Router",
      "Repeater"
    ]
  },

  {
    numb: 29,
    question: "Which protocol is used to translate domain names into IP addresses?",
    answer: "DNS",
    options: [
      "HTTP",
      "DNS",
      "FTP",
      "ARP"
    ]
  },

  {
    numb: 30,
    question: "Which protocol is used to map an IP address to a MAC address?",
    answer: "ARP",
    options: [
      "DNS",
      "ARP",
      "HTTP",
      "TCP"
    ]
  },

  {
    numb: 31,
    question: "Which protocol provides reliable and ordered data delivery?",
    answer: "TCP",
    options: [
      "UDP",
      "IP",
      "TCP",
      "ARP"
    ]
  },

  {
    numb: 32,
    question: "Which protocol is generally faster because it does not establish a connection?",
    answer: "UDP",
    options: [
      "TCP",
      "UDP",
      "HTTP",
      "FTP"
    ]
  },

  {
    numb: 33,
    question: "Which device primarily uses MAC addresses to forward frames?",
    answer: "Switch",
    options: [
      "Router",
      "Switch",
      "DNS Server",
      "Firewall"
    ]
  },

  {
    numb: 34,
    question: "What is the default port number of HTTP?",
    answer: "80",
    options: [
      "21",
      "25",
      "80",
      "443"
    ]
  },

  {
    numb: 35,
    question: "What is the default port number of HTTPS?",
    answer: "443",
    options: [
      "80",
      "110",
      "443",
      "22"
    ]
  },

  {
    numb: 36,
    question: "Which layer of the OSI model is responsible for routing?",
    answer: "Network Layer",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Application Layer"
    ]
  },

  {
    numb: 37,
    question: "Which protocol is commonly used for secure remote login?",
    answer: "SSH",
    options: [
      "FTP",
      "HTTP",
      "SSH",
      "SMTP"
    ]
  },


  // ==================== LOGICAL THINKING ====================

  {
    numb: 38,
    question: "If 2 + 3 = 10, 3 + 4 = 21, then 4 + 5 = ?",
    answer: "36",
    options: [
      "20",
      "30",
      "36",
      "45"
    ]
  },

  {
    numb: 39,
    question: "Find the next number: 2, 4, 8, 16, ?",
    answer: "32",
    options: [
      "24",
      "30",
      "32",
      "36"
    ]
  },

  {
    numb: 40,
    question: "Find the next number: 1, 4, 9, 16, ?",
    answer: "25",
    options: [
      "20",
      "24",
      "25",
      "30"
    ]
  },

  {
    numb: 41,
    question: "If all cats are animals and some animals are black, which statement is definitely true?",
    answer: "All cats are animals",
    options: [
      "All cats are black",
      "Some cats are black",
      "All cats are animals",
      "No cats are black"
    ]
  },

  {
    numb: 42,
    question: "A train travels 60 km in 1 hour. How far will it travel in 3 hours?",
    answer: "180 km",
    options: [
      "120 km",
      "150 km",
      "180 km",
      "240 km"
    ]
  },

  {
    numb: 43,
    question: "If 5 machines make 5 products in 5 minutes, how many machines are needed to make 100 products in 5 minutes?",
    answer: "100",
    options: [
      "20",
      "50",
      "100",
      "500"
    ]
  },

  {
    numb: 44,
    question: "A number is doubled and then 10 is added. The result is 30. What is the number?",
    answer: "10",
    options: [
      "5",
      "10",
      "15",
      "20"
    ]
  },

  {
    numb: 45,
    question: "If today is Monday, what day will it be after 10 days?",
    answer: "Thursday",
    options: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ]
  },

  {
    numb: 46,
    question: "Find the odd one out.",
    answer: "Apple",
    options: [
      "Mango",
      "Banana",
      "Apple",
      "Carrot"
    ]
  },

  {
    numb: 47,
    question: "If A = 1, B = 2, C = 3, what is the value of CAB?",
    answer: "312",
    options: [
      "123",
      "213",
      "312",
      "321"
    ]
  },

  {
    numb: 48,
    question: "A clock shows 3:00. What is the angle between the hour and minute hands?",
    answer: "90 degrees",
    options: [
      "45 degrees",
      "60 degrees",
      "90 degrees",
      "180 degrees"
    ]
  }
];