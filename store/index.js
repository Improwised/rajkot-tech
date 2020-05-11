/* eslint-disable no-unused-vars */
import Vuex from 'vuex';
import initialStates from '@/store/state';
import mutationsObj from '@/store/mutations';
import gettersObj from '@/store/getters';

export const strict = false;

export const state = initialStates;

export const mutations = mutationsObj;

export const getters = gettersObj;
