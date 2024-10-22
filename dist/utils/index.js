"use strict";
// We use any as the type for error to allow for any type of error to be passed in
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatExpenseStatus = exports.formatToBRL = exports.currencyFormatter = exports.formatAxiosErrorToUser = void 0;
const types_1 = require("../types");
// biome-ignore lint/suspicious/noExplicitAny: Suppressing this warning
const formatAxiosErrorToUser = (error) => {
    var _a;
    if ((_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.message) {
        return error.data.message;
    }
    return `Ocorreu um erro. Por favor, tente enviar novamente ou entre em contato com nosso suporte em ivoneijr@gmail.com`;
};
exports.formatAxiosErrorToUser = formatAxiosErrorToUser;
exports.currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
const formatToBRL = (value) => {
    return exports.currencyFormatter.format(value);
};
exports.formatToBRL = formatToBRL;
const formatExpenseStatus = (status) => {
    switch (status) {
        case types_1.ExpenseStatus.PENDING:
            return 'Pendente';
        case types_1.ExpenseStatus.PAID:
            return 'Pago';
        case types_1.ExpenseStatus.CANCELED:
            return 'Cancelado';
        case types_1.ExpenseStatus.TO_BE_COMFIRMED:
            return 'A confirmar';
        case types_1.ExpenseStatus.SCHEDULED:
            return 'Agendado';
        default:
            return '-';
    }
};
exports.formatExpenseStatus = formatExpenseStatus;
