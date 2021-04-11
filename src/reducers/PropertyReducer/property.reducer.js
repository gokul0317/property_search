import {
    PROPERTY_FETCHING,
    PROPERTY_FETCHING_SUCCESS,
    PROPERTY_FETCHING_FAILED,
    PROPERTY_LIST_FETCHING,
    PROPERTY_LIST_FETCHING_SUCCESS,
    PROPERTY_LIST_FETCHING_FAILED
} from './property.types';

const INITIAL_STATE = {
    listLoading: false,
    propertyList: [],
    selectedProperty: {},
    selectedPropertyLoading: false,
};

const propertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROPERTY_FETCHING:
            return { ...state, selectedPropertyLoading: true }
        case PROPERTY_FETCHING_FAILED:
            return { ...state, selectedPropertyLoading: false }
        case PROPERTY_FETCHING_SUCCESS:
            return { ...state, selectedProperty: action.payload, selectedPropertyLoading: false }
        case PROPERTY_LIST_FETCHING:
            return { ...state, listLoading: true }
        case PROPERTY_LIST_FETCHING_FAILED:
            return { ...state, listLoading: false }
        case PROPERTY_LIST_FETCHING_SUCCESS:
            return { ...state, propertyList: action.payload, listLoading: false }
        default:
            return state;
    }
};

export default propertyReducer;
