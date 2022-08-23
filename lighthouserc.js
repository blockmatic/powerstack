module.exports = {
    ci: {
      collect: {
        startServerCommand: 'yarn start',
        numberOfRuns: 3,
        url: ['http://localhost:3000'],
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };