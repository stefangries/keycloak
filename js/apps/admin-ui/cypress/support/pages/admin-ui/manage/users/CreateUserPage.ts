export default class CreateUserPage {
  usernameInput: string;
  usersEmptyState: string;
  emptyStateCreateUserBtn: string;
  addUserBtn: string;
  joinGroupsBtn: string;
  joinBtn: string;
  saveBtn: string;
  cancelBtn: string;

  constructor() {
    this.usernameInput = "#username";

    this.usersEmptyState = "empty-state";
    this.emptyStateCreateUserBtn = "no-users-found-empty-action";
    this.addUserBtn = "add-user";
    this.joinGroupsBtn = "join-groups-button";
    this.joinBtn = "join-button";
    this.saveBtn = "create-user";
    this.cancelBtn = "cancel-create-user";
  }

  //#region General Settings
  createUser(username: string) {
    cy.get(this.usernameInput).clear();

    if (username) {
      cy.get(this.usernameInput).type(username);
    }

    return this;
  }

  goToCreateUser() {
    cy.get("body").then((body) => {
      if (body.find(`[data-testid=${this.addUserBtn}]`).length > 0) {
        cy.findByTestId(this.addUserBtn).click({ force: true });
      } else {
        cy.findByTestId(this.emptyStateCreateUserBtn).click({ force: true });
      }
    });

    return this;
  }

  toggleAddGroupModal() {
    cy.findByTestId(this.joinGroupsBtn).click();

    return this;
  }

  joinGroups() {
    cy.findByTestId(this.joinBtn).click();

    return this;
  }

  save() {
    cy.findByTestId(this.saveBtn).click();

    return this;
  }

  cancel() {
    cy.findByTestId(this.cancelBtn).click();

    return this;
  }
}
