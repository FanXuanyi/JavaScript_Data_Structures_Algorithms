var hash = new HashTableLinearProbing();

hash.put('Jack', 'jack@email.com');
hash.put('John', 'john@email.com');
hash.put('Ben', 'ben@email.com');
hash.put('Jim', 'jim@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron' ,'aaron@email.com');
hash.put('Jonathan', 'jonathan@eamil.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@eamil.com');
hash.print();

console.log('-------');

console.log(hash.get('Jack'));

console.log('-------');

hash.remove('John');
hash.print();
