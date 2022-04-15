const users=[
    {id:"1",fullName:"Emre Yilmaz",age:24},
    {id:"2",fullName:"Mehmet Seven",age:29}
];
const posts=[
    {id:"1",title:"Emre'in gonderisi",user_id:"1"},
    {id:"2",title:"Emre'in diger gonderisi",user_id:"1"},
    {id:"3",title:"Mehmet'in gonderisi",user_id:"2"}
];
const comments=[
    {id:"1",text:"Emre'nin yorumu",post_id:"1",user_id:"1"},
    {id:"2",text:"Mehmet'in  yorumu",post_id:"1",user_id:"2"},
    {id:"3",text:"Emre'nin  yorumu",post_id:"3",user_id:"1"},
    {id:"4",text:"Mehmet'in yorumu",post_id:"3",user_id:"2"}
];

export default {
    users,
    posts,
    comments
};