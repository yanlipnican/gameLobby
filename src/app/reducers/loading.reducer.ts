import { ActionReducer, Action } from '@ngrx/store';
import { state } from '@angular/core';

export interface LoadingState{
    userFetch: boolean;
};

const initialState = {
    userFetch: false
};

export const USER_FETCH_LOADING_START = 'USER_FETCH_LOADING_START';
export const USER_FETCH_LOADING_STOP = 'USER_FETCH_LOADING_STOP';

export function LoadingReducer(state = initialState,  action: Action) {
    switch (action.type) {
        case USER_FETCH_LOADING_START:
            state.userFetch = true;
            break;
        case USER_FETCH_LOADING_STOP:
            state.userFetch = false;
            break;
    }

    console.log(state);

    return Object.assign({}, state);
}