module.exports = function (context, locationBlob) {
    context.log('Node.js blob trigger function processed blob:');
    context.log(JSON.stringify(locationBlob));
    context.done();
};
