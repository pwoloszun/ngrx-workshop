export enum MailSendStage {
  Idle = 'IDLE',

  SendingCancellable = 'SENDING_CANCELLABLE',
  SendingCancelled = 'SENDING_CANCELLED',

  SendingReversible = 'SENDING_REVERSIBLE',
  SendingReverted = 'SENDING_REVERTED',

  Sent = 'SENT',
}

export enum PersistedMailStatus {
  Draft = 'DRAFT',
  Sent = 'SENT',
}

export interface MailEntity {
  id: number;
  title: string;
  to: string[];
  from: string;
  content: string;
  createdAt: number | null;
  status: PersistedMailStatus;
};

export type MailEntityParams = Omit<MailEntity, 'id'>;
