const profile = [
    {
        id : 1,
        name : 'Anas',
        salary : 20000,
        status: true,
    },
    {
        id : 2,
        name : 'Ali',
        salary : 22000,
        status: true,
    },
    {
        id : 3,
        name : 'Ahmad',
        salary : 24000,
        status: true,
    }
]
console.log(profile)
let newprofile = profile.filter(x=>{
    return x.id==2
})
let newsalary = newprofile.map(s=>({
    ...s,salary:s.salary*2
}))

console.log(newsalary)