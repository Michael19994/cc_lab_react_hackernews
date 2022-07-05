import React from 'react';

const StoryList = ({stories}) => {

  const storyList = stories.map((story) => {
    return <li>{story.title}</li>
  })
    
  return(
    <>
    <h3>StoryList</h3>
    <ul>
    {storyList}
    </ul>
    </>
)    
}

export default StoryList;