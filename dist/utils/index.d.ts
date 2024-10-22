import { ExpenseStatus } from "../types";
export declare const formatAxiosErrorToUser: (error: any) => string;
export declare const currencyFormatter: Intl.NumberFormat;
export declare const formatToBRL: (value: number) => string;
export declare const formatExpenseStatus: (status: ExpenseStatus) => "Pendente" | "Pago" | "Cancelado" | "A confirmar" | "Agendado" | "-";
