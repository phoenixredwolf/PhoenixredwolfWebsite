/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsultant = /* GraphQL */ `
  mutation CreateConsultant(
    $input: CreateConsultantInput!
    $condition: ModelConsultantConditionInput
  ) {
    createConsultant(input: $input, condition: $condition) {
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
export const updateConsultant = /* GraphQL */ `
  mutation UpdateConsultant(
    $input: UpdateConsultantInput!
    $condition: ModelConsultantConditionInput
  ) {
    updateConsultant(input: $input, condition: $condition) {
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
export const deleteConsultant = /* GraphQL */ `
  mutation DeleteConsultant(
    $input: DeleteConsultantInput!
    $condition: ModelConsultantConditionInput
  ) {
    deleteConsultant(input: $input, condition: $condition) {
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
export const createSME = /* GraphQL */ `
  mutation CreateSME(
    $input: CreateSMEInput!
    $condition: ModelSMEConditionInput
  ) {
    createSME(input: $input, condition: $condition) {
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
export const updateSME = /* GraphQL */ `
  mutation UpdateSME(
    $input: UpdateSMEInput!
    $condition: ModelSMEConditionInput
  ) {
    updateSME(input: $input, condition: $condition) {
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
export const deleteSME = /* GraphQL */ `
  mutation DeleteSME(
    $input: DeleteSMEInput!
    $condition: ModelSMEConditionInput
  ) {
    deleteSME(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createConsultantProjects = /* GraphQL */ `
  mutation CreateConsultantProjects(
    $input: CreateConsultantProjectsInput!
    $condition: ModelConsultantProjectsConditionInput
  ) {
    createConsultantProjects(input: $input, condition: $condition) {
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
export const updateConsultantProjects = /* GraphQL */ `
  mutation UpdateConsultantProjects(
    $input: UpdateConsultantProjectsInput!
    $condition: ModelConsultantProjectsConditionInput
  ) {
    updateConsultantProjects(input: $input, condition: $condition) {
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
export const deleteConsultantProjects = /* GraphQL */ `
  mutation DeleteConsultantProjects(
    $input: DeleteConsultantProjectsInput!
    $condition: ModelConsultantProjectsConditionInput
  ) {
    deleteConsultantProjects(input: $input, condition: $condition) {
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
