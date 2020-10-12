import Project from "../models/project";
import bookshopPic from "../images/bookshop.jpg";
import wRebecaPic from "../images/wRebeca.jpg";
import coboliPic from "../images/Coboli/coboli-main.jpg";
import aged2dsna from "../images/AGD2DSNA/2.jpg";
import bookshopCloudPic from "../images/bookshop-cloud.jpg";
import bankPic from "../images/bank.jpg";
import androidPic from "../images/tosan.jpg";
import bookshopRNPic from "../images/bookshop-react-native.jpg";

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
    bookshopPic,
    "https://github.com/b-yousefi/Bookshop"
  ),
  new Project(
    2,
    "Bookshop Microservices",
    "The cloud version of the Bookshop Spring project. The monolithic project is converted to microservices.",
    [],
    ["Java", "Spring Cloud", "Microservices", "MongoDB", "Swagger"],
    bookshopCloudPic,
    "https://github.com/b-yousefi/Bookshop-Cloud"
  ),
  new Project(
    2,
    "Bookshop Mobile Application",
    "Mobile application developed via react-native for the Bookshop project to provide same abilities as the web application",
    [],
    ["React-Native", "React Redux", "Javascript", "Css"],
    bookshopRNPic,
    "https://github.com/b-yousefi/Bookshop-react-native"
  ),
  new Project(
    4,
    "Coboli",
    "Coboli is an IDE for COBOL programming, with the ability to transfer data from/to the IBM Mainframe and pars cobol source code to identify variables.",
    [],
    ["Java", "JavaFx", "proguard", "SQLite", "ANTLR"],
    coboliPic,
    ""
  ),
  new Project(
    5,
    "AGD2DSNA",
    "AGD2DSNA is a Java desktop application which transfers data between different environments, i.e., development, test, and operating.",
    [],
    ["Java", "JavaFX", "JDBC", "IBM Db2", "proguard", "Multithreading"],
    aged2dsna,
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
    bankPic,
    ""
  ),
  new Project(
    7,
    "Mobile Banking Android Application",
    "We developed native Android applications for several prominent banks in Iran.",
    [],
    ["Java", "Spring", "SQLite", "Android SDK", "Retrofit"],
    androidPic,
    ""
  ),
  new Project(
    8,
    "wRebeca",
    "wRebca is a tool for modeling and verification of protocols in static or dynamic networks.",
    [],
    ["Java", "Swing", "Antlr", "Rebeca", "Actor", "Multithreading"],
    wRebecaPic,
    "https://github.com/b-yousefi/wRebeca"
  ),
];
