"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseStatus = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
})(UserRole || (UserRole = {}));
var Currency;
(function (Currency) {
    Currency["BRL"] = "BRL";
    Currency["USD"] = "USD";
    Currency["EUR"] = "EUR";
    Currency["CAD"] = "CAD";
    Currency["AUD"] = "AUD";
})(Currency || (Currency = {}));
var ExpenseStatus;
(function (ExpenseStatus) {
    ExpenseStatus["PENDING"] = "PENDING";
    ExpenseStatus["PAID"] = "PAID";
    ExpenseStatus["CANCELED"] = "CANCELED";
    ExpenseStatus["TO_BE_COMFIRMED"] = "TO_BE_COMFIRMED";
    ExpenseStatus["SCHEDULED"] = "SCHEDULED";
})(ExpenseStatus || (exports.ExpenseStatus = ExpenseStatus = {}));
