class Project {
  constructor(
    id,
    name,
    summary,
    description,
    technologies,
    pic,
    sourceCodeLink,
    demoLink
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.summary = summary;
    this.technologies = technologies;
    this.pic = pic;
    this.sourceCodeLink = sourceCodeLink;
    this.demoLink = demoLink;
  }
}

export default Project;
