import user from '../../service/user';

export default{
    getAllTrainees: ()=>{
        return user.getAllTrainees;
    },

    getTrainee (parent, args)  {
        const {id}=args;
        return user.getUser(id);
    }
}