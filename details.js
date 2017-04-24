var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
    username:'devasish',
    balance:100
},{
    username:'mudoi',
    balance:200
}
]);


var accounts = storage.getItemSync('accounts');
accounts.push({username:'User1', balance:44});
storage.setItemSync('accounts',accounts);
console.log(accounts);