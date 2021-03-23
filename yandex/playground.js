'use strict';

((global) => {
    const timeout = 20;

    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeout);
    };

    const Folder = function (a = []) {
        if (!new.target) {
            return new Folder(a);
        }

        this.read = (index, cb) => _async(() => a[index], cb);
        this.size = (cb) => _async(() => a.length, cb);
    };

    Object.freeze(Folder);
    global.Folder = Folder;
})(typeof window === 'undefined' ? global : window);

const input = Folder([
    'file',
    'ffffile',
    Folder([
        'file',
    ]),
    Folder([
        'fiiile',
    ]),
    Folder([
        {},
        null,
        'file',
        'ffiillee',
        'ffiillee',
    ]),
    Folder([
        Folder([
            'filllle',
            'file',
            null,
        ]),
        {},
        Folder([])
    ]),
]);

// проверка решения
solution(input).then(result => {
    const answer = ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle'];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});

async function solution(input) {
    if (!(input instanceof Folder)) return []

    let res = []
    let size = await new Promise((resolve) => {
        input.size((size) => resolve(size))
    })

    for (let i=0; i<size; i++) {
        let file = await new Promise((resolve) => {
            input.read(i, (file) => {
                resolve(file)
            })
        })

        if (file instanceof Folder) {
            let arr = await solution(file)
            res = res.concat(arr)
        }

        if (typeof file === 'string' && file !== 'file') {
            res.push(file)
        }
    }

    res.sort()

    return res
}
