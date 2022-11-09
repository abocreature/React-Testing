import React, { useState } from 'react';

function getList() {
    const taskList = [
        {
            id:1,
            value: "Check the mail"
        },
        {
            id:2,
            value: "Feed the dog"
        }
    ];
}

function ListCrud(props) {
    const [taskList, setTaskList] = useState( getList() );
}