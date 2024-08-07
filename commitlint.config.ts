import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-min-length': [RuleConfigSeverity.Error, 'always', 0],
    'type-enum': [RuleConfigSeverity.Error, 'always', ['ci', 'feat', 'fix', 'refactor', 'chore']],
    // 'haibazo/commit-pattern': [RuleConfigSeverity.Error, 'always'],
    // 'haibazo/ticket-prefix': [RuleConfigSeverity.Error, 'always', 'HBZ'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(\w+)\] (\w+-\d+) (.+)$/,
      headerCorrespondence: ['type', 'ticket', 'subject'],
    },
  },
  // plugins: [
  //   {
  //     rules: {
  //       'haibazo/commit-pattern': ({ type, ticket, subject }) => {
  //         if (!type || !ticket || !subject) {
  //           return [false, 'commit message must follow the pattern `[type] ticket subject`'];
  //         }

  //         return [true];
  //       },
  //       'haibazo/ticket-prefix': ({ ticket }, _, ticketPrefix) => {
  //         if (!ticket) {
  //           return [false, 'ticket is required'];
  //         }

  //         if (ticketPrefix && ticket.startsWith(ticketPrefix)) {
  //           return [true];
  //         }

  //         return [false, `ticket must start with ${ticketPrefix}`];
  //       },
  //     },
  //   },
  // ],
};

export default Configuration;
