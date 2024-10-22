export * from './types'
export * from './utils/index'

export const sharedLib = {
  sayHello: () => {
    console.log("Hello from shared-lib@@@@@#$@#$@#$@#$@#");
  },
};

// export enum JobStatus {
//   BUSY = 'BUSY',
//   COFFEE = 'COFFEE',
//   CONSIDERING = 'CONSIDERING',
// };

// export const JobStatusLabel: Record<JobStatus, string> = {
//   [JobStatus.BUSY]: 'Busy creating the next big thing',
//   [JobStatus.COFFEE]: 'Coffee chats welcome',
//   [JobStatus.CONSIDERING]: 'Considering new opportunities',
// }
