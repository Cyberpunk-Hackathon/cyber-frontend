import React from 'react';

const IssueCard = ({ priority, item, onclick }) => {
    return (
        <div className='issuecard' onClick={() => onclick(item)}>
            <span className='issue-heading'>Issue ID: {item.key}   Title: {item.fields?.summary}</span>
            <div className='issue-body'>
                <div className='issue-content'>
                    <span>
                    {item.fields?.description}
                    </span>
                </div>
                <div className='priority-section'>
                    <span>Priority:</span>
                    <div className='priority'
                        style={{ backgroundColor: priority === 0 ? '#25865A' : priority === 1 ? '#F79C30' : '#C13F32' }}
                    >
                        {priority === 0 ? 'Low' : priority === 1 ? 'Medium' : 'High'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;