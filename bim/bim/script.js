const ApiHost = 'https://jsfiddle-forge-backend.herokuapp.com';
const $viewer = $('#viewer');
const $models = $('#models');

async function populateModels() {
  try {
    const resp = await fetch(`${ApiHost}/api/models`);
    const models = await resp.json();
    $models.append(models.map(model => $(`<option value="${model.urn}">${model.name}</option>`)));
  } catch (err) {
    $viewer.addClass('error').text(err);
  }
}

async function getAccessToken(callback) {
  try {
    const resp = await fetch(`${ApiHost}/api/token`);
    if (!resp.ok) {
      throw new Error(await resp.text());
    }
    const auth = await resp.json();
    callback(auth.access_token, auth.expires_in);
  } catch (err) {
    $viewer.addClass('error').text(err);
  }
}

async function run() {
  await populateModels();
  const utils = await Autodesk.Viewing.Utilities.Initialize($viewer[0], getAccessToken);
  utils.load($models.val());
  $models.on('change', function() {
    utils.load($models.val());
  });
}

run();