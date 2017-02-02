import expect             from 'expect';
import {generateMessage}  from '../utils/message';

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
