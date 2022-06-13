import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ConsultantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SMEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConsultantProjectsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Consultant {
  readonly id: string;
  readonly name: string;
  readonly sme?: SME | null;
  readonly projects?: (ConsultantProjects | null)[] | null;
  readonly tickets?: (Ticket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Consultant, ConsultantMetaData>);
  static copyOf(source: Consultant, mutator: (draft: MutableModel<Consultant, ConsultantMetaData>) => MutableModel<Consultant, ConsultantMetaData> | void): Consultant;
}

export declare class SME {
  readonly id: string;
  readonly name: string;
  readonly consultant?: (Consultant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SME, SMEMetaData>);
  static copyOf(source: SME, mutator: (draft: MutableModel<SME, SMEMetaData>) => MutableModel<SME, SMEMetaData> | void): SME;
}

export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly desc?: string | null;
  readonly tech_stack?: string | null;
  readonly consultants?: (ConsultantProjects | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Ticket {
  readonly id: string;
  readonly ticket_number: number;
  readonly ticket_name: string;
  readonly ticket_desc?: string | null;
  readonly assigned?: string | null;
  readonly started?: string | null;
  readonly due?: string | null;
  readonly status?: number | null;
  readonly consultant: Consultant;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ticket, TicketMetaData>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}

export declare class Comment {
  readonly id: string;
  readonly comment: string;
  readonly ticket: Ticket;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class ConsultantProjects {
  readonly id: string;
  readonly consultant: Consultant;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ConsultantProjects, ConsultantProjectsMetaData>);
  static copyOf(source: ConsultantProjects, mutator: (draft: MutableModel<ConsultantProjects, ConsultantProjectsMetaData>) => MutableModel<ConsultantProjects, ConsultantProjectsMetaData> | void): ConsultantProjects;
}