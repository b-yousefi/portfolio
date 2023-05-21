import Work from "../models/work";

export const works = [
  new Work(
    1,
    "Software Development Engineer (L5)",
    "Amazon",
    "",
    "Toronto, ON",
    new Date("2022-11-14"),
    new Date("2023-06-26"),
    [
      "Designed and implemented distributed data processing pipelines using Spark and Scala, utilizing Scala's functional and object-oriented features to enable efficient processing and analysis of large-scale datasets across multiple nodes.",
      "Employed Infrastructure as Code (IaC) principles with AWS CDK to develop and maintain AWS infrastructure, gaining experience in cloud-based infrastructure management and best practices.",
      "Leveraged AWS Glue jobs to efficiently load input data, transform, process, and produce clean and structured output for downstream use, facilitating data analysis and decision-making processes.",
      "Developed custom CloudWatch dashboards to provide real-time visibility into AWS resource usage and performance, improving resource management and troubleshooting capabilities.",
      "Collaborated with team members to troubleshoot issues and provide support to our customers.",
    ],
    []
  ),
  new Work(
    2,
    "Senior Backend Engineer",
    "Labforward",
    "",
    "Berlin, Germany",
    new Date("2022-10-30"),
    new Date("2022-03-01"),
    [
      "Led a redesigning project to improve performance and ensure data integrity",
      "Worked with Elasticsearch and Kibana to implement an efficient search API",
      "Participated in the deployment process via AWS",
    ],
    []
  ),
  new Work(
    3,
    "Full Stack Developer",
    "Labforward",
    "",
    "Berlin, Germany",
    new Date("2021-03-01"),
    new Date("2022-03-01"),
    [
      "Designed and developed RESTful web services using Spring framework and MySQL",
      "Refactored existing codes to make them cleaner and more structured",
      "Focused on improving the performance, decreased response time of existing services",
      "Provided acceptable test coverage via unit tests (Junit), integration tests (Mockito), e2e tests (Cypress)",
      "Worked in an Agile software development setup",
    ],
    []
  ),
  new Work(
    4,
    "Full Stack Developer",
    "",
    "",
    "Tehran, Iran",
    new Date("2020-04-01"),
    new Date("2021-02-01"),
    [
      "worked with new frameworks and platforms like: Spring Boot (MVC, REST, Security, Cloud), React.js, Redux, ReactNative, Docker, Django Rest Framework",
      " Analyzed, designed, developed, tested and deployed an online bookshop",
      "worked with AWS services such as EC2, ECS, Lambda, S3, RDS, DynamoDB, Elastic Beanstalk, CloudFormation,\n" +
        "CodeCommit, CodeBuild, CodeDeploy, CodePipeline and etc",
    ],
    []
  ),
  new Work(
    5,
    "Software Designer and Mainframe Developer",
    "ISC (Informatics Services Corporation)",
    "",
    "Tehran, Iran",
    new Date("2017-11-01"),
    new Date("2019-10-01"),
    [
      "Collaborated with senior developers to gather requirements, analyze and design new loan services",
      "Improved existing codes by refactoring and simplifying the solutions to increase readability and test-ability and decrease\n" +
        "failure risks",
      "Worked with sensitive data through designing, querying, and manipulating relational database tables",
      "Collaborated closely with team members and members of UI, test, operation, and database teams to accomplish the\n" +
        "ultimate goal, customer satisfaction",
      " Identified shortcomings in development's environment and took innovative approaches by designing and developing two\n" +
        "java desktop applications to facilitate programming and debugging for the developers",
    ],
    []
  ),
  new Work(
    6,
    "Java Developer",
    "TOSAN (Banking and Payment Solutions Provider)",
    "",
    "Tehran, Iran",
    new Date("2016-05-01"),
    new Date("2017-08-01"),
    [
      "Developed native Android applications for several prominent banks in Iran",
      "Developed services using Spring Boot framework",
      "Tested services to guarantee backward and forward compatibility",
      "Worked in Scrum / Agile environment",
      "Consistently beat deadlines and finished assigned tasks usually one day before the Sprint ended",
      "Researched new technologies and incorporated them to the existing applications",
    ],
    []
  ),
];
