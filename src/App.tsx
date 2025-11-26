import {useState, useEffect } from 'react';

interface Users {
  id: number, 
  name: string, 
  age: number, 
  city: string, 
  active: boolean
}

interface Filter {
  minAge?: number,
  cities?: string[],
  name?: string[],
  onlyActive?: boolean,
  sortBy?: "name" | "age",
  searchQuery?: string
}

function filterAndSortUsers(users, options){
    const filter = users.filter(el => 
      options.sortBy == 'age' ? el.age >= options.minAge :  options.name.includes(el.name) 
      
      &&  el.city.includes(options.cities) 
      
      && el.active == options.onlyActive 
    
      && el.name.every(letter => letter.includes(options.searchQuery))
    )
    console.log(filter);
    
}

export default function App() {

  const users:Users = [
    { id: 1, name: "Алиса", age: 25, city: "Москва", active: true },
    { id: 2, name: "Борис", age: 17, city: "Санкт-Петербург", active: false },
    { id: 3, name: "Вера", age: 30, city: "Москва", active: true },
    { id: 4, name: "Глеб", age: 22, city: "Казань", active: true },
    { id: 5, name: "Дина", age: 16, city: "Москва", active: false },
    { id: 6, name: "Егор", age: 28, city: "Екатеринбург", active: true },
  ];

  const find:Filter = {
    minAge: 18,
    cities: ["Москва", "Казань"],
    name: ['Алиса', 'Глеб'],
    onlyActive: true,
    sortBy: "age",
    searchQuery: "а"
  }

  useEffect(() => {
    filterAndSortUsers(users, find)
  }, [])


  return (
    <>

    </>
  );
}