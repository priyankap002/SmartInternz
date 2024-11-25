/* /* src/App.css */
.App {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  
  .profile-page {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .profile-picture {
    margin-bottom: 20px;
  }
  
  .profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    /* Circle shape */
    object-fit: cover;
    /* Cover the area without distortion */
  }
  
  .profile-details h2 {
    margin: 10px 0;
  }
  
  .profile-details p {
    color: #555;
  }