import moment from "moment";

class Work {
  id: number;
  jobTitle: string;
  companyName: string;
  companyLogoUrl: string;
  location: string;
  startTime: Date;
  endTime: Date | null;
  tasks: string[];
  projects: string[];

  constructor(
    id: number,
    jobTitle: string,
    companyName: string,
    companyLogoUrl: string,
    location: string,
    startTime: Date,
    endTime: Date | null,
    tasks: string[],
    projects: string[]
  ) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.companyLogoUrl = companyLogoUrl;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.tasks = tasks;
    this.projects = projects;
  }

  get readableStartDate(): string {
    return moment(this.startTime).format("MMMM YYYY");
  }
  get readableEndDate(): string {
    if (!moment(this.endTime).isValid()) {
      return "Present";
    }
    return moment(this.endTime).format("MMMM YYYY");
  }
}

export default Work;
