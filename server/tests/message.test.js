import expect             from 'expect';
import {
  generateMessage,
  generateLocationMessage
} from '../utils/message';

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'JooHyung';
    let text = 'Some message';
    let message = generateMessage(from, text);

    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let latitude  = 1;
    let longitude = 1;
    let from      = 'JooHyung';
    let url       = 'https://www.google.com/maps?q=1,1';
    let message   = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
