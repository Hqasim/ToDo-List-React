import { createStore } from 'redux'; // Redux Dependency
import tasks from './reducer';

// Create Redux Store
const store = createStore(tasks);

// Exporting Store
export default store;
