import expect from 'expect';
import {Users} from '../utils/users';

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    const user = {
      id: '123',
      name: 'JooHyung',
      room: 'The Office'
    }

    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let id = '1';
    let user = users.removeUser(id);

    expect(users.users).toEqual([{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]);

    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not remove user', () => {
    let id = '4';
    let user = users.removeUser(id);

    expect(users.users).toEqual([{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]);

    expect(user).toNotExist();
  });

  it('should find user', () => {
    let id = '1';
    let user = users.getUser(id);

    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not find user', () => {
    let id = '4';
    let user = users.getUser(id);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    let room = 'Node Course';
    let userList = users.getUserList(room);

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    let room = 'React Course';
    let userList = users.getUserList(room);

    expect(userList).toEqual(['Jen']);
  });
});
