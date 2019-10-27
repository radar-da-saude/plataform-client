module.exports = ['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');

    $translateProvider.translations('pt-BR', require('../locales/pt-BR.json'));

    $translateProvider.useStaticFilesLoader({
        prefix: 'locales/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.fallbackLanguage('pt-BR');
}];
