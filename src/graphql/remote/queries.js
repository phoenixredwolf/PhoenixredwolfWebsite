/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConsultant = /* GraphQL */ `
  query GetConsultant($id: ID!) {
    getConsultant(id: $id) {
      id
      name
      sme {
        id
        name
        consultant {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      projects {
        items {
          id
          consultantID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      tickets {
        items {
          id
          ticket_number
          ticket_name
          ticket_desc
          assigned
          started
          due
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          consultantTicketsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sMEConsultantId
    }
  }
`;
export const listConsultants = /* GraphQL */ `
  query ListConsultants(
    $filter: ModelConsultantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsultants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sme {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        projects {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sMEConsultantId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConsultants = /* GraphQL */ `
  query SyncConsultants(
    $filter: ModelConsultantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsultants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        sme {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        projects {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sMEConsultantId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSME = /* GraphQL */ `
  query GetSME($id: ID!) {
    getSME(id: $id) {
      id
      name
      consultant {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sMEConsultantId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSMES = /* GraphQL */ `
  query ListSMES(
    $filter: ModelSMEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSMES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        consultant {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSMES = /* GraphQL */ `
  query SyncSMES(
    $filter: ModelSMEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSMES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        consultant {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      desc
      tech_stack
      consultants {
        items {
          id
          consultantID
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        tech_stack
        consultants {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        desc
        tech_stack
        consultants {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      ticket_number
      ticket_name
      ticket_desc
      assigned
      started
      due
      status
      consultant {
        id
        name
        sme {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        projects {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sMEConsultantId
      }
      comments {
        items {
          id
          comment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          ticketCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consultantTicketsId
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ticket_number
        ticket_name
        ticket_desc
        assigned
        started
        due
        status
        consultant {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sMEConsultantId
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        consultantTicketsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTickets = /* GraphQL */ `
  query SyncTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTickets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ticket_number
        ticket_name
        ticket_desc
        assigned
        started
        due
        status
        consultant {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sMEConsultantId
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        consultantTicketsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      ticket {
        id
        ticket_number
        ticket_name
        ticket_desc
        assigned
        started
        due
        status
        consultant {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sMEConsultantId
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        consultantTicketsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ticketCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        ticket {
          id
          ticket_number
          ticket_name
          ticket_desc
          assigned
          started
          due
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          consultantTicketsId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ticketCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment
        ticket {
          id
          ticket_number
          ticket_name
          ticket_desc
          assigned
          started
          due
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          consultantTicketsId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ticketCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getConsultantProjects = /* GraphQL */ `
  query GetConsultantProjects($id: ID!) {
    getConsultantProjects(id: $id) {
      id
      consultantID
      projectID
      consultant {
        id
        name
        sme {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        projects {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sMEConsultantId
      }
      project {
        id
        name
        desc
        tech_stack
        consultants {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listConsultantProjects = /* GraphQL */ `
  query ListConsultantProjects(
    $filter: ModelConsultantProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsultantProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        consultantID
        projectID
        consultant {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sMEConsultantId
        }
        project {
          id
          name
          desc
          tech_stack
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConsultantProjects = /* GraphQL */ `
  query SyncConsultantProjects(
    $filter: ModelConsultantProjectsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsultantProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        consultantID
        projectID
        consultant {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sMEConsultantId
        }
        project {
          id
          name
          desc
          tech_stack
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
