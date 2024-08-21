const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch tracks.');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (formData) => {
  try {
    console.log(formData);
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to create track.');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateTrack = async (formData, trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to update track.');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteTrack = async (trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete track.');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, create, updateTrack, deleteTrack };
