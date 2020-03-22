import users from "./users.js";

("use strict");

console.warn("TASK-01:", "Получить массив имен всех пользователей (поле name)");
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.warn(
  "TASK-02:",
  "Получить массив объектов пользователей по цвету глаз (поле eyeColor)"
);
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.warn(
  "TASK-03:",
  "Получить массив имен пользователей по полу (поле gender)"
);
const getUsersWithGender = (users, gender) => {
  const usersWithGender = users.filter(user => {
    return user.gender === gender;
  });
  return usersWithGender.map(user => {
    return user.name;
  });
};
console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.warn(
  "TASK-04:",
  "Получить массив только неактивных пользователей (поле isActive)"
);
const getInactiveUsers = users => {
  return users.filter(user => user.isActive !== true);
};
console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.warn(
  "TASK-05:",
  "Получить пользоваля (не массив) по email (поле email, он уникальный)"
);
const getUserWithEmail = (users, email) => {
  // const userEmail = users.filter(user => user.email === email);
  // return userEmail;

  const userEmail = users.find(user => {
    return user.email === email;
  });
  return userEmail;
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.warn(
  "TASK-06:",
  "Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)"
);
const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter(user => {
    return user.age > min && user.age < max;
  });
  return usersWithAge;
};
console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.warn(
  "TASK-07:",
  "Получить общую сумму баланса (поле balance) всех пользователей"
);
const calculateTotalBalance = users => {
  //   const totalBalance = users.map(user => user.balance);
  //   return totalBalance.reduce((calculate, balance) => calculate + balance, 0);
  return users.reduce((acc, user) => acc + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916

console.warn(
  "TASK-08:",
  "Массив имен всех пользователей у которых есть друг с указанным именем"
);
const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(user =>
    user.friends.find(friend => {
      return friend === friendName;
    })
  );
  return usersWithFriend.map(user => user.name);
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

console.warn(
  "TASK-09:",
  "Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)"
);
const getNamesSortedByFriendsCount = users => {
  const namesSortedByFriends = users.sort((prevUser, nextUser) => {
    return prevUser.friends.length - nextUser.friends.length;
  });
  return namesSortedByFriends.map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.warn(
  "TASK-10:",
  "Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке"
);
const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.reduce(
      (unigue, skill) => (unigue.includes(skill) ? unigue : [...unigue, skill]),
      []
    );
  }, []);
  return sortedUniqueSkills.sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
