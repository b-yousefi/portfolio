import Project from "../models/project";
// import androidPic from "../images/tosan.jpg";
// import bookshopRNPic from "../images/bookshop-react-native.jpg";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/android", false, /\.(png|jpe?g|svg)$/)
);

console.log(images.length);

export const projects = [
  new Project(
    1,
    "Bookshop Web Application",
    "An online bookshop with features such as showing books, registering users and placing orders.",
    [],
    [
      "Java",
      "MySQL",
      "React",
      "Spring Boot (Rest, Security, Data)",
      "Docker",
      "material-ui",
    ],
    [require("../images/bookshop/1.jpg")],
    "https://github.com/b-yousefi/Bookshop"
  ),
  new Project(
    2,
    "Bookshop Microservices",
    "The cloud version of the Bookshop Spring project. The monolithic project is converted to microservices.",
    [],
    ["Java", "Spring Cloud", "Microservices", "MongoDB", "Swagger"],
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
    [],
    ["Java", "JavaFx", "proguard", "SQLite", "ANTLR"],
    importAll(require.context("../images/Coboli", false, /\.(png|jpe?g|svg)$/)),
    ""
  ),
  new Project(
    5,
    "AGD2DSNA",
    "AGD2DSNA is a Java desktop application which transfers data between different environments, i.e., development, test, and operating.",
    [],
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
    [],
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
    [],
    ["Java", "Swing", "Antlr", "Rebeca", "Actor", "Multithreading"],
    importAll(
      require.context("../images/wRebeca", false, /\.(png|jpe?g|svg)$/)
    ),
    "https://github.com/b-yousefi/wRebeca"
  ),
];
