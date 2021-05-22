import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../seach-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'qwesd' },
        {label: 'And JavaScript', important: false, id: 'sdsdsds'},
        {label: 'And dont forgot about HTML/CSS', important: false, id: 'xxdd'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>

    )
}

export default App;