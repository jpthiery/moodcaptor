export const groups = store => store.groups

export const existingGroups = store => groups(store).existing

export const nav = store => store.nav

export const redirectTo = store => nav(store).redirectTo
