// We use any as the type for error to allow for any type of error to be passed in

import { ExpenseStatus } from "../types"

// biome-ignore lint/suspicious/noExplicitAny: Suppressing this warning
export const formatAxiosErrorToUser = (error: any): string => {
  if (error?.data?.message) {
    return error.data.message
  }

  return `Ocorreu um erro. Por favor, tente enviar novamente ou entre em contato com nosso suporte em ivoneijr@gmail.com`
}

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const formatToBRL = (value: number) => {
  return currencyFormatter.format(value)
}

export const formatExpenseStatus = (status: ExpenseStatus) => {
  switch (status) {
    case ExpenseStatus.PENDING:
      return 'Pendente'
    case ExpenseStatus.PAID:
      return 'Pago'
    case ExpenseStatus.CANCELED:
      return 'Cancelado'
    case ExpenseStatus.TO_BE_COMFIRMED:
      return 'A confirmar'
    case ExpenseStatus.SCHEDULED:
      return 'Agendado'
    default:
      return '-'
  }
}
