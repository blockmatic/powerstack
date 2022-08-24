module.exports = {
    ci: {
      collect: {
        numberOfRuns: 5,
        startServerCommand: 'yarn build, start',
        //  staticDistDir "./pages/",
        url: ['http://localhost:3001/',
              'http://localhost:3001/login' 
              ],
      },
         assert: {
          preset: "lighthouse:recommended",
            assertions: {
              'categories:performance': ['error', {minScore: .9}],
              'categories:accessibility': ['error', {minScore: .9}],
              'categories:best-practices': ['error', {minScore: .9}],
              'categories:seo': ['error', {minScore: .9}],
              'categories:pwa': 'off',
            }  
        },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };