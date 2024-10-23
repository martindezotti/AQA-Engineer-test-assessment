describe("Search Tests", () => {
  beforeEach(() => {
    cy.visit("https://vite-react-alpha-lemon.vercel.app/");
  });
  it("Match Search Test", () => {
    cy.get("#\\:r0\\:").type("summer");
    cy.get(".MuiGrid-grid-xs-4 > .MuiTypography-root").contains("summer", {
      matchCase: false,
    });
  });
  it("Not Found Test", () => {
    cy.get("#\\:r0\\:").type("Love");
    cy.get("#tracklist > .MuiTypography-root").contains("Not found");
  });
});

describe("Add Tracks", () => {
  beforeEach(() => {
    cy.visit("https://vite-react-alpha-lemon.vercel.app/");
  });
  it("Single Track Test", () => {
    cy.get(":nth-child(1) > .MuiGrid-grid-xs-4 > .MuiTypography-root").contains(
      "Summer Breeze",
    );
    cy.get(":nth-child(1) > .MuiButton-root").click();
    cy.get(".css-sg94qv").should("exist");
    cy.get(
      "#playlist > .MuiBox-root > .MuiGrid-container > .MuiGrid-grid-xs-4 > .MuiTypography-root",
    )
      .should("have.length", 1)
      .contains("Summer Breeze");
  });
  it("Multiple Track Test", () => {
    cy.get("#tracklist > .MuiBox-root").children().should("have.length", 5);
    cy.get(
      ":nth-child(1) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input",
    ).check();
    cy.get(
      ":nth-child(2) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input",
    ).check();
    cy.get(
      ":nth-child(3) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input",
    ).check();
    cy.get(".MuiButton-sizeMedium").should("contain", 3).click();
    cy.get(".css-sg94qv").should("exist");
    cy.get(
      "#playlist > .MuiBox-root > .MuiGrid-container > .MuiGrid-grid-xs-4 > .MuiTypography-root",
    ).should("have.length", 3);
  });
});
