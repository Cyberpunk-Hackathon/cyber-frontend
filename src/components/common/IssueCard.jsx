import React from 'react';

const IssueCard = ({ priority, item, onclick }) => {
    return (
        <div className='issuecard' onClick={() => onclick(item)}>
            <span className='issue-heading'>Issue ID: {item.key}   Title: {item.fields?.summary}</span>
            <div className='issue-body'>
                <div className='issue-content'>
                    <span>
                    {item.fields?.summary}
                    </span>
                </div>
                <div className='priority-section'>
                    <span>Priority:</span>
                    <div className='priority'
                        style={{ backgroundColor: item.fields?.priority?.name === 'High' || item.fields?.priority?.name === 'Highest' ? '#C13F32' : item.fields?.priority?.name === 'Medium' ? '#F79C30' : '#25865A' }}
                    >
                        {item.fields?.priority?.name === 'High' || item.fields?.priority?.name === 'Highest' ? 'High' : item.fields?.priority?.name === 'Medium' ? 'Medium' : 'Low'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;