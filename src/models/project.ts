class Project {
  id: number;
  name: string;
  summary: string;
  description: string[];
  technologies: string[];
  images: string[];
  sourceCodeLink: string;
  demoLink?: string;

  constructor(
    id: number,
    name: string,
    summary: string,
    description: string[],
    technologies: string[],
    images: string[],
    sourceCodeLink: string,
    demoLink?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.summary = summary;
    this.technologies = technologies;
    this.images = images;
    this.sourceCodeLink = sourceCodeLink;
    this.demoLink = demoLink;
  }
}

export default Project;
