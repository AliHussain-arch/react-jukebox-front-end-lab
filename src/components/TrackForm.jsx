import { useState } from "react";

const TrackForm = ({create, update, setUpdate}) => {

  const [formData, setFormData] = useState({ artist: '', title: '' });

  function handleFormData(event) {
    if(update){
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value
        });
    }else{
        setUpdate(null);
    }
    
  }

  
  async function handleFormSubmit(event) {
    event.preventDefault(); 
    await create(formData);
    
  }

  if(!update){
    return (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="formInput">
              <label htmlFor="artist">Artist </label>
              <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleFormData}
                required
              />
            </div>
            <div className="formInput">
              <label htmlFor="title">Track </label>
              <input
                type="text"
                name="title"
                value={formData.track}
                onChange={handleFormData}
                required
              />
            </div>
            <button type="submit">SUBMIT TRACK</button>
          </form>
        </>
      );
  }  
  if(update){
    return (
        <>
        <h1>Update {update}</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="formInput">
              <label htmlFor="artist">Update Artist </label>
              <input
                type="text"
                name="artist"
                required
              />
            </div>
            <div className="formInput">
              <label htmlFor="title">Update Track </label>
              <input
                type="text"
                name="title"
                required
              />
            </div>
            <button type="submit">UPDATE TRACK</button>
          </form>
        </>
      );
  }
}

export default TrackForm;
