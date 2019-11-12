const userSQL = {
    queryAll: 'select * from user',   // 查询所有用户
    queryByName: 'select * from  user where username=?',  // 通过用户名索引查询用户
    queryByNamePassword: 'select * from  user where username=? and password=?',  // 通过用户名和密码索引查询用户
    insert: 'insert into user set ?',  // 插入新用户
    updateUser: 'update user set ? where username=?',// 更新用户信息
    deleteUser: 'delete from user where username=?', // 删除用户
    queryAllHeroes: 'select * from person',
    queryHeroById: 'select * from person where id = ?',
    delHeroById: 'DELETE FROM person WHERE id=?',
    addHero: 'insert into person set ?'
}

const lineManagement = {
    queryAllLine: 'select * from hsrm_line',
}

module.exports = {
    userSQL,
    lineManagement
}