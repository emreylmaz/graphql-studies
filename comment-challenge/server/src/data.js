const users=[
    {id:"1",fullName:"Emre Yilmaz",profile_photo:'https://randomuser.me/api/portraits/men/15.jpg',age:24},
    {id:"2",fullName:"Mehmet Seven",profile_photo:'https://randomuser.me/api/portraits/men/89.jpg',age:29}
];
const posts=[
    {
        id:"1",
        title:"Emre'in gonderisi",
        description:"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır.",
        short_description:"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
        cover:'https://images.unsplash.com/photo-1654923064926-be7e64267a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user_id:"1"
    },
    {
        id:"2",title:"Emre'in diger gonderisi",
        description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
        short_description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.",
        cover:'https://images.unsplash.com/photo-1654912912322-b0b98a92011d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user_id:"1"
    },
    {
        id:"3",
        title:"Mehmet'in gonderisi",
        description:"Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan \"de Finibus Bonorum et Malorum\" (İyi ve Kötünün Uç Sınırları)",
        short_description:"Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.",
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