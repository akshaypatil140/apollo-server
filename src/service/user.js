class User {
    constructor() {
        this.user=new Map();
        this.id=0;
    }
    getAllUser()
    {
        return this.user;
    }
    createUser(user){
        this.id +=1;
        this.user.set(this.id, { ...user, id: this.id});
        return this.user.get(this.id);
    }
    updateUser( id,role){
        const user=this.user.get[Number(id)];
        this.user.set[Number(id),{...user, role}];
        return this. user.get[Number(id)];
    }
    deleteUser(id){
        this.user.delete[Number(id)];
        return id;
    }
    getUser(id){
        return this.user.get[Number(id)];
    }
}

export default new User();