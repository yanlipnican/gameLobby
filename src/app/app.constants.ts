/**
 * This file contains all constants in project under app module.
 * just use `import { CONSTANT } from 'app/app.constants'`.
 */

/**
 * API server adress.
 */
export const API_ADDRESS = 'http://api.gamelobby.dev';
/**
 * Api paths
 */
export const API_PATH = {
    LOGIN : '/api/login',
    USER_PROFILE: '/api/get_profile',
};


/**
 * Key to localstorage under which is saved auth token.
 */
export const LOCALSTORAGE_TOKEN_KEY = '__Token_gameLobby';