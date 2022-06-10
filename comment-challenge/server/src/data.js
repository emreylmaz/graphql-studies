const users=[
    {id:"1",fullName:"Emre Yilmaz",profile_photo:'https://randomuser.me/api/portraits/men/15.jpg',age:24},
    {id:"2",fullName:"Mehmet Seven",profile_photo:'https://randomuser.me/api/portraits/men/89.jpg',age:29}
];
const posts=[
    {id:"1",title:"Emre'in gonderisi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",user_id:"1"},
    {id:"2",title:"Emre'in diger gonderisi",description:"Lorem ipsum dolor sit amet, consectetur 2.",user_id:"1"},
    {id:"3",title:"Mehmet'in gonderisi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing 3.",user_id:"2"}
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