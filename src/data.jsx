const posts = 
[
    {
        id: 1,
        path: '/posts/post1.html',
        createdAt: "2023-09-10",
        userId: "1",
        image: "/images/header1.jpg",
        categoryId: 1,
    },
    {
        id: 2,
        path: '/posts/post2.html',
        createdAt: "2023-09-10",
        userId: "2",
        image: "/images/header1.jpg",
        categoryId: 2,
    },
    {
        id: 3,
        path: '/posts/post3.html',
        createdAt: "2023-09-10",
        userId: "3",
        image: "/images/header1.jpg",
        categoryId: 3,
      },
      {
        id: 4,
        path: '/posts/post4.html',
        createdAt: "2023-09-10",
        userId: "4",
        image: "/images/header1.jpg",
        categoryId: 4,
      },
      {
        id: 5,
        path: '/posts/post5.html',
        createdAt: "2023-09-10",
        userId: "5",
        image: "/images/header1.jpg",
        categoryId: 5,
      },
      {
        id: 6,
        path: '/posts/post6.html',
        createdAt: "2023-09-10",
        userId: "1",
        image: "/images/header1.jpg",
        categoryId: 6,
      },
      {
        id: 7,
        path: '/posts/post7.html',
        createdAt: "2023-09-10",
        userId: "2",
        image: "/images/header1.jpg",
        categoryId: 7,
      },
      {
        id: 8,
        path: '/posts/post8.html',
        createdAt: "2023-09-10",
        userId: "3",
        image: "/images/header1.jpg",
        categoryId: 8,
      },
      {
        id: 9,
        path: '/posts/post9.html',
        createdAt: "2023-09-10",
        userId: "4",
        image: "/images/header1.jpg",
        categoryId: 9,
      },
      {
        id: 10,
        path: '/posts/post10.html',
        createdAt: "2023-09-10",
        userId: "5",
        image: "/images/header1.jpg",
        categoryId: 10,
      },
      {
        id: 11,
        path: '/posts/post11.html',
        createdAt: "2023-09-10",
        userId: "1",
        image: "/images/header1.jpg",
        categoryId: 1,
      },
      {
        id: 12,
        path: '/posts/post12.html',
        createdAt: "2023-09-10",
        userId: "2",
        image: "/images/header1.jpg",
        categoryId: 2,
      },
      {
        id: 13,
        path: '/posts/post13.html',
        createdAt: "2023-09-10",
        userId: "3",
        image: "/images/header1.jpg",
        categoryId: 3,
      },
      {
        id: 14,
        path: '/posts/post14.html',
        createdAt: "2023-09-10",
        userId: "4",
        image: "/images/header1.jpg",
        categoryId: 4,
      },
      {
        id: 15,
        path: '/posts/post15.html',
        createdAt: "2023-09-10",
        userId: "5",
        image: "/images/header1.jpg",
        categoryId: 5,
      },
      {
        id: 16,
        path: '/posts/post16.html',
        createdAt: "2023-09-10",
        userId: "1",
        image: "/images/header1.jpg",
        categoryId: 6,
      },
      {
        id: 17,
        path: '/posts/post17.html',
        createdAt: "2023-09-10",
        userId: "2",
        image: "/images/header1.jpg",
        categoryId: 7,
      },
      {
        id: 18,
        path: '/posts/post18.html',
        createdAt: "2023-09-10",
        userId: "3",
        image: "/images/header1.jpg",
        categoryId: 8,
      },
      {
        id: 19,
        path: '/posts/post19.html',
        createdAt: "2023-09-10",
        userId: "1",
        image: "/images/header1.jpg",
        categoryId: 9,
      },
      {
        id: 20,
        path: '/posts/post20.html',
        createdAt: "2023-09-10",
        userId: "1",
        image: "/images/header1.jpg",
        categoryId: 10,
      }
]

const authors = [
  {
    "id": 1,
    "username": "johndoe",
    "password": "password123",
    "fullName": "John Doe",
    "dateOfBirth": "1990-05-15",
    "role": "USER",
    "email": "johndoe@example.com",
    "phone": "+36201234567",
    "profilePicture": "/images/profile.jpg",
    "bio": "John egy lelkes blogger, aki szeret technológiai témákról írni és új dolgokat tanulni."
  },
  {
    "id": 2,
    "username": "janedoe",
    "password": "securePass1!",
    "fullName": "Jane Doe",
    "dateOfBirth": "1985-09-20",
    "role": "ADMIN",
    "email": "janedoe@example.com",
    "phone": "+36701234567",
    "profilePicture": "/images/profile3.jpg",
    "bio": "Jane a csapat adminisztrátora, akinek szenvedélye a közösségek építése és az emberek támogatása."
  },
  {
    "id": 3,
    "username": "peter123",
    "password": "peter12345",
    "fullName": "Péter Szabó",
    "dateOfBirth": "1995-12-10",
    "role": "USER",
    "email": "peter.szabo@example.com",
    "phone": "+36301234567",
    "profilePicture": "/images/profile1.jpg",
    "bio": "Péter fiatal és ambiciózus író, aki a kreatív tartalomkészítést helyezi előtérbe."
  },
  {
    "id": 4,
    "username": "anna_nagy",
    "password": "strongPass@123",
    "fullName": "Anna Nagy",
    "dateOfBirth": "2000-07-25",
    "role": "MODERATOR",
    "email": "anna.nagy@example.com",
    "phone": "+36401234567",
    "profilePicture": "/images/profile4.jpg",
    "bio": "Anna tapasztalt moderátor, aki gondoskodik a fórumok biztonságáról és barátságos légköréről."
  },
  {
    "id": 5,
    "username": "test_user",
    "password": "testUserPass",
    "fullName": "Teszt Felhasználó",
    "dateOfBirth": "1980-01-01",
    "role": "USER",
    "email": "test.user@example.com",
    "phone": "+36501234567",
    "profilePicture": "/images/profile5.jpg",
    "bio": "Teszt Felhasználó a rendszerek teszteléséhez használt példa, aki mindig készen áll a tesztek futtatására."
  }
];
const users = [
  {
    "id": 1,
    "username": "johndoe",
    "password": "cGFzc3dvcmQxMjM=", //password123
    "fullName": "John Doe",
    "dateOfBirth": "1990-05-15",
    "role": "USER",
    "email": "johndoe@example.com",
    "phone": "+36201234567",
  },
  {
    "id": 2,
    "username": "janedoe",
    "password": "c2VjdXJlUGFzczEh",//securePass1!
    "fullName": "Jane Doe",
    "dateOfBirth": "1985-09-20",
    "role": "ADMIN",
    "email": "janedoe@example.com",
    "phone": "+36701234567",
  },
  {
    "id": 3,
    "username": "peter123",
    "password": "peter12345",
    "fullName": "Péter Szabó",
    "dateOfBirth": "1995-12-10",
    "role": "USER",
    "email": "peter.szabo@example.com",
    "phone": "+36301234567",
  },
  {
    "id": 4,
    "username": "anna_nagy",
    "password": "strongPass@123",
    "fullName": "Anna Nagy",
    "dateOfBirth": "2000-07-25",
    "role": "ADMIN",
    "email": "anna.nagy@example.com",
    "phone": "+36401234567",
  },
  {
    "id": 5,
    "username": "test_user",
    "password": "testUserPass",
    "fullName": "Teszt Felhasználó",
    "dateOfBirth": "1980-01-01",
    "role": "USER",
    "email": "test.user@example.com",
    "phone": "+36501234567",
  }
];

const categories = [
  {
    "id": 1,
    "name": "category1",
  },
  {
    "id": 2,
    "name": "category2",
  },
  {
    "id": 3,
    "name": "category3",
  },
  {
    "id": 4,
    "name": "category4",
  },
  {
    "id": 5,
    "name": "category1",
  },
  {
    "id": 6,
    "name": "category2",
  },
  {
    "id": 7,
    "name": "category3",
  },
  {
    "id": 8,
    "name": "category4",
  },
  {
    "id": 19,
    "name": "category1",
  },
  {
    "id": 10,
    "name": "category2",
  },
]

const tags = [
  {
    "id": 1,
    "name": "category1",
  },
  {
    "id": 2,
    "name": "category2",
  },
  {
    "id": 3,
    "name": "category1",
  },
  {
    "id": 4,
    "name": "category2",
  },
  {
    "id": 5,
    "name": "category1",
  },
  {
    "id": 6,
    "name": "category2",
  },
  {
    "id": 7,
    "name": "category1",
  },
  {
    "id": 8,
    "name": "category2",
  },
  {
    "id": 9,
    "name": "category1",
  },
  {
    "id": 10,
    "name": "category2",
  },
  {
    "id": 11,
    "name": "category1",
  },
  {
    "id": 12,
    "name": "category2",
  },
]

const postTags = [
  {
    "id": 1,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 2,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 3,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 4,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 5,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 6,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 7,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 8,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 9,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 10,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 11,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 12,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 13,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 14,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 15,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 16,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 17,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 18,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 19,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 20,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 21,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 22,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 23,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 24,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 25,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 26,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 27,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 28,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 29,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 30,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 31,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 32,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 33,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 34,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 35,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 36,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 37,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 38,
    "post_id": 1,
    "tag_id": 3,
  },
  {
    "id": 39,
    "post_id": 1,
    "tag_id": 2,
  },
  {
    "id": 40,
    "post_id": 1,
    "tag_id": 3,
  },
]




export default {posts, authors, categories, tags, postTags,users};