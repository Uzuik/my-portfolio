import type { IProjectDriver, ResponseProjects } from "domain/repository";

export class ProjectMockDriver implements IProjectDriver {
  readAll(): Promise<ResponseProjects> {
    return fetch(`http://localhost:3000/api/projects`).then((data) => data.json());
  }
}
