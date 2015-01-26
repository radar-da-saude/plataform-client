module.exports = [
    '$resource',
    '$rootScope',
    'Util',
function(
    $resource,
    $rootScope,
    Util
) {

    var PostEndpoint = $resource(Util.apiUrl('/posts/:id'), {
        id: '@id'
    }, {
        query: {
            method: 'GET',
            isArray: false,
            transformResponse: function(data /*, header*/) {
                return angular.fromJson(data);
            }
        },
        update: {
            method: 'PUT'
        }
    });

    $rootScope.$on('event:authentication:logout:succeeded', function(){
        PostEndpoint.query();
    });

    return PostEndpoint;

}];
