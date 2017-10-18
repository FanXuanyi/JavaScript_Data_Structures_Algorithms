var hash = new HashTable();

hash.put('Jack', 'jack@email.com');
hash.put('John', 'john@email.com');
hash.put('Ben', 'ben@email.com');

console.log(hash.get('Jack'));
console.log(hash.get('Lily'));

hash.remove('Ben');
console.log(hash.get('Ben'));
