use duckdb::{params, Connection, Result};

#[derive(Debug)]
struct MemoryUsage {
    tag: String,
    memory_usage_bytes: i64,
    temporary_storage_bytes: i64,
}

pub fn db_connect() -> Result<()> {
    let conn = Connection::open_in_memory()?;
    let mut stmt = conn.prepare("FROM duckdb_memory();")?;
    let res = stmt.query_map([], |row| {
        Ok(MemoryUsage {
            tag: row.get(0)?,
            memory_usage_bytes: row.get(1)?,
            temporary_storage_bytes: row.get(2)?,
        })
    })?;
    for item in res {
        println!("test {:?}", item.unwrap());
    }
    Ok(())
}
