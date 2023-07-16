const sql = require('mssql');
const { config, config1 } = require('../../config/dbConfig')

const getProducts = async (id_KH, searchTerm, page, pageSize) => {
  try {
    await sql.connect(config);
    const offset = (page - 1) * pageSize;
    console.log('id:', id_KH, 'searchTerm:', searchTerm, 'page:', page, 'pageSize:', pageSize);
    const result = await sql.query(`SELECT TEN_SP, HSD, REF , SO_CONT, SUM(SL_TONKHO) AS SL_TONKHO, SUM(KHOI_LUONG) AS KHOI_LUONG
    FROM INVENTORIES
    WHERE ID_KH = ${id_KH} AND TEN_SP LIKE '%${searchTerm}%'
    GROUP BY TEN_SP, HSD, REF, SO_CONT
    ORDER BY TEN_SP
    OFFSET ${offset} ROWS
    FETCH NEXT ${pageSize} ROWS ONLY
    `);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
};
const getallExportmypage = async (id_KH, page, pageSize) => {
  try {
    await sql.connect(config);
    console.log('<<<<<<<<<<', id_KH, page, pageSize)
    const offset = (page - 1) * pageSize;
    const query = `SELECT *
    FROM OB_OBT
    WHERE ID_KH = ${id_KH}
    ORDER BY ID_OBT
    OFFSET ${offset} ROWS
    FETCH NEXT ${pageSize} ROWS ONLY`;
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
};
const getallImportmypage = async (id_KH, page, pageSize) => {
  try {
    await sql.connect(config);
    console.log('<<<<<<<<<<', id_KH, page, pageSize)
    const offset = (page - 1) * pageSize;
    const query = `SELECT *
    FROM IB_IBT
    WHERE ID_KH = ${id_KH}
    ORDER BY ID_IBT
    OFFSET ${offset} ROWS
    FETCH NEXT ${pageSize} ROWS ONLY`;
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
};
const detailProduct = async (id_SP) => {
  try {
    await sql.connect(config);
    const query = `SELECT TEN_SP, SUM(SO_LUONG) as SO_LUONG, SUM(KHOI_LUONG) as KHOI_LUONG, HSD, REF
    FROM IB_IBD
    WHERE ID_IBT = ${id_SP}
    GROUP BY TEN_SP, HSD, REF
    ORDER BY TEN_SP`;
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
}
const detailProductXuat = async (id_SP) => {
  try {
    await sql.connect(config);
    const query = `select TEN_SP, SUM(SL_XUAT) as SL_XUAT, SUM (KL_XUAT) as KL_XUAT, HSD,REF

    from OB_PLT 
    
    where ID_OBT=${id_SP}
    
    group by TEN_SP,HSD,REF
    
    order by TEN_SP
    `;
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
}

const findByUsernameAndPassword = async (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Bỏ khoảng trắng trước và sau tài khoản và mật khẩu
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();

      const pool = await sql.connect(config1);

      const query = `SELECT * FROM USER_MOBILE WHERE USERNAME = '${trimmedUsername}' AND PASSWORD = '${trimmedPassword}'`;
      const result = await pool.request().query(query);

      const user = result.recordset.length > 0 ? result.recordset[0] : null;
      resolve(user);
    } catch (error) {
      reject(error);
    }

  });


}
const locnhaphang = async (id_KH, page, pageSize, startDate, endDate) => {
  try {
    await sql.connect(config);
    const offset = (page - 1) * pageSize;
    const query = `SELECT *
    FROM IB_IBT
    WHERE ID_KH = ${id_KH} AND NGAY_NHAP BETWEEN '${startDate}' AND '${endDate}'
    ORDER BY ID_IBT
    OFFSET ${offset} ROWS
    FETCH NEXT ${pageSize} ROWS ONLY`;
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
};
const locxuathang = async (id_KH, page, pageSize, startDate, endDate) => {
  try {
    await sql.connect(config);
    const offset = (page - 1) * pageSize;
    const query = `SELECT *
    FROM OB_OBT
    WHERE ID_KH = ${id_KH} AND NGAY_XUAT BETWEEN '${startDate}' AND '${endDate}'
    ORDER BY ID_OBT
    OFFSET ${offset} ROWS
    FETCH NEXT ${pageSize} ROWS ONLY`;
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    throw error;
  } finally {
    sql.close();
  }
};
module.exports = {
  getProducts,
  getallImportmypage,
  getallExportmypage,
  findByUsernameAndPassword,
  detailProduct,
  detailProductXuat,
  locnhaphang,
  locxuathang
};
