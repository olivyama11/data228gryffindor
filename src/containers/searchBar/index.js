import React, {Component} from 'react';
import {Input, AutoComplete} from 'antd';
import { SearchOutlined } from '@ant-design/icons';


class SearchBar extends Component {


    render() {

        return (
            <AutoComplete
                className="searchBar"
                size="large"
                placeholder="Search"
                optionLabelProp="text"
            >
                <Input  ref="search_term" suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>}
                />
            </AutoComplete>
        );
    }
}



export default SearchBar;