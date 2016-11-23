import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import GitHubSearch from './components/GitHubSearch';
import reducer from './reducers';
import * as actions from './actions';
import logger from './middlewares/Logger';

var enhancer = applyMiddleware(logger);

const store = createStore(reducer, enhancer);

const onSearch = (keyword) => {
  var action =actions.search(keyword);
  store.dispatch(action);
};

const render = () => {
  var {keyword, items} = store.getState();
  ReactDOM.render(
    <GitHubSearch keyword={keyword} items={items} onSearch={onSearch} />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);