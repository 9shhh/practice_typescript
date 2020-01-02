// interface로 type 설정하기

interface Person {
    name: string;
    age?: number; // 물음표는 설정을 해도 되고, 안해도 되는 값을 의미
}

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }

interface Developer extends Person{ // Person과 유사한 형태이므로, 상속 받아 재구현
    skills: string[];
}

const person: Person = {
    name : "김사람",
    age : 20,
};

const expert: Developer = {
    name: "김개발",
    skills: ['js','ts']
};

const people: Person[] = [person,expert];
