import { useState } from "react";

const TrackForm = ({ index, setTracks, create, update, setUpdate, updateTrack, setformDisplay}) => {
  const [formData, setFormData] = useState({ artist: '', title: '' });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
  event.preventDefault();
  if (!update) {
    await create(formData);
  } else {
    await updateTrack(formData, update);
    setUpdate('');
  }
  const trackData = await index();
  setTracks(trackData);
  setFormData({ artist: '', title: '' });
  setformDisplay(false);
}

  if (!update) {
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
              value={formData.title}
              onChange={handleFormData}
              required
            />
          </div>
          <button type="submit">SUBMIT TRACK</button>
        </form>
      </>
    );
  }

  if (update) {
    return (
      <>
        <h1>Update {update}</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="formInput">
            <label htmlFor="artist">Update Artist </label>
            <input
              type="text"
              name="artist"
              value={formData.artist} 
              onChange={handleFormData}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="title">Update Track </label>
            <input
              type="text"
              name="title"
              value={formData.title} 
              onChange={handleFormData}
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