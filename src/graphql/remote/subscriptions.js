/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConsultant = /* GraphQL */ `
  subscription OnCreateConsultant {
    onCreateConsultant {
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
export const onUpdateConsultant = /* GraphQL */ `
  subscription OnUpdateConsultant {
    onUpdateConsultant {
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
export const onDeleteConsultant = /* GraphQL */ `
  subscription OnDeleteConsultant {
    onDeleteConsultant {
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
export const onCreateSME = /* GraphQL */ `
  subscription OnCreateSME {
    onCreateSME {
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
export const onUpdateSME = /* GraphQL */ `
  subscription OnUpdateSME {
    onUpdateSME {
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
export const onDeleteSME = /* GraphQL */ `
  subscription OnDeleteSME {
    onDeleteSME {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateConsultantProjects = /* GraphQL */ `
  subscription OnCreateConsultantProjects {
    onCreateConsultantProjects {
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
export const onUpdateConsultantProjects = /* GraphQL */ `
  subscription OnUpdateConsultantProjects {
    onUpdateConsultantProjects {
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
export const onDeleteConsultantProjects = /* GraphQL */ `
  subscription OnDeleteConsultantProjects {
    onDeleteConsultantProjects {
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
