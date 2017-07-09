import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import QueueList from './components/queue_list';
import HistoryList from './components/history_list';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={QueueList} />
		<Route path="/history" component={HistoryList} />
	</Route>
);
