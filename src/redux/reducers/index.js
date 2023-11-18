import { combineReducers } from "redux";

import projectReducer from './project.reducer'
import selectedReducer from './selected.reducer'
import sprintReducer from './sprint.reducer'
import boardReducer from './board.reducer'
import backlogReducer from './backlog.reducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    selected: selectedReducer,
    sprints: sprintReducer,
    boards: boardReducer,
    backlog: backlogReducer
 });
 
 
 export default rootReducer;