import moment from "moment";

class Work {
  constructor(
    jobTitle,
    companyName,
    companyLogoUrl,
    location,
    startTime,
    endTime,
    tasks,
    projects
  ) {
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.tasks = tasks;
    this.projects = projects;
  }

  get readableStartDate() {
    return moment(this.startTime).format("MMMM YYYY");
  }
  get readableEndDate() {
    if (!moment(this.endTime).isValid()) {
      return "Present";
    }
    return moment(this.endTime).format("MMMM YYYY");
  }
}

export default Work;
