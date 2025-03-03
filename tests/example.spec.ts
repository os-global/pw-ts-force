import { test, expect } from '@playwright/test';
import { requestAccessToken, Rest, SObject } from "ts-force";
import { User } from '../src/generated/User';

test('force', async () => {
  const record = {
    attributes: {
      type: 'User',
      url: '/services/data/v50.0/sobjects/User/0052p000001112pAAE'
    },
    Id: '0052p000001112pAAE',
    Username: 'some.user@env.com'
  };
  const userObj = User.fromSFObject(record);
});
