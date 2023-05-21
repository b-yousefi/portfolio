import { StaticImageData } from "next/image";

class PersonalInfo {
  fullName: string;
  role: string;
  education: string;
  pic: StaticImageData;
  summary: string;
  lookingFor: string;
  linkedInAccountUrl: string;
  githubAccountUrl: string;

  constructor(
    fullName: string,
    role: string,
    education: string,
    pic: StaticImageData,
    summary: string,
    lookingFor: string,
    linkedInAccountUrl: string,
    githubAccountUrl: string
  ) {
    this.fullName = fullName;
    this.role = role;
    this.education = education;
    this.pic = pic;
    this.summary = summary;
    this.lookingFor = lookingFor;
    this.linkedInAccountUrl = linkedInAccountUrl;
    this.githubAccountUrl = githubAccountUrl;
  }
}

export default PersonalInfo;
