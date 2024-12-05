export const colors = {
  background: "#04050a",
  text: "#dde1f1",
  primary: "#94a0da",
  secondary: "#263379",
  accent: "#3a52c8",
};

export const mixins = {
  resetList: `
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  resetLink: `
    text-decoration: none;
  `,
  margin: `
    margin: 0 1rem;
  `,
  modalOverlay: `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
  `,
};

export const Reset = `
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

export const ResetList = `
  list-style-type: none;
  ${Reset};	
`;

export const ResetButton = `
  background-color: transparent;
  border: 0px none;
  ${Reset};	
`;
