
export const fetchBoats = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/boats',
  });
};

export const fetchBoat = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/boats/${id}`
  });
};

export const createBoat = (boat) => {
  return $.ajax({
    method: 'GET',
    url: 'api/boats',
    data: { boat }
  });
};
