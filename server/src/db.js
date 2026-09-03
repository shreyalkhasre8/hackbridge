import mysql from 'mysql2/promise';
export const pool=mysql.createPool({host:process.env.MYSQLHOST||'localhost',port:Number(process.env.MYSQLPORT||3306),user:process.env.MYSQLUSER||'root',password:process.env.MYSQLPASSWORD||'',database:process.env.MYSQLDATABASE||'hackbridge',waitForConnections:true,connectionLimit:10,namedPlaceholders:true,multipleStatements:true});
