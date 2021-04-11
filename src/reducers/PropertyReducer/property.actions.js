import {
    PROPERTY_FETCHING,
    PROPERTY_FETCHING_SUCCESS,
    PROPERTY_FETCHING_FAILED,
    PROPERTY_LIST_FETCHING,
    PROPERTY_LIST_FETCHING_SUCCESS,
    PROPERTY_LIST_FETCHING_FAILED
} from './property.types';
import { getPropertyList } from '../../services/propertyService'


export const fetchProperties = () => async dispatch => {
    dispatch({
        type: PROPERTY_LIST_FETCHING,
    })
    try {
        const properties = await getPropertyList({ limit: 50 })
        dispatch({
            type: PROPERTY_LIST_FETCHING_SUCCESS,
            payload: properties.data
        })
    } catch (err) {
        dispatch({
            type: PROPERTY_LIST_FETCHING_FAILED,
        })
    }
}

export const setSelectedProperty = (property) => dispatch => {
    dispatch({
        type: PROPERTY_FETCHING,
    })
    dispatch({
        type: PROPERTY_FETCHING_SUCCESS,
        payload: property
    })
} 