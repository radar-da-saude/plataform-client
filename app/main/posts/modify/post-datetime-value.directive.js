module.exports = ['moment', '_', function (moment, _) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        require: 'ngModel',
        template: require('./post-datetime-value.html'),
        link: function ($scope, element, attrs, ngModel) {
            // Split date time in time and date fields
            $scope.timeOptions = { format: 'HH:i', interval: 15, onClose: save, monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ], weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'], today: 'Hoje', clear: 'Limpar', close: 'Fechar'};
            $scope.dateOptions = { format: 'yyyy-mm-dd', onClose: save, monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'], today: 'Hoje', clear: 'Limpar', close: 'Fechar'};
            $scope.model = null;

            // If no ngModel, skip the rest
            if (!ngModel) {
                return;
            }

            // Update models on render
            ngModel.$render = render;

            // Render ngModel viewValue into scope
            function render() {
                $scope.model = moment(ngModel.$viewValue).toDate();
            }

            // Save model value
            // Only runs when modal closes, this avoids overwriting the time
            // and rounding it to 15mins, even when the user never changed it
            function save() {
                ngModel.$setViewValue($scope.model);
            }
        }
    };
}];
