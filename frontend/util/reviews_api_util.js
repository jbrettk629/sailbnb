
export const fetchReviews = (boatId) => {
  return $.ajax({
    method: 'GET',
    url: `api/boats/${boatId}/reviews`
  });
}

export const fetchReview = (boatId, reviewId) => {
  return $.ajax({
    method: 'GET',
    url: `api/boats/${boatId}`
  });
}

export const createReview = (boatId, review) => {
  return $.ajax({
    method: 'POST',
    url: `api/boats/${boatId}/reviews`,
    data: { review }
  });
}
