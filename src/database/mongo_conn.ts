import { connect, connection } from 'mongoose';

export async function run() {
    await connect('mongodb://localhost:27017/BBDD_1_1')
    .then(()=>{
        console.log('Database connected!!')
    }) .catch((err)=>{
        console.error(err)
    });

}
export function endConn() {
    connection.close()
};
