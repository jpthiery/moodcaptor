export const groups = store => store.groups

export const existingGroups = store => {
    console.log(store)
    return groups(store).existing
}
