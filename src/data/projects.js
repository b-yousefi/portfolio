import Project from "../models/project";

function importAll(r) {
  return r.keys().map(r);
}

export const projects = [
  new Project(
    1,
    "Bookshop Web Application",
    "An online bookshop with features such as showing books, registering users and placing orders.",
    [
      "displaying books, with pagination",
      "display book information with links to its authors, and categories",
      "filtering books based on author, category and publication",
      "displaying authors with the ability to filter",
      "displaying author information including his/her books",
      "displaying categories with their subcategories and the books in that category",
      "registering user",
      "adding books to the shopping cart",
      "completing the order by choosing the address that is going to be sent to",
      "displaying user information, its profile, addresses, and orders",
      "adding address, marking the place on map",
    ],
    [
      "Java",
      "MySQL",
      "React",
      "Spring Data Rest",
      "Spring Data JPA",
      "Spring Boot Security",
      "Docker",
      "material-ui",
    ],
    importAll(
      require.context("../images/bookshop", false, /\.(png|jpe?g|svg)$/)
    ),
    "https://github.com/b-yousefi/Bookshop"
  ),
  new Project(
    2,
    "Bookshop Microservices",
    "The cloud version of the Bookshop Spring project. The monolithic project is converted to microservices.",
    [],
    [
      "Java",
      "Spring Cloud",
      "Microservices",
      "MongoDB",
      "Swagger",
      "Spring Data Rest",
      "Spring Data JPA",
    ],
    importAll(
      require.context("../images/bookshop-cloud", false, /\.(png|jpe?g|svg)$/)
    ),
    "https://github.com/b-yousefi/Bookshop-Cloud"
  ),
  new Project(
    3,
    "Bookshop Mobile Application",
    "Mobile application developed via react-native for the Bookshop project to provide same abilities as the web application",
    [],
    ["React-Native", "React Redux", "Javascript", "Css"],
    importAll(
      require.context(
        "../images/bookshop-react-native",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
    "https://github.com/b-yousefi/Bookshop-react-native"
  ),
  new Project(
    4,
    "Coboli",
    "Coboli is an IDE for COBOL programming, with the ability to transfer data from/to the IBM Mainframe and pars cobol source code to identify variables.",
    [
      `It is an IDE for COBOL programming which its goal is to replace a really old emulator`,
      `It communicates with mainframe though FTP communications and brings the source codes to developers’ operation system where they can browse their codes in a much more user friendlier environment while exploiting provided facilities such as "Syntax Highlighting", "Find Usage", "Go to definition”, "Find and Replace", and other features that make programming easier. In addition, developers can "Build", "Promote", "New" and "Run" codes through the program`,
      `It uses a COBOL parser generated by ANTLR to parse COBOL codes and gather information about the variables, paragraphs, and their usages among other things in the code to be able to provide various features to have a better developing experience`,
    ],
    ["Java", "JavaFx", "proguard", "SQLite", "ANTLR"],
    importAll(require.context("../images/Coboli", false, /\.(png|jpe?g|svg)$/)),
    ""
  ),
  new Project(
    5,
    "AGD2DSNA",
    "AGD2DSNA is a Java desktop application which transfers data between different environments, i.e., development, test, and operating.",
    [
      "ordering tables for insert and delete based on their relations, a child record must be inserted after its parents",
      "changing some of the fields in order to comply with the existing records in the database. For example, replacing the customer ID of a real customer's data obtained from operating environment to a test customer ID existing in a development environment",
      "handling duplicate records, created after changing fields which are part of primary keys such as branch code, by changing their primarykeys. In addition, any change in primary key fields must be applied to all their children respectively",
    ],
    ["Java", "JavaFX", "JDBC", "IBM Db2", "proguard", "Multithreading"],
    importAll(
      require.context("../images/AGD2DSNA", false, /\.(png|jpe?g|svg)$/)
    ),
    // [require("../images/AGD2DSNA/1.jpg"), require("../images/AGD2DSNA/2.jpg")],
    ""
  ),
  new Project(
    6,
    "Bill Discounting Facility",
    "We analyzed, designed and developed Bill Discounting services, a method of trading the bill of exchange, cheque, promissory note or letter of credit (LC).",
    [
      "Bill Discounting is a method of trading the bill of exchange, cheque, promissory note or letter of credit (LC), to the bank before it gets matured, at a price that is in a smaller amount than its par value. The discount on the bill of exchange will be based on the remaining time for its maturity and also the risk concerned in it.\n" +
        "We analyzed, designed and developed Bill Discounting services for several banks in Iran with large number of customers such as Bank Melli Iran, Bank Saderat Iran and Ayandeh Bank.",
    ],
    [
      "Analysis",
      "Design",
      "Facility Services",
      "IBM Db2",
      "Cobol",
      "ISPF",
      "CICS",
    ],
    [require("../images/bank.jpg")],
    ""
  ),
  new Project(
    7,
    "Mobile Banking Android Application",
    "We developed native Android applications for several prominent banks in Iran.",
    [],
    ["Java", "Spring", "SQLite", "Android SDK", "Retrofit"],
    importAll(
      require.context("../images/android", false, /\.(png|jpe?g|svg)$/)
    ),
    ""
  ),
  new Project(
    8,
    "wRebeca",
    "wRebca is a tool for modeling and verification of protocols in static or dynamic networks.",
    [
      "wRebca is a tool for modeling and verification of protocols in static or dynamic networks. We refer to a network with more than one possible topology as a dynamic network; such as mobile Ad Hoc Networks (MANETs) in which topology is constantly changing",
      "It uses ANTLR, which is a powerful parser generator, to translate a model given in a high-level actor-based modeling language to a several classes. The generated code will be compiled dynamically and run to verify given properties, like loop-freedom property in a routing protocol, against the model",
    ],
    ["Java", "Swing", "Antlr", "Rebeca", "Actor", "Multithreading"],
    importAll(
      require.context("../images/wRebeca", false, /\.(png|jpe?g|svg)$/)
    ),
    "https://github.com/b-yousefi/wRebeca"
  ),
];
