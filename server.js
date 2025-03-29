const express = require('express');
const path = require('path');
const app = express();

// Project redirects mapping
const projectRedirects = {
  'repocleanup': 'https://repocleanup.com',
  'fortisbc': 'https://youtu.be/BQbco5ynQIs',
  'mlchat': 'https://mlchat.chat',
  'blood-bank': 'https://github.com/n-maido/blood-bank-database',
  'netflix-recommendation': 'https://github.com/mishasinitcyn/Netflix-Recommendation-Engine',
  'github-issue-detection': 'https://github.com/mishasinitcyn/GitHub-Duplicate-Issue-Detection/blob/main/Document-Level%20Embeddings%20for%20Duplicate%20GitHub%20Issue%20Detection.pdf',
  'network-optimization': 'https://github.com/mishasinitcyn/Cellular-Network-Optimization-with-Reinforcement-Learning/blob/main/CMDPs%20with%20Unknown%20Constraints.pdf',
  'compiler-analysis': 'https://github.com/mishasinitcyn/GNU-Compiler-Analysis-Levenshtein-Distance-Algorithm/blob/main/report.pdf',
  'llm-web-crawlers': 'https://medium.com/@msa242/restricting-the-use-of-llm-web-crawlers-99b353ac2f04'
};

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Project redirect routes
Object.entries(projectRedirects).forEach(([route, url]) => {
  app.get(`/${route}`, (req, res) => {
    res.redirect(url);
  });
});

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});