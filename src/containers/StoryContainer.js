import React, {useState, useEffect} from "react";
import StoryDetails from "../components/StoryDetails";
import StoryList from "../components/StoryList";

const StoryContainer = () => {

  const [ storiesId, setStoriesId ] = useState( [] )
  const [ storiesDetails, setStoriesDetails ] = useState( [] )
  const [ selectedStory, setSelectedStory ] = useState( null )

    async function getStoriesId () {
        const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        const response = await fetch(url);
        const data = await response.json();
        setStoriesId(data);
        getStoriesDetails(data);
      }

    const getStoriesDetails = async ( data ) => {
      const updatedData = data.splice(20);
      const promises = updatedData.map(async(storyId) => {
        const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
        
      } )
      const stories = await Promise.all(promises);
      
   
      setStoriesDetails(stories)


    }

    useEffect(() => {
        getStoriesId();
    }, []);

  
  return (
    <>
    <h1>This is a StoryContainer</h1>
    <StoryList stories={storiesDetails}/>
    <StoryDetails/>
    </>
  )

}

export default StoryContainer;