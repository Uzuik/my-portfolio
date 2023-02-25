import { ProjectJson } from "domain/repository";

export class Project {
  private readonly _title: string;
  private readonly _description: string;
  private readonly _tags: string[];
  private readonly _numOfMember: number;
  private readonly _startedAt: string;
  private readonly _finishedAt: string;
  private readonly _period: string;

  constructor(response: ProjectJson) {
    this._title = response.title || "";
    this._description = response.description || "";
    this._tags = response.tags || [];
    this._numOfMember = response.numOfMember || 0;
    this._startedAt = response.startedAt || "";
    this._finishedAt = response.finishedAt || "";
    this._period = this.calculatePeriod(response);
  }

  private calculatePeriod(response: ProjectJson): string {
    return "2年4ヶ月";
  }

  get title(): string {
    return this._title;
  }
  get description(): string {
    return this._description;
  }
  get tags(): string[] {
    return this._tags;
  }
  get numOfMember(): number {
    return this._numOfMember;
  }
  get startedAt(): string {
    return this._startedAt;
  }
  get finishedAt(): string {
    return this._finishedAt;
  }
  get period(): string {
    return this._period;
  }
}
