import { ProjectRepository } from "domain/repository";

export type ProjectObject = {
  title: string;
  description: string;
  tags: string[];
  numOfMember: number;
  startedAt: string;
  finishedAt: string;
  period: string;
};

export interface IGetProjectsUseCase {
  handle(): Promise<ProjectObject[]>;
}

export class GetProjectsUseCase implements IGetProjectsUseCase {
  readonly projectRepository: ProjectRepository;

  constructor(repository: ProjectRepository) {
    this.projectRepository = repository;
  }

  async handle(): Promise<ProjectObject[]> {
    const projects = await this.projectRepository.readAll();

    const ret = projects.map((project) => ({
      title: project.title,
      description: project.description,
      tags: project.tags,
      numOfMember: project.numOfMember,
      startedAt: project.startedAt,
      finishedAt: project.finishedAt,
      period: project.period,
    }));

    return ret;
  }
}
