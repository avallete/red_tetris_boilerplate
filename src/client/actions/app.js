export const constants = {
  INIT_APP: 'App/INIT_APP',
}

export function initApp() {
  return {
    type: constants.INIT_APP,
  }
}
