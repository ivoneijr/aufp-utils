export type Environment = 'local' | 'staging' | 'production';
declare enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}
declare enum Currency {
    BRL = "BRL",
    USD = "USD",
    EUR = "EUR",
    CAD = "CAD",
    AUD = "AUD"
}
export interface BaseModel {
    id: string;
    createdAt: string;
    updatedAt: string;
}
export interface ExpenseCategory extends BaseModel {
    title: String;
    description?: String;
    icon: ExpenseIcon;
    color?: String;
    percentage: number;
    userId: string;
    user: User;
    expenses: Expense[];
}
export declare enum ExpenseStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    CANCELED = "CANCELED",
    TO_BE_COMFIRMED = "TO_BE_COMFIRMED",
    SCHEDULED = "SCHEDULED"
}
export interface Expense extends BaseModel {
    amount: number;
    description: string;
    year: number;
    month: number;
    status: ExpenseStatus;
    userId: string;
    user: User;
    categoryId: string;
    category: ExpenseCategory;
}
export interface Income extends BaseModel {
    amount: number;
    description: string;
    year: number;
    month: number;
    userId: string;
    user: User;
}
export interface User extends BaseModel {
    email: string;
    role: UserRole;
    profile?: Profile;
    categories: ExpenseCategory[];
    expenses: Expense[];
    incomes: Income[];
}
export interface Profile extends BaseModel {
    name: String;
    avatarUrl?: String;
    currency: Currency;
    userId: string;
    user: User;
}
export type MeResponse = Pick<User, 'email' | 'role' | 'profile'>;
export type ExpensesResponse = Pick<Expense, 'id' | 'amount' | 'description' | 'year' | 'month' | 'category' | 'status'>;
export type IncomesResponse = Pick<Income, 'id' | 'amount' | 'description' | 'year' | 'month'>;
export type ExpenseIcon = 'house' | 'car' | 'target' | 'drink' | 'medal' | 'graduation-cap';
export type ExpenseUpdateBody = Pick<Expense, 'id' | 'amount' | 'description' | 'categoryId' | 'status'>;
export type ExpenseCreateBody = Pick<Expense, 'amount' | 'description' | 'categoryId' | 'year' | 'month' | 'status'>;
export type IncomeCreateBody = Pick<Income, 'amount' | 'description' | 'year' | 'month'>;
export type IncomeUpdateBody = Pick<Income, 'amount' | 'description' | 'year' | 'month'>;
export type ExpenseCategoryAllResponse = Pick<ExpenseCategory, 'id' | 'title' | 'description' | 'icon' | 'color'>;
export type CreateIncomeResponse = Pick<Income, 'id' | 'amount' | 'description' | 'year' | 'month'>;
export type ExpenseCategoryIndicatorsResponse = {
    id: string;
    title: string;
    totalAmount: number;
    icon: ExpenseIcon;
    color: string;
    percentageOfTotal: number;
};
export type RequestUserJwt = {
    id: string;
    email: string;
    role: UserRole;
    iat: number;
    exp: number;
};
export type SettingsResponse = {
    global: {
        inLive: boolean;
    };
};
export {};
