const initState = {
    themeId: 1,
}
type ChangeThemeIdAT = ReturnType<typeof changeThemeId>

export type InitStateType = typeof initState

export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => (
    {
        type: 'SET_THEME_ID' as const,
        id
    }
)
// fix any



type ActionsType = ChangeThemeIdAT