// interface로 type 설정하기

interface Person {
    name: string;
    age?: number; // 물음표는 설정을 해도 되고, 안해도 되는 값을 의미
}

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}
