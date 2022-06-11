const users=[
    {id:"1",fullName:"Emre Yilmaz",profile_photo:'https://randomuser.me/api/portraits/men/15.jpg',age:24},
    {id:"2",fullName:"Mehmet Seven",profile_photo:'https://randomuser.me/api/portraits/men/89.jpg',age:29}
];
const posts=[
    {
        id:"1",
        title:"Emre'in gonderisi",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:'https://images.unsplash.com/photo-1654923064926-be7e64267a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user_id:"1"
    },
    {
        id:"2",title:"Emre'in diger gonderisi",
        description:"Lorem ipsum dolor sit amet, consectetur 2.",
        cover:'https://images.unsplash.com/photo-1654912912322-b0b98a92011d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user_id:"1"
    },
    {
        id:"3",
        title:"Mehmet'in gonderisi",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing 3.",
        cover:'https://images.unsplash.com/photo-1575909812796-4a0ae171a443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user_id:"2"
    }
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