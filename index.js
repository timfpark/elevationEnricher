module.exports = function (context, rawLocationCSVBlob) {
    context.log('Processing blob new:');
    context.log(JSON.stringify(context));
    context.log(JSON.stringify(locationBlob));
    context.done();
};
