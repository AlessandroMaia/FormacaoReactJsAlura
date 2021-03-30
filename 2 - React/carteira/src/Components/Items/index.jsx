import React from 'react';
import styled from "styled-components";
import Item from '../Item';
import ImageFilter from '../ImageFilter';

const Items = styled.div`
    border-shadow: 4px 4px 20px 0px rgba(0 ,0 ,0 , 0.1);
    border-radius: 10px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font0size: 12px;
`;

export default (props) => {
    return (
        <Items>
            {ImageFilter(props.type)}
            <Item {...props}></Item>
            <span>{props.date}</span>
        </Items>
    )
};