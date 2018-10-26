const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Name 1',
      room: 'Room 1'
    }, {
      id: '2',
      name: 'Name 2',
      room: 'Room 2'
    }, {
      id: '3',
      name: 'Name 3',
      room: 'Room 1'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 'ID',
      name: 'Name',
      room: 'Room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '4';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for users in same room', () => {
    var userList = users.getUserList('Room 1');
    var userList2 = users.getUserList('Room 2');

    expect(userList).toEqual(['Name 1', 'Name 3']);
    expect(userList2).toEqual(['Name 2']);
  });
});