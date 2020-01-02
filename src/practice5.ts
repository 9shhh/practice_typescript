// interface로 type 설정하기

type Person2 = {
    name: string;
    age?: number; // 물음표는 설정을 해도 되고, 안해도 되는 값을 의미
};

type Developer2 = Person2 & { // & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
    skills: string[];
}

const person2: Person2 = {
    name: "김사람"
};

const expert2: Developer2 = {
    name: "김개발",
    skills: ['js', 'ts']
};

type People2 = Person2[]; // Person[] 을 People 이라는 타입으로 사용 가능.
const people2: People2 = [person2, expert];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'red';
const colors: Color[] = ['red', 'orange'];

