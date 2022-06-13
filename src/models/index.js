// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Consultant, SME, Project, Ticket, Comment, ConsultantProjects } = initSchema(schema);

export {
  Consultant,
  SME,
  Project,
  Ticket,
  Comment,
  ConsultantProjects
};