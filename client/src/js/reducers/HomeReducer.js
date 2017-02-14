import _ from 'lodash';
import * as HomeActions from '../actions/HomeActions';
import HomeReducerDefaults from './defaults/HomeReducerDefaults';

export default function HomeReducer(state = HomeReducerDefaults, action) {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        /*
        This is were the logic of the actions live. Below is an example:
         case HomeActions.EXAMPLE_ACTION:
             newState.something = action.something;
             break;

        */
    }

    return newState;
}