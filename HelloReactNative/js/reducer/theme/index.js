import Types from '../../action/types';

const defaultSate = {
    theme: 'blue'
};
export default function onAction(state = defaultSate, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }
};