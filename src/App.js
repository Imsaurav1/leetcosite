import React, { useState, useEffect } from 'react';
import UserProfileStats from './components/UserProfileStats';
import './App.css'; 

// Assuming you have a backend API that provides user data
const fetchUserData = async (username) => {
  const response = await fetch(`/api/leetcode/${username}`);
  const data = await response.json();
  return data;
};

const App = () => {
  const [userData, setUserData] = useState(null);
  const username = 'system-exit';  // Set default username or get from route params

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData(username);
      setUserData(data);
    };
    loadUserData();
  }, [username]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfileStats
        username={username}
        easySolved={userData.easySolved}
        totalEasy={userData.totalEasy}
        mediumSolved={userData.mediumSolved}
        totalMedium={userData.totalMedium}
        hardSolved={userData.hardSolved}
        totalHard={userData.totalHard}
        totalSolved={userData.totalSolved}
        totalQuestions={userData.totalQuestions}
        ranking = {userData.ranking}
      />
    </div>
  );
};

export default App;
