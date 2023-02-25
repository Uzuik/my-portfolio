import { Project } from "domain/models";

export interface IProjectRepository {
  readAll(): Promise<Project[]>;
}

export interface IProjectDriver {
  readAll(): Promise<ResponseProjects>
}

export type ProjectJson = {
  title?: string;
  description?: string;
  tags?: string[];
  numOfMember?: number;
  startedAt?: string;
  finishedAt?: string;
};

export type ResponseProjects = ProjectJson[];

export class ProjectRepository implements IProjectRepository {
  readonly driver: IProjectDriver;

  constructor(driver: IProjectDriver) {
    this.driver = driver;
  }

  async readAll(): Promise<Project[]> {
    const projects = await this.driver.readAll();

    return projects.map((project) => new Project(project));
  }
}
