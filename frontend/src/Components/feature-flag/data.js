const dummyApiResponse = {
  showStarRating: true,
  showTicTacToe: true,
  showRandomColor: true,
  showQrCodeGenerator: false,
  showTreeView: true,
};

function getFeatureFlags() {
  return new Promise((resolve, reject) => {
    // Simulate API call
    if (dummyApiResponse) resolve.setTimeout(resolve(dummyApiResponse), 500);
    else reject('Error fetching feature flags');
  });
}

export default getFeatureFlags;
