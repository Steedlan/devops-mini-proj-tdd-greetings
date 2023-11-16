const greet = require('../app')

// English tests (by default)
test('Should return Hello, Bob.', () => {
    const result = greet('Bob')
    expect(result).toBe('Hello, Bob.')
})

test('Should return Hello, Bob.', () => {
    const result = greet(['Bob', 'en'])
    expect(result).toBe('Hello, Bob.')
})

test('Should return Hello, Jean-Kevin.', () => {
    const result = greet('Jean-Kevin')
    expect(result).toBe('Hello, Jean-Kevin.')
})

test('Should return Hello, my friend', () => {
    const result = greet(null)
    expect(result).toBe('Hello, my friend.')
})

test('Should return Hello, my friend', () => {
    const result = greet()
    expect(result).toBe('Hello, my friend.')
})

test('Should return Hello, my friend', () => {
    const result = greet('')
    expect(result).toBe('Hello, my friend.')
})

test('Should return HELLO, JERRY!', () => {
    const result = greet('JERRY')
    expect(result).toBe('HELLO, JERRY!')
})

test('Should return HELLO, KENOBI!', () => {
    const result = greet('KENOBI')
    expect(result).toBe('HELLO, KENOBI!')
})

test('Should return Hello, Jill and Jane.', () => {
    const result = greet(['Jill', 'Jane'])
    expect(result).toBe('Hello, Jill and Jane.')
})

test('Should return Hello, Kratos and Thanathos.', () => {
    const result = greet(['Kratos', 'Thanathos'])
    expect(result).toBe('Hello, Kratos and Thanathos.')
})

test('Should return Hello, Amy, Brian and Charlotte.', () => {
    const result = greet(['Amy', 'Brian', 'Charlotte'])
    expect(result).toBe('Hello, Amy, Brian and Charlotte.')
})

test('Should return Hello, Kratos, Thanathos and Hypnos.', () => {
    const result = greet(['Kratos', 'Thanathos', 'Hypnos'])
    expect(result).toBe('Hello, Kratos, Thanathos and Hypnos.')
})

test('Should return Hello, Amy and Charlotte. AND HELLO BRIAN!', () => {
    const result = greet(['Amy', 'BRIAN', 'Charlotte'])
    expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
})
test('Should return Hello, Thanathos an Hypnos. AND HELLO KRATOS!', () => {
    const result = greet(['KRATOS', 'Thanathos', 'Hypnos'])
    expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!')
})

// French tests

test('Should return Bonjour, Bob.', () => {
    const result = greet(['Bob', 'fr'])
    expect(result).toBe('Bonjour, Bob.')
})

test('Should return Bonjour, mon ami', () => {
    const result = greet([null, 'fr'])
    expect(result).toBe('Bonjour, mon ami.')
})

test('Should return BONJOUR, JERRY!', () => {
    const result = greet(['JERRY', 'fr'])
    expect(result).toBe('BONJOUR, JERRY!')
})

test('Should return Bonjour, Jill et Jane.', () => {
    const result = greet(['Jill', 'Jane', 'fr'])
    expect(result).toBe('Bonjour, Jill et Jane.')
})

test('Should return Bonjour, Amy, Brian et Charlotte.', () => {
    const result = greet(['Amy', 'Brian', 'Charlotte', 'fr'])
    expect(result).toBe('Bonjour, Amy, Brian et Charlotte.')
})

test('Should return Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!', () => {
    const result = greet(['Amy', 'BRIAN', 'Charlotte', 'fr'])
    expect(result).toBe('Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!')
})

// DUTCH TESTS
test('Should return Hallo, Bob.', () => {
    const result = greet(['Bob', 'nl'])
    expect(result).toBe('Hallo, Bob.')
})

test('Should return Hallo, mon ami', () => {
    const result = greet([null, 'nl'])
    expect(result).toBe('Hallo, mijn vriend.')
})

test('Should return HALLO, JERRY!', () => {
    const result = greet(['JERRY', 'nl'])
    expect(result).toBe('HALLO, JERRY!')
})

test('Should return Hallo, Jill en Jane.', () => {
    const result = greet(['Jill', 'Jane', 'nl'])
    expect(result).toBe('Hallo, Jill en Jane.')
})

test('Should return Hallo, Amy, Brian en Charlotte.', () => {
    const result = greet(['Amy', 'Brian', 'Charlotte', 'nl'])
    expect(result).toBe('Hallo, Amy, Brian en Charlotte.')
})

test('Should return Hallo, Amy en Charlotte. EN HALLO BRIAN!', () => {
    const result = greet(['Amy', 'BRIAN', 'Charlotte', 'nl'])
    expect(result).toBe('Hallo, Amy en Charlotte. EN HALLO BRIAN!')
})
