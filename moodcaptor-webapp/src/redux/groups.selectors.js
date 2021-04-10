export const groups = store => store.groups

export const existingGroups = store => {
    return groups(store).existing
}
