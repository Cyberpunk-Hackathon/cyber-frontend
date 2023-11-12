import React from 'react';

const IssueCard = ({ priority }) => {
    return (
        <div className='issuecard'>
            <span className='issue-heading'>Issue ID  : CAA-123 Title - Average Feedback Page</span>
            <div className='issue-body'>
                <div className='issue-content'>
                    <span>
                        As a registered user, I want to be able to reset my password easily, so that I can regain access to my account if I forget my login credentials
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